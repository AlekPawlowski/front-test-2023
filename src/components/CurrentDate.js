import { HStack, Text } from "@chakra-ui/react";

/**
 * Component that shows us current date
 */
export const CurrentDate = () => {
    const date = new Date().toTimeString();

    return <HStack>
        <Text fontWeight="bold">Time of entering the website:</Text>
        <p>{date}</p>
    </HStack>
}