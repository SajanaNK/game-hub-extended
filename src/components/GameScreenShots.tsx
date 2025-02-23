import { SimpleGrid,Image } from '@chakra-ui/react'
import React from 'react'
import { ScreenShots } from '../entities/ScreenShot';
import useMedia from '../hooks/useMedia';

interface Props{
    id: number
}

const GameScreenShots = ({id}: Props) => {

const { data: screenshots, isLoading, error } = useMedia<ScreenShots>(id, 'screenshots');
    
if (isLoading) {
    return null;
}

if (error || !screenshots) {
    return null;
}

  return (
    <SimpleGrid columns={{base:1, md:2}} spacing={2} marginTop="1rem">
        {screenshots?.results.map((screenshot) => (
            <Image key={screenshot.id}  src={screenshot.image} />
        ))}
    </SimpleGrid>
  )
}

export default GameScreenShots