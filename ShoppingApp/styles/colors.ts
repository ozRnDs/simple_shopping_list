import { Appearance } from 'react-native';

const lightTheme = {
    background: '#ffffff',
    text: '#000000',
    primary: '#007bff', // Blue
    primary_text: '#ffffff', // White text on primary background
    secondary: '#6c757d', // Gray
    secondary_text: '#ffffff', // White text on secondary background
};

const darkTheme = {
    background: '#121212',
    text: '#ffffff',
    primary: '#bb86fc', // Purple
    primary_text: '#000000', // Black text on primary background
    secondary: '#03dac6', // Teal
    secondary_text: '#000000', // Black text on secondary background
};

export const getTheme = () => {
    return Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;
};