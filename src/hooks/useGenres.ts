import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRE } from "../data/constants";
import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => { 

  const apiClient = new APIClient<FetchResponse<Genre>>("/genres");

  return useQuery({
    queryKey: CACHE_KEY_GENRE,
    queryFn:() => apiClient.getAll({}),
    staleTime: 1000 * 60 * 60 * 24,
    keepPreviousData: true,
    initialData: {
      count: genres.length,
      results: genres,
    }
  });

 }

export default useGenres;