import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import ThemeSwitch from "./ThemeSwitch";
import { HStack } from "@chakra-ui/react";
import { TimeInformation } from "./TimeInformation";

const Header = () => {

    return (
        <HStack justifyContent="space-between" padding="20px" height="10vh">
            <TimeInformation />
            <ThemeSwitch />
        </HStack>
    );
};

export default Header;
