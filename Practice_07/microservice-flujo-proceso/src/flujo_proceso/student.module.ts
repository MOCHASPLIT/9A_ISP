import { Module } from '@nestjs/common';
import { FlujoProcesoService } from './flujo_proceso.service';
import { FlujoProcesoSchema } from './schema/flujo_proceso.schema';
import { FLUJO_PROCESO } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { FlujoProcesoController } from './flujo_proceso.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FLUJO_PROCESO.name,
        useFactory: () => FlujoProcesoSchema,
      },
    ]),
  ],
  controllers: [FlujoProcesoController],
  providers: [FlujoProcesoService],
})
export class FlujoProcesoModule {}
