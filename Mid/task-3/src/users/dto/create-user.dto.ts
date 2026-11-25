import {
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  Max,
  Min,
  MinLength,
  ValidateIf,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @Matches(/\S/, { message: "fullName must contain a non-whitespace character" })
  fullName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/, {
    message:
      "password must include uppercase, lowercase, number, and special character",
  })
  password!: string;

  @IsInt()
  @Min(18)
  @Max(60)
  age!: number;

  @IsString()
  @Matches(/^01\d{9}$/, {
    message: "phone must be exactly 11 digits and begin with 01",
  })
  phone!: string;

  @IsIn(["student", "teacher"])
  accountType!: "student" | "teacher";

  @ValidateIf((_object, value) => value !== undefined)
  @IsString()
  @MinLength(10)
  address?: string;
}
