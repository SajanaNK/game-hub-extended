import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {

    const { data: platforms } = usePlatforms();
    const platform = platforms?.results.find((platform) => platform.id === platformId);
    return platform;

}

export default usePlatform;