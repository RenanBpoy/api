import { Body, Controller, Post } from '@nestjs/common';
import { ValidateDto } from './dto/validate.dto';

@Controller('auth')
export class AuthController {

  @Post('validate')
  validatePassword(@Body() body: ValidateDto) {
    const correct = "1234";

    if (body.password === correct) {
      return { valid: 1 };
    }
    return { valid: 0 };
  }
}
