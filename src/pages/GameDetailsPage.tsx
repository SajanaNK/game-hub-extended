import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import useGame from '../hooks/useGame';


const GameDetailsPage = () => {

  const {slug} =  useParams();

  const {data: game, isLoading, error} = useGame(slug!);

  if (isLoading) {
    return <Spinner />
  }

  if (error || !game) {
    throw error;
  }

  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <ExpandableText text={game.description_raw} limit={200} />
      {/* <Text>
        {game.description_raw}
      </Text> */}
    </Box>
  )
}

export default GameDetailsPage