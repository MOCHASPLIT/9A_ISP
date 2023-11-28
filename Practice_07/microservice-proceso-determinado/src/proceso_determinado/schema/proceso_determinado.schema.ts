import * as mongoose from 'mongoose';

export const ProcesoDeterminadoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    // flujo_proceso_id: { type: String, required: true },
    proceso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'procesos' },
    flujo_proceso_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'flujoProcesos',
    },
    //El ref no es el de la base de datos es del export const FLUJO_PROCESO = { name: 'flujoProcesos' };
  },
  { timestamps: true },
);
