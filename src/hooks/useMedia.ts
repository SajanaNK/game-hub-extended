import { useQuery } from "@tanstack/react-query";
import { Media } from "../entities/Media";
import APIClient, { FetchResponse } from "../services/api-client";

const useMedia = (id: number | string, mediaType: string) => {

    const apiClient = new APIClient<FetchResponse<Media>>("/games");

    return useQuery({
        queryKey: ["media", id, mediaType],
        queryFn: () => apiClient.getMedia(id, mediaType),
        staleTime: 1000 * 60 * 60 * 24,
    });

};

export default useMedia;