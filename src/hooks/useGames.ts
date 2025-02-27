import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store/gameQueryStore";
import Game from "../entities/Game";


const useGames = () => {

  const gameQuery = useGameQueryStore(s => s.gameQuery);

  const apiClient = new APIClient<FetchResponse<Game>>("/games");

  return useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) => apiClient.getAll(
      {
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam 
        }
      }
    ),
    getNextPageParam: (lastPage,allPages) => {
      
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h')
  });
}


  // useData<Game>(
  //   "/games",
  //   {
  //     params: {
  //       genres: gameQuery.genre?.id,
  //       platforms: gameQuery.platform?.id,
  //       ordering: gameQuery.sortOrder,
  //       search: gameQuery.searchText
  //     },
  //   },
  //   [gameQuery]
  // );

export default useGames;
