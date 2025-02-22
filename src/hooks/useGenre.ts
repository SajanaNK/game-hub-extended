import useGenres from "./useGenres";

const useGenre = (genreId?:number) => {
const {data: genres} = useGenres();
  const genre = genres?.results.find((genre) => genre.id === genreId);

    return genre;
};

export default useGenre;