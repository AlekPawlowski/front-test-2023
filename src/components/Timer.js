import { HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            /**
             * fix for set state with hook beacuse it's asynchronus and 
             * we wanna avoid situation where prev value dose't update before next change
             */
            setSeconds((prev) => prev + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    const date = new Date().toTimeString();

    return (
        <VStack gap="10px" align="left">
            <HStack>
                <Text fontWeight="bold">Seconds spend on page:</Text>
                <p>{`${seconds} s`}</p>
            </HStack>
            <HStack>
                <Text fontWeight="bold">Time of entering the website:</Text>
                <p>{date}</p>
            </HStack>
        </VStack>
    );
};

export default Timer;
