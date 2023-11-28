import { IsNotEmpty, IsString } from 'class-validator';

export class FlujoProcesoDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  tipo_flujo_proceso_id: string;

  @IsString()
  @IsNotEmpty()
  opciones_id: string;
}
