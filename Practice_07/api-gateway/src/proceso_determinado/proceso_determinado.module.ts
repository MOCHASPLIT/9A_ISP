import { ProxyModule } from '../common/proxy/proxy.module';
import { Module } from '@nestjs/common';
import { ProcesoDeterminadoController } from './proceso_determinado.controller';

@Module({
  imports: [ProxyModule],
  controllers: [ProcesoDeterminadoController],
})
export class ProcesoDeterminadoModule {}
