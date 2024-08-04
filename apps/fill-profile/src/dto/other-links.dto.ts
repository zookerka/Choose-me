import { ArrayNotEmpty, IsArray, IsString, MaxLength } from 'class-validator';

export class OtherLinksDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @MaxLength(63, { each: true })
  links: string[];
}
