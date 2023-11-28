import {
  ProcesoDeterminadoMSG,
  // ProcesoMSG,
  // FlujoProcesoMSG,
} from '../common/constants';
import { ProcesoDeterminadoDTO } from './dto/proceso_determinado.dto';
import { Observable } from 'rxjs';
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpException,
  // HttpStatus,
  Param,
  Post,
  Put,
  // UseGuards,
} from '@nestjs/common';
import { IProcesoDeterminado } from 'src/common/interfaces/proceso_determinado.interface';
import { ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('proceso_determinados')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/proceso_determinado')
export class ProcesoDeterminadoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}

  private _clientProxyProcesoDeterminado =
    this.clientProxy.clientProxyProcesoDeterminado();
  private _clientProxyProceso = this.clientProxy.clientProxyProceso();

  @Post()
  create(
    @Body() procesoDeterminadoDTO: ProcesoDeterminadoDTO,
  ): Observable<IProcesoDeterminado> {
    return this._clientProxyProcesoDeterminado.send(
      ProcesoDeterminadoMSG.CREATE,
      procesoDeterminadoDTO,
    );
  }

  @Get()
  findAll(): Observable<IProcesoDeterminado[]> {
    return this._clientProxyProcesoDeterminado.send(
      ProcesoDeterminadoMSG.FIND_ALL,
      '',
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IProcesoDeterminado> {
    return this._clientProxyProcesoDeterminado.send(
      ProcesoDeterminadoMSG.FIND_ONE,
      id,
    );
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() procesoDeterminadoDTO: ProcesoDeterminadoDTO,
  ): Observable<IProcesoDeterminado> {
    return this._clientProxyProcesoDeterminado.send(
      ProcesoDeterminadoMSG.UPDATE,
      { id, procesoDeterminadoDTO },
    );
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyProcesoDeterminado.send(
      ProcesoDeterminadoMSG.DELETE,
      id,
    );
  }

  // @Post(':flightId/passenger/:passengerId')
  // async addPassenger(
  //   @Param('flightId') flightId: string,
  //   @Param('passengerId') passengerId: string,
  // ) {
  //   const passenger = await this._clientProxyPassenger
  //     .send(PassengerMSG.FIND_ONE, passengerId)
  //     .toPromise();

  //   if (!passenger)
  //     throw new HttpException('Passenger Not Found', HttpStatus.NOT_FOUND);

  //   return this._clientProxyProcesoDeterminado.send(
  //     ProcesoDeterminadoMSG.ADD_PROCESO_DETERMINADO,
  //     {
  //       flightId,
  //       passengerId,
  //     },
  //   );
  // }
}
