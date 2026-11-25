import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  @Post("register")
  register(@Body() user: CreateUserDto) {
    return {
      message: "User registered successfully",
      user: {
        fullName: user.fullName,
        email: user.email,
        age: user.age,
        accountType: user.accountType,
      },
    };
  }
}
