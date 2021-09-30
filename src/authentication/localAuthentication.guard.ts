import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Todo: Passing the strategy name directly into  AuthGuard() in the controller might not be considered a clean approach.
 * Instead, I should create my own class
 */
@Injectable()
export class LocalAuthenticationGuard extends AuthGuard('local') {}
