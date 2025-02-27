import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CriticScore from '../components/CriticScore';
import DefinitionItem from '../components/DefinitionItem';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenShots from '../components/GameScreenShots';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';
import useMedia from '../hooks/useMedia';


const GameDetailsPage = () => {

  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);


  if (isLoading) {
    return <Spinner />
  }

  if (error || !game) {
    throw error;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText text={game.description_raw} limit={200} />

        <GameAttributes game={game} />

      </Box>
      
      <Box>
        <GameTrailer id={game.id} />

        <GameScreenShots id={game.id} />
      </Box>


    </SimpleGrid>
  )
}

export default GameDetailsPage