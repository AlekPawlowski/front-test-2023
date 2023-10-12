import React from "react";
import { Switch, VStack } from "@chakra-ui/react";
import { useState } from "react";

/**
 * Theme select component, 
 * @lightmode .light-mode - class for light mode,
 * @datkmode .dark-mode - class for dark mode
 * On start it set the variable in localStorage with default values
 * whitch will be dark mode
 * if mode will change, them apart from changing mode
 * change in localStorage too
 * @localStore variable -> colorMode
 * @value true -> dark mode value
 * @value false -> light mode value
 */
const ThemeSwitch = () => {
    const getLocalStorageTheme = localStorage.getItem('colorMode');
    if(getLocalStorageTheme === null) {
        localStorage.setItem('colorMode', true);
    }
    const [themeMode, setThemeMode] = useState(!!getLocalStorageTheme);
    const modeSwitch = (event) => {
        // get info if input is checked
        const isInputChecked = event.target.checked;

        // update stored values
        setThemeMode(isInputChecked);
        localStorage.setItem('colorMode', isInputChecked);

        // update main theme
        const mainElement = document.querySelector('[data-colorchange]');
        mainElement.className = isInputChecked ? 'dark-mode' : 'light-mode';
    }
    return (
        <VStack>
            <p>Dark theme</p>
            <Switch 
                isChecked={themeMode}
                colorScheme="teal" 
                size="lg" 
                onChange={modeSwitch}
            />
        </VStack>
    );
};

export default ThemeSwitch;
