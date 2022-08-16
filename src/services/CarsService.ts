import { ICarsBrands } from '../hooks/useCarsBrands';
import { ICarsModels } from '../hooks/useCarsModels';
import HttpClient from './utils/HttpClient';

class CarsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('https://parallelum.com.br/fipe/api/v1/carros/');
  }

  async listBrands(): Promise<ICarsBrands[]> {
    return this.httpClient.get('marcas');
  }

  async listModels(modelCode: string): Promise<ICarsModels> {
    return this.httpClient.get(`marcas/${modelCode}/modelos`);
  }
}

export default new CarsService();
