import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  auth() {
    return {
      authenticated: true,
    };
  }

  @Post()
  authenticate(@Body() postData: { username: string; password: string }) {
    const { username, password } = postData;
    // check the database
    console.log(username, password);
    return {
      authenticated: true,
      stuff: true,
      stuff2: true,
      stuff3: true,
      stuff4: true,
      stuff5: true,
      stuff6: true,
      stuff7: true,
      stuff8: true,
      stuff9: true,
      stuff10: true,
      stuff11: true,
      stuff12: true,
    };
  }
}
