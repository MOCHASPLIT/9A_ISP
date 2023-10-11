import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { RolesModule } from './roles/roles.module';
import { PersonaModule } from './persona/persona.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { DocumentoModule } from './documento/documento.module';
import { DepartamentoUsuarioModule } from './departamento_usuario/departamento_usuario.module';
import { SolicitudBajaModule } from './solicitud_baja/solicitud_baja.module';
import { ProcesoDeterminadoModule } from './proceso_determinado/proceso_determinado.module';
import { FlujoProcesoModule } from './flujo_proceso/flujo_proceso.module';
import { ProcesoModule } from './proceso/proceso.module';
import { TipoFlujoProcesoModule } from './tipo_flujo_proceso/tipo_flujo_proceso.module';
import { OpcionesModule } from './opciones/opciones.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.develop.env'],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get<string>('MONGO_USERNAME')}:${configService.get<string>('MONGO_PASSWORD')}@cluster0.ezxkxg9.mongodb.net/`,
        // Más configuraciones de Mongoose si es necesario
      }),
      inject: [ConfigService],
    }),
    // Resto de los módulos
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
