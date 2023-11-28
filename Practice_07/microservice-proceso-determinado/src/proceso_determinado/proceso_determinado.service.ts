import { ProcesoDeterminadoDTO } from './dto/proceso_determinado.dto';
import { PROCESO_DETERMINADO } from '../common/models/models';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProcesoDeterminado } from 'src/common/interfaces/proceso_determinado.interface';
// import axios from 'axios';
// import * as moment from 'moment';
// import { ILocation } from 'src/common/interfaces/location.interface';
// import { IWeather } from 'src/common/interfaces/weather.interface';

@Injectable()
export class ProcesoDeterminadoService {
  constructor(
    @InjectModel(PROCESO_DETERMINADO.name)
    private readonly model: Model<IProcesoDeterminado>,
  ) {}

  // async getLocation(destinationCity: string): Promise<ILocation> {
  //   const { data } = await axios.get(
  //     `https://www.metaweather.com/api/location/search/?query=${destinationCity}`,
  //   );
  //   return data[0];
  // }

  // async getWeather(woeid: number, flightDate: Date): Promise<IWeather[]> {
  //   const dateFormat = moment.utc(flightDate).format();

  //   const year = dateFormat.substring(0, 4);
  //   const month = dateFormat.substring(5, 7);
  //   const day = dateFormat.substring(8, 10);

  //   const { data } = await axios.get(
  //     `https://www.metaweather.com/api/location/${woeid}/${year}/${month}/${day}`,
  //   );
  //   return data;
  // }

  // assign(
  //   { _id, pilot, airplane, destinationCity, flightDate, passengers }: IProcesoDeterminado,
  //   weather: IWeather[],
  // ): IProcesoDeterminado {
  //   return Object.assign({
  //     _id,
  //     pilot,
  //     airplane,
  //     destinationCity,
  //     flightDate,
  //     passengers,
  //     weather,
  //   });
  // }

  async create(
    procesoDeterminadoDTO: ProcesoDeterminadoDTO,
  ): Promise<IProcesoDeterminado> {
    const newFlight = new this.model(procesoDeterminadoDTO);
    return await newFlight.save();
  }

  async findAll(): Promise<IProcesoDeterminado[]> {
    return await this.model
      .find()
      .populate('proceso_id')
      .populate('flujo_proceso_id');
  }

  async findOne(id: string): Promise<IProcesoDeterminado> {
    return await this.model
      .findById(id)
      .populate('proceso_id')
      .populate('flujo_proceso_id');
    // const location: ILocation = await this.getLocation(flight.destinationCity);

    // const weather: IWeather[] = await this.getWeather(
    //   location.woeid,
    //   flight.flightDate,
    // );

    // return this.assign(flight, weather);
  }

  async update(
    id: string,
    procesoDeterminadoDTO: ProcesoDeterminadoDTO,
  ): Promise<IProcesoDeterminado> {
    return await this.model.findByIdAndUpdate(id, procesoDeterminadoDTO, {
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

  // async addPassenger(
  //   flightId: string,
  //   passengerId: string,
  // ): Promise<IProcesoDeterminado> {
  //   return await this.model
  //     .findByIdAndUpdate(
  //       flightId,
  //       {
  //         $addToSet: { passengers: passengerId },
  //       },
  //       { new: true },
  //     )
  //     .populate('passengers');
  // }
}
