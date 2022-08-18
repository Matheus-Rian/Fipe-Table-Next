import { ICarsInfo, ICarsModels, TableFipeResult } from '../models/carModel';
import HttpClient from './utils/HttpClient';

class CarsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('https://parallelum.com.br/fipe/api/v1/carros/');
  }

  async listBrands(): Promise<ICarsInfo[]> {
    return this.httpClient.get('marcas');
  }

  async listModels(brandCode: string): Promise<ICarsModels> {
    return this.httpClient.get(`marcas/${brandCode}/modelos`);
  }

  async listYears(brandCode: string, modelCode: string): Promise<ICarsInfo[]> {
    return this.httpClient.get(`marcas/${brandCode}/modelos/${modelCode}/anos`);
  }

  async showPriceTableFipe(brandCode: string, modelCode: string, yearCode: string): Promise<TableFipeResult> {
    return this.httpClient.get(`marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`);
  } 
}

export default new CarsService();
