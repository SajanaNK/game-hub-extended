import { Heading } from '@chakra-ui/react'
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';
import useGameQueryStore from '../store/gameQueryStore';


const GameHeading = () => {
  
  const [genreId, platformId] = useGameQueryStore(s => [s.gameQuery.genreId, s.gameQuery.platformId]);
  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);



  const heading = `${genre?.name ?? ''} ${platform?.name ?? ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading