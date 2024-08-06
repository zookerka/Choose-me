import { Injectable, Logger, Inject } from '@nestjs/common';
import { PrismaServiceUsers } from '@app/database/users/prisma.users.service';
import { Cache } from 'cache-manager';
import { PersonalInfoDto } from './dto/personal-info.dto';
import { SkillsDto } from './dto/skills.dto';
import { WorkExperienceDto } from './dto/work-exp.dto';
import { EducationDto } from './dto/education.dto';
import { OtherLinksDto } from './dto/other-links.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class FillProfileService {
  private requiredSteps = [
    'personalInfo',
    'skills',
    'workExp',
    'education',
    'links',
  ];

  constructor(
    private readonly prismaServiceUsers: PrismaServiceUsers,
    private readonly logger: Logger,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  private async cacheData(userId: string, key: string, data: any) {
    const cacheKey = `profile:${userId}`;
    const existingData =
      (await this.cacheManager.get<Record<string, any>>(cacheKey)) || {};
    existingData[key] = data;
    await this.cacheManager.set(cacheKey, existingData, 604800000 /* 7 days*/);
  }

  async fillPersonalInformation(
    userId: string,
    personalInfoDto: PersonalInfoDto,
  ) {
    try {
      await this.cacheData(userId, 'personalInfo', personalInfoDto);
      return { message: 'Personal information cached successfully' };
    } catch (error) {
      this.logger.error(
        'fill-profile.service: fillPersonalInformation',
        error.stack,
      );
      throw new Error('Access denied');
    }
  }

  async fillSkills(userId: string, skillsDto: SkillsDto) {
    try {
      await this.cacheData(userId, 'skills', skillsDto);
      return { message: 'Skills cached successfully' };
    } catch (error) {
      this.logger.error('fill-profile.service: fillSkills', error.stack);
      throw new Error('Access denied');
    }
  }

  async fillWorkExp(userId: string, workExperienceDto: WorkExperienceDto) {
    try {
      await this.cacheData(userId, 'workExp', workExperienceDto);
      return { message: 'Work experience cached successfully' };
    } catch (error) {
      this.logger.error('fill-profile.service: fillWorkExp', error.stack);
      throw new Error('Access denied');
    }
  }

  async fillEducation(userId: string, educationDto: EducationDto) {
    try {
      await this.cacheData(userId, 'education', educationDto);
      return { message: 'Education cached successfully' };
    } catch (error) {
      this.logger.error('fill-profile.service: fillEducation', error.stack);
      throw new Error('Access denied');
    }
  }

  async fillLinks(userId: string, otherLinksDto: OtherLinksDto) {
    try {
      await this.cacheData(userId, 'links', otherLinksDto);
      return { message: 'Links cached successfully' };
    } catch (error) {
      this.logger.error('fill-profile.service: fillLinks', error.stack);
      throw new Error('Access denied');
    }
  }

  private async validateProfileCompletion(userId: string): Promise<boolean> {
    const cacheKey = `profile:${userId}`;
    const cachedData =
      await this.cacheManager.get<Record<string, any>>(cacheKey);
    if (!cachedData) return false;

    return this.requiredSteps.every((step) => cachedData.hasOwnProperty(step));
  }

  async finalizeProfile(userId: string) {
    try {
      const isComplete = await this.validateProfileCompletion(userId);

      if (!isComplete) {
        return 'Profile is not complete. Please complete all steps before finalizing.';
      }

      const cacheKey = `profile:${userId}`;
      const cachedData =
        await this.cacheManager.get<Record<string, any>>(cacheKey);

      const userProfile = await this.prismaServiceUsers.profile.update({
        where: { userId },
        data: {
          ...cachedData.personalInfo,
          unProvedSkills: cachedData.skills?.skills,
          positions: cachedData.workExp?.positions,
          workExp: cachedData.workExp?.workExp,
          workPlaces: cachedData.workExp?.workPlaces,
          education: cachedData.education?.education,
          otherLinks: cachedData.links?.links,
        },
      });

      await this.cacheManager.del(cacheKey);

      return userProfile;
    } catch (error) {
      this.logger.error('fill-profile.service: finalizeProfile', error.stack);
      throw new Error('Access denied');
    }
  }
}
