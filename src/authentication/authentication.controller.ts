import {
  Controller,
  Post,
  Body,
  Req,
  HttpCode,
  UseGuards,
  Res,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { RegisterDto } from './dto/register.dto';
import { RequestWithUser } from './requestWithUser.interface';
import { LocalAuthenticationGuard } from './localAuthentication.guard';
import { Response } from 'express';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}
  @Post('register')
  async register(@Body() registartionData: RegisterDto) {
    return this.authenticationService.register(registartionData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async login(@Req() request: RequestWithUser, @Res() response: Response) {
    const user = request.user;
    const cookie = this.authenticationService.getCookieWithJwtToken(user._id);
    response.setHeader('Set-Cookie', cookie);
    user.password = undefined;
    return user;
  }
}
