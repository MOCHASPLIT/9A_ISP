import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { FlujoProcesoController } from './flujo_proceso.controller';

@Module({
  imports: [ProxyModule],
  controllers: [FlujoProcesoController],
})
export class FlujoProcesoModule {}
