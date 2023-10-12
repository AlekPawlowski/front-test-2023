import { HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

/**
 * Shows us the time spend on our site, update after every second
 */
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
    return (
        <HStack>
            <Text fontWeight="bold">Seconds spend on page:</Text>
            <p>{`${seconds} s`}</p>
        </HStack>
    );
};

export default Timer;
