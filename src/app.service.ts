import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcomeMessage(): string {
    return '¡Bienvenido a la API del restaurante!';
  }
}
