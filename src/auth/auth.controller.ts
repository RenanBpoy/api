import { Body, Controller, Post } from '@nestjs/common';
import { ValidateDto } from './dto/validate.dto';
import { ValidateTemperatureDto } from './dto/validate-temperature.dto';

@Controller('auth')
export class AuthController {

  // =============================
  // ESP1 – validação de senha
  // =============================
  @Post('validate')
  validatePassword(@Body() body: ValidateDto) {
    const correct = "1234";

    if (body.password === correct) {
      return { valid: 1 };
    }
    return { valid: 0 };
  }

  // =============================
  // ESP3 – validação de temperatura
  // =============================
  @Post('validate-temperature')
  validateTemperature(@Body() data: ValidateTemperatureDto) {
    // aqui, quem define limite é o ESP3
    // a API apenas confirma recebimento
    if (data.value !== undefined) {
      return { valid: 1 };
    }
    return { valid: 0 };
  }
}
