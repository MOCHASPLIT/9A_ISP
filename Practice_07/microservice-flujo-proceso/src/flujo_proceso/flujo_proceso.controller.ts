import { FlujoProcesoService } from './flujo_proceso.service';
import { FlujoProcesoDTO } from './dto/flujo_proceso.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FlujoProcesoMSG } from 'src/common/constants';

@Controller()
export class FlujoProcesoController {
  constructor(private readonly flujoProcesoService: FlujoProcesoService) {}

  @MessagePattern(FlujoProcesoMSG.CREATE)
  create(@Payload() flujoProcesoDTO: FlujoProcesoDTO) {
    return this.flujoProcesoService.create(flujoProcesoDTO);
  }

  @MessagePattern(FlujoProcesoMSG.FIND_ALL)
  findAll() {
    return this.flujoProcesoService.findAll();
  }

  @MessagePattern(FlujoProcesoMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.flujoProcesoService.findOne(id);
  }
  @MessagePattern(FlujoProcesoMSG.UPDATE)
  update(@Payload() payload: any) {
    return this.flujoProcesoService.update(payload.id, payload.flujoProcesoDTO);
  }

  @MessagePattern(FlujoProcesoMSG.DELETE)
  delete(@Payload() id: string) {
    return this.flujoProcesoService.delete(id);
  }
}
