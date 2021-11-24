import { IsNotEmpty } from "class-validator";

export class AdminDto {
  @IsNotEmpty()
  readonly adminid: string;

  @IsNotEmpty()
  readonly adminname: string;

  @IsNotEmpty()
  readonly password: string;

  readonly note: string;

  @IsNotEmpty()
  readonly createdate: string;

  @IsNotEmpty()
  readonly updatedate: string;
}