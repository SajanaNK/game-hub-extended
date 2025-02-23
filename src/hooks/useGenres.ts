import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRE } from "../data/constants";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";
import { Genre } from "../entities/Genre";

const useGenres = () => { 

  const apiClient = new APIClient<FetchResponse<Genre>>("/genres");

  return useQuery({
    queryKey: CACHE_KEY_GENRE,
    queryFn:() => apiClient.getAll({}),
    staleTime: ms('24h'), //24h
    // staleTime: 1000 * 60 * 60 * 24, //24h
    keepPreviousData: true,
    initialData: genres,
  });

 }

export default useGenres;