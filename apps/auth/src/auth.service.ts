import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { PrismaServiceUsers } from '@app/database/users/prisma.users.service';
import { AuthSignupDto } from './dto/auth.signup.dto';
import * as argon from 'argon2';
import { Tokens } from '@app/common/types/tokens.type';
import { JwtService } from '@nestjs/jwt';
import { AuthSigninDto } from './dto/auth.signin.dto';
import { JwtPayload } from '@app/common';
import { User } from 'prisma.db/generated/clientUsers';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaServiceUsers: PrismaServiceUsers,
    private readonly jwtService: JwtService,
    private readonly logger: Logger,
    private configService: ConfigService,
  ) {}

  /**
   * This function hashes data
   * @param data Data to hash
   * @returns Hashed data
   */
  async hashData(data: string): Promise<string> {
    return argon.hash(data);
  }

  /**
   * This function updates Refresh Token in User DataBase
   * @param userId UserId by Access Token
   * @param rt Refresh Token to compare with hash
   */
  async updateRtHash(userId: string, rt: string): Promise<void> {
    const hash = await this.hashData(rt);
    await this.prismaServiceUsers.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRt: hash,
      },
    });
  }

  /**
   * This function creates new pair of tokens
   * @param userId UserId by Access Token
   * @param email Email by UserId
   * @returns {
   *          access_token: at,
   *          refresh_token: rt,
   *          }
   *         Returns pair of Tokens
   */
  async createTokens(userId: string, email: string): Promise<Tokens> {
    try {
      const jwtPayload: JwtPayload = {
        sub: userId,
        email: email,
      };

      const [at, rt] = await Promise.all([
        this.jwtService.signAsync(jwtPayload, {
          secret: this.configService.get<string>('AT_SECRET'),
          expiresIn: '15m',
        }),
        this.jwtService.signAsync(jwtPayload, {
          secret: this.configService.get<string>('RT_SECRET'),
          expiresIn: '7d',
        }),
      ]);

      return {
        access_token: at,
        refresh_token: rt,
      };
    } catch (error) {
      this.logger.error('Error in createTokens');
      throw new error('Access denied');
    }
  }

  /**
   * This functions is creating new User and empty profile
   * @param authSignupDto Dto for registration
   * @returns Returns new user
   */
  async signupLocal(authSignupDto: AuthSignupDto): Promise<User> {
    try {
      const hash = await this.hashData(authSignupDto.password);
      const newUser = await this.prismaServiceUsers.user.create({
        data: {
          email: authSignupDto.email,
          login: authSignupDto.login,
          hash: hash,
        },
      });
      const newProfile = await this.prismaServiceUsers.profile.create({
        data: {
          workPlaces: [],
          positions: [],
          unProvedSkills: [],
          provedSkills: [],
          userId: newUser.id,
        },
      });

      const tokens = await this.createTokens(newUser.id, newUser.email);
      await this.updateRtHash(newUser.id, tokens.refresh_token);

      return newUser;
    } catch (error) {
      this.logger.error('Error in signupLocal', error.stack);
      throw new error('Access denied');
    }
  }

  /**
   * This function signs User in
   * @param authSigninDto Dto for SignIn
   * @returns pair of tokens
   */
  async signinLocal(authSigninDto: AuthSigninDto): Promise<Tokens> {
    try {
      const user = await this.prismaServiceUsers.user.findUnique({
        where: {
          email: authSigninDto.email,
        },
      });
      if (!user) {
        throw new ForbiddenException('Access denied');
      }
      const passwordMatching = await argon.verify(
        user.hash,
        authSigninDto.password,
      );
      if (!passwordMatching) {
        throw new ForbiddenException('Access denied');
      }

      const tokens = await this.createTokens(user.id, user.email);

      await this.updateRtHash(user.id, tokens.refresh_token);

      return tokens;
    } catch (error) {
      this.logger.error('Error in signinLocal', error.stack);
      throw new error('Access denied');
    }
  }

  /**
   * This function deletes Refresh Token from User DB and logs User out
   * @param userId UserId by Access Token
   * @returns Boolean
   */
  async logout(userId: string): Promise<Boolean> {
    try {
      await this.prismaServiceUsers.user.update({
        where: {
          id: userId,
          hashedRt: {
            not: null,
          },
        },
        data: {
          hashedRt: null,
        },
      });
      return true;
    } catch (error) {
      this.logger.error('Error in logout');
      throw new error('Access denied');
    }
  }

  /**
   * This function refreshes tokens for User
   * @param userId UserId by Access Token
   * @param rt Refresh Token by User
   * @returns new pair of tokens
   */
  async refreshTokens(userId: string, rt: string): Promise<Tokens> {
    try {
      const user = await this.prismaServiceUsers.user.findUnique({
        where: {
          id: userId,
        },
      });
      if (!user) {
        throw new ForbiddenException('Access Denied');
      }

      if (!user.hashedRt) {
        throw new ForbiddenException('No hashedrt');
      }

      if (!rt) {
        throw new ForbiddenException('No rt');
      }

      const rtMatching = argon.verify(user.hashedRt, rt);
      if (!rtMatching) {
        throw new ForbiddenException('Access Denied');
      }
      const tokens = this.createTokens(user.id, user.email);
      return tokens;
    } catch (error) {
      this.logger.error('Error in refreshTokens');
      throw new error('Access denied');
    }
  }
}
