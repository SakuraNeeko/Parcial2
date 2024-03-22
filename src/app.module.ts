import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlatosModule } from './platos/platos.module'; // Importa el módulo de Platos
import { IngredientesModule } from './ingredientes/ingredientes.module'; // Importa el módulo de Ingredientes
import { ProveedoresModule } from './proveedores/proveedores.module'; // Importa el módulo de Proveedores
import { OrdenesModule } from './ordenes/ordenes.module'; // Importa el módulo de Ordenes
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Neeko:equestria22@cluster0.zwp6ljn.mongodb.net/restaurante?retryWrites=true&w=majority&appName=Cluster0'),
    JwtModule.register({
      signOptions: { expiresIn: '24h' },
    }),
    PlatosModule, // Agrega el módulo de Platos
    IngredientesModule, // Agrega el módulo de Ingredientes
    ProveedoresModule, // Agrega el módulo de Proveedores
    OrdenesModule, // Agrega el módulo de Ordenes
  ],
  controllers: [],
  providers: [AuthService, JwtStrategy],
})
export class AppModule {}
