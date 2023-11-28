import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  // UseGuards,
} from '@nestjs/common';
import { FlujoProcesoMSG } from '../common/constants';
import { Observable } from 'rxjs';
import { FlujoProcesoDTO } from './dto/flujo_proceso.dto';
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { IFlujoProceso } from 'src/common/interfaces/flujo_proceso.interface';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('flujo_procesos')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/flujo_proceso')
export class FlujoProcesoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyFlujoProceso = this.clientProxy.clientProxyFlujoProceso();

  @Post()
  create(@Body() flujoProcesoDTO: FlujoProcesoDTO): Observable<IFlujoProceso> {
    return this._clientProxyFlujoProceso.send(
      FlujoProcesoMSG.CREATE,
      flujoProcesoDTO,
    );
  }

  @Get()
  findAll(): Observable<IFlujoProceso[]> {
    return this._clientProxyFlujoProceso.send(FlujoProcesoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IFlujoProceso> {
    return this._clientProxyFlujoProceso.send(FlujoProcesoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() flujoProcesoDTO: FlujoProcesoDTO,
  ): Observable<IFlujoProceso> {
    return this._clientProxyFlujoProceso.send(FlujoProcesoMSG.UPDATE, {
      id,
      flujoProcesoDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyFlujoProceso.send(FlujoProcesoMSG.DELETE, id);
  }
}
