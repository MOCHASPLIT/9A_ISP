import { FlujoProcesoDTO } from './dto/flujo_proceso.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
// import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FLUJO_PROCESO } from 'src/common/models/models';
import { IFlujoProceso } from 'src/common/interfaces/flujo_proceso.interface';

@Injectable()
export class FlujoProcesoService {
  constructor(
    @InjectModel(FLUJO_PROCESO.name)
    private readonly model: Model<IFlujoProceso>,
  ) {}

  async create(flujoProcesoDTO: FlujoProcesoDTO): Promise<IFlujoProceso> {
    const newStudent = new this.model(flujoProcesoDTO);
    return await newStudent.save();
  }

  async findAll(): Promise<IFlujoProceso[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IFlujoProceso> {
    return await this.model.findById(id);
  }

  async update(
    id: string,
    flujoProcesoDTO: FlujoProcesoDTO,
  ): Promise<IFlujoProceso> {
    return await this.model.findByIdAndUpdate(id, flujoProcesoDTO, {
      new: true,
    });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
