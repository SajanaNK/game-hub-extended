import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRE } from "../data/constants";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => { 

  const apiClient = new APIClient<Genre[]>(`/genres`);

  return useQuery<Genre[],Error>({
    queryKey: CACHE_KEY_GENRE,
    queryFn:() => apiClient.getAll(),
    staleTime: 1000 * 60 * 60 * 24,
    keepPreviousData: true,
    
  });

 }

export default useGenres;