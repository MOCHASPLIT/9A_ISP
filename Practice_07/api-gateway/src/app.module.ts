import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProcesoModule } from './proceso/proceso.module';
import { ProcesoDeterminadoModule } from './proceso_determinado/proceso_determinado.module';
import { AuthModule } from './auth/auth.module';
import { FlujoProcesoModule } from './flujo_proceso/flujo_proceso.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    UserModule,
    ProcesoModule,
    ProcesoDeterminadoModule,
    AuthModule,
    FlujoProcesoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
