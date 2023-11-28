export interface IProcesoDeterminado extends Document {
  name: string;
  proceso_id: IProceso;
  flujo_proceso_id: IFlujoProceso;
}

export interface IProceso extends Document {
  name: string;
}

export interface IFlujoProceso extends Document {
  name: string;
  tipo_flujo_proceso_id: string;
  opciones_id: string;
}
