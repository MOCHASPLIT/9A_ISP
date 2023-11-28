import {
  PROCESO_DETERMINADO,
  PROCESO,
  FLUJO_PROCESO,
} from '../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProcesoDeterminadoController } from './proceso_determinado.controller';
import { ProcesoDeterminadoService } from './proceso_determinado.service';
import { ProcesoSchema } from './schema/proceso.schema';
import { FlujoProcesoSchema } from './schema/flujo_proceso.schema';
import { ProcesoDeterminadoSchema } from './schema/proceso_determinado.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PROCESO.name,
        useFactory: () => ProcesoSchema,
      },
      {
        name: FLUJO_PROCESO.name,
        useFactory: () => FlujoProcesoSchema,
      },
      {
        name: PROCESO_DETERMINADO.name,
        useFactory: () =>
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ProcesoDeterminadoSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
  ],
  controllers: [ProcesoDeterminadoController],
  providers: [ProcesoDeterminadoService],
})
export class ProcesoDeterminadoModule {}
