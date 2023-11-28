import * as mongoose from 'mongoose';

export const FlujoProcesoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tipo_flujo_proceso_id: { type: String, required: true },
    opciones_id: { type: String, required: true },
  },
  { timestamps: true },
);

// Crear índices si es necesario
// FlujoProcesoSchema.index({ name: 1 }, { unique: true });
// FlujoProcesoSchema.index({ tipo_flujo_proceso_id: 1 }, { unique: true });
// FlujoProcesoSchema.index({ opciones_id: 1 }, { unique: true });
