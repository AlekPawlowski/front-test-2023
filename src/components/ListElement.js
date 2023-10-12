import { Box, GridItem, Image, Text } from "@chakra-ui/react"
import { gridConfig } from "../config";

export const ListElement = ({photo}) => {
    const photoUrl = photo.imageAdress;
    const name = photo.authorName;
    const slug = photo.slug
    return <GridItem w='100%' h={`${gridConfig.gridItemHeight}`} overflow='hidden'>
        <Image 
            src={photoUrl} 
            alt={slug}
            objectFit='contain'
            w="100%"
            h="80%"
        />
        <Text align="center" fontSize='md'>{name}</Text>
    </GridItem>
}