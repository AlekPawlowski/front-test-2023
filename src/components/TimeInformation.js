
import { VStack } from "@chakra-ui/react";
import Timer from "./Timer";
import { CurrentDate } from "./CurrentDate";

/**
 * TimeInformation component holds inside two childs:
 * first is timer that show how long we stayed on our site
 * second compoent show us the time when we eneter website
 */
export const TimeInformation = () => {
    return <VStack gap="10px" align="left">
        <Timer />
        <CurrentDate />
    </VStack>

}