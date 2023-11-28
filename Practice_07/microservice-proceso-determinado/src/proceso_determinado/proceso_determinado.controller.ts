import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProcesoDeterminadoDTO } from './dto/proceso_determinado.dto';
import { ProcesoDeterminadoService } from './proceso_determinado.service';
import { Controller } from '@nestjs/common';
import { ProcesoDeterminadoMSG } from 'src/common/constants';

@Controller()
export class ProcesoDeterminadoController {
  constructor(
    private readonly procesoDeterminadoService: ProcesoDeterminadoService,
  ) {}

  @MessagePattern(ProcesoDeterminadoMSG.CREATE)
  create(@Payload() procesoDeterminadoDTO: ProcesoDeterminadoDTO) {
    return this.procesoDeterminadoService.create(procesoDeterminadoDTO);
  }

  @MessagePattern(ProcesoDeterminadoMSG.FIND_ALL)
  findAll() {
    return this.procesoDeterminadoService.findAll();
  }

  @MessagePattern(ProcesoDeterminadoMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.procesoDeterminadoService.findOne(id);
  }

  @MessagePattern(ProcesoDeterminadoMSG.UPDATE)
  update(@Payload() payload) {
    return this.procesoDeterminadoService.update(
      payload.id,
      payload.procesoDeterminadoDTO,
    );
  }

  @MessagePattern(ProcesoDeterminadoMSG.DELETE)
  delete(@Payload() id: string) {
    return this.procesoDeterminadoService.delete(id);
  }

  // @MessagePattern(ProcesoDeterminadoMSG.ADD_PASSENGER)
  // addPassenger(@Payload() payload) {
  //   return this.procesoDeterminadoService.addPassenger(
  //     payload.flightId,
  //     payload.passengerId,
  //   );
  // }
}
