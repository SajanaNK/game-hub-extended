import { useQuery } from "@tanstack/react-query";
import { Media } from "../entities/Media";
import APIClient, { FetchResponse } from "../services/api-client";

const useMedia = <T>(id: number | string, mediaType: string) => {

    const apiClient = new APIClient<FetchResponse<T>>("/games");

    return useQuery({
        queryKey: ["media", id, mediaType],
        queryFn: () => apiClient.getMedia(id, mediaType),
        staleTime: 1000 * 60 * 60 * 24,
    });

};

export default useMedia;