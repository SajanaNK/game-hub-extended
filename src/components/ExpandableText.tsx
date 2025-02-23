import { Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

interface Props {
    text: string;
    limit: number;
}

const ExpandableText = ({ text, limit = 300 }: Props) => {

    const [showAll, setShowAll] = useState<boolean>(false)

    if(!text){
        return null;
    }

    if (text.length <= limit) {
        return <Text>{text}</Text>
    }

    return (
        <Text>
            {showAll
                ? text 
                : text.slice(0, limit)  + "..."}
            <Button 
            size={"xs"}
            fontWeight={"bold"}
            marginLeft={2}
            colorScheme={"yellow"}
            onClick={() => setShowAll(!showAll)}>
                {showAll ? "Show Less" : "Show More"}
            </Button>
        </Text>
    )
}

export default ExpandableText