import { TableFipeResult } from '../contexts/CarContext';
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

  async listModels(brandCode: string): Promise<ICarsModels> {
    return this.httpClient.get(`marcas/${brandCode}/modelos`);
  }

  async listYears(brandCode: string, modelCode: string): Promise<ICarsBrands[]> {
    return this.httpClient.get(`marcas/${brandCode}/modelos/${modelCode}/anos`);
  }

  async showPriceTableFipe(brandCode: string, modelCode: string, yearCode: string): Promise<TableFipeResult> {
    return this.httpClient.get(`marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`);
  } 
}

export default new CarsService();
