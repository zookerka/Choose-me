import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { FillProfileService } from './fill-profile.service';
import { PersonalInfoDto } from './dto/personal-info.dto';
import { GetCurrentUserId } from '@app/common';
import { SkillsDto } from './dto/skills.dto';
import { WorkExperienceDto } from './dto/work-exp.dto';
import { EducationDto } from './dto/education.dto';
import { OtherLinksDto } from './dto/other-links.dto';

@Controller('/fill_profile')
export class FillProfileController {
  constructor(private readonly fillProfileService: FillProfileService) {}

  @Post('/personal')
  @HttpCode(HttpStatus.OK)
  async fillPersonalInformation(
    @Body() personalInfoDto: PersonalInfoDto,
    @GetCurrentUserId() userId: string,
  ) {
    return this.fillProfileService.fillPersonalInformation(
      userId,
      personalInfoDto,
    );
  }

  @Post('/skills')
  @HttpCode(HttpStatus.OK)
  async fillSkills(
    @Body() skillsDto: SkillsDto,
    @GetCurrentUserId() userId: string,
  ) {
    return this.fillProfileService.fillSkills(userId, skillsDto);
  }

  @Post('/work_exp')
  @HttpCode(HttpStatus.OK)
  async fillWorkExp(
    @Body() workExperienceDto: WorkExperienceDto,
    @GetCurrentUserId() userId: string,
  ) {
    return this.fillProfileService.fillWorkExp(userId, workExperienceDto);
  }

  @Post('/education')
  @HttpCode(HttpStatus.OK)
  async fillEducation(
    @Body() educationDto: EducationDto,
    @GetCurrentUserId() userId: string,
  ) {
    return this.fillProfileService.fillEducation(userId, educationDto);
  }

  @Post('/links')
  @HttpCode(HttpStatus.OK)
  async fillLinks(
    @Body() otherLinksDto: OtherLinksDto,
    @GetCurrentUserId() userId: string,
  ) {
    return this.fillProfileService.fillLinks(userId, otherLinksDto);
  }

  @Post('/finalize')
  @HttpCode(HttpStatus.OK)
  async finalizeProfile(@GetCurrentUserId() userId: string) {
    return this.fillProfileService.finalizeProfile(userId);
  }
}
