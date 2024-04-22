import axios from "axios";
import { useQuery } from "react-query";

const fetchProducts = async ( skip:number, id:string) => {
    let url = `https://dummyjson.com/products?total=100&limit=12&skip=${skip}`;
    if (id) {
        url = `https://dummyjson.com/products/${id}`;
        // console.log(url);
      }
      const response = await axios.get(url);
      return response.data;
    };
export const useProductData = ( skip:number, id : string) => {
    return useQuery(['products',  skip, id], () => fetchProducts( skip, id));
}