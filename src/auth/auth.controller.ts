import { Body, Controller, Post } from '@nestjs/common';
import { ValidateDto } from './dto/validate.dto';

@Controller('auth')
export class AuthController {

  @Post('validate')
  validate(@Body() body: ValidateDto) {

    // ===============================
    // VALIDAÇÃO DE SENHA (ESP1)
    // ===============================
    if (body.password !== undefined) {
      const correct = "1234";

      if (body.password === correct) {
        return { valid: 1 };
      }
      return { valid: 0 };
    }

    // ===============================
    // VALIDAÇÃO DE TEMPERATURA (ESP3)
    // ===============================
    if (body.temperature !== undefined) {
      const LIMIT_TEMPERATURE = 30; // Ajuste aqui o limite desejado

      if (body.temperature > LIMIT_TEMPERATURE) {
        return { valid: 1 };
      }
      return { valid: 0 };
    }

    // ===============================
    // CASO NENHUM CAMPO TENHA SIDO ENVIADO
    // ===============================
    return { valid: 0 };
  }
}
