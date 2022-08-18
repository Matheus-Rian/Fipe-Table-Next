export interface ICarContext {
  carCodes: CarCodes,
  updateCarCodes: (updateData: Partial<CarCodes>) => void,
  tableFipeResult: TableFipeResult | null,
  storeTableFipeResult: (data: TableFipeResult) => void,
};

export type ICarsInfo = {
  nome: string,
  codigo: string,
};

export type CarCodes = {
  brand: string,
  model: string,
  year: string,
};

export type ICarsModels = {
  anos: ICarsInfo[];
  modelos: ICarsInfo[];
}

export type TableFipeResult = {
  AnoModelo: number,
  CodigoFipe: string,
  Combustivel: string,
  Marca: string,
  MesReferencia: string,
  Modelo: string,
  SiglaCombustivel: string,
  TipoVeiculo: number
  Valor: string,
};