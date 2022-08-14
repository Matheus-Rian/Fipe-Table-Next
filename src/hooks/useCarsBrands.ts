import { useFetch } from "./useFetch";

type ICarsBrands = {
  nome: string,
  codigo: string,
};

export const useCarsBrands = () => {
  const url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';

  const { response } = useFetch<ICarsBrands[]>(url);

  return {
    carsBrands: response
  };
}