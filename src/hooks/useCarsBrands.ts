import { useFetch } from "./useFetch";

export type ICarsBrands = {
  nome: string,
  codigo: string,
};

export const useCarsBrands = () => {
  const url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';

  const { response, error } = useFetch<ICarsBrands[]>(url);

  return {
    carsBrands: response,
    error
  };
}