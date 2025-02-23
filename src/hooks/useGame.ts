import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game } from "./useGames";


const useGame = (slug:string) => {
    const apiClient = new APIClient<Game>("/games");

    return  useQuery({
        queryKey: ["games", slug],
        queryFn: () => apiClient.get(slug),
        staleTime: 1000 * 60 * 60 * 24,
      });
};

export default useGame;