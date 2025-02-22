import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORM } from "../data/constants";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {

  const apiClient = new APIClient<FetchResponse<Platform>>("/platforms");

  return useQuery({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: () => apiClient.getAll({}),
    staleTime: ms('24h'),
    // staleTime: 1000 * 60 * 60 * 24,
    keepPreviousData: true,
    initialData: platforms
  });

};

export default usePlatforms;
