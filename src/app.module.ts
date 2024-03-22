import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarcasModule } from './marcas/marcas.module'; // Importa el módulo de Platos
import { ProductosModule } from './productos/productos.module'; // Importa el módulo de Ingredientes
import { ClientesModule } from './clientes/clientes.module'; // Importa el módulo de Proveedores
import { VentasModule } from './ventas/ventas.module'; // Importa el módulo de Ordenes
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Neeko:equestria22@cluster0.zwp6ljn.mongodb.net/restaurante?retryWrites=true&w=majority&appName=Cluster0'),
    JwtModule.register({
      signOptions: { expiresIn: '24h' },
    }),
    MarcasModule, // Agrega el módulo de Platos
    ProductosModule, // Agrega el módulo de Ingredientes
    ClientesModule, // Agrega el módulo de Proveedores
    VentasModule, // Agrega el módulo de Ordenes
  ],
  controllers: [],
  providers: [AuthService, JwtStrategy],
})
export class AppModule {}
