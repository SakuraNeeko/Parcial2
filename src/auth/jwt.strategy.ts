import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service'; // Tu servicio de autenticación

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'equestria22', // Aquí debes colocar tu clave secreta para firmar JWT
    });
  }

  async validate(payload: any) {
    return this.authService.validateUser(payload); // Implementa este método en tu servicio de autenticación
  }
}
