import "axios";
//override lại default types/interfaces của library
declare module "axios" {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}
