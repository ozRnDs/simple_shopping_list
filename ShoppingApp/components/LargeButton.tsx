import React from "react";
import { Href, Link } from 'expo-router';
import { Text, StyleSheet, View, Pressable } from "react-native";
import { getTheme } from '@/styles/colors';

interface LargeButtonProps {
    children: React.ReactNode;
    href: Href;
    style?: object;
}

export default function LargeButton({ children, href, style }: LargeButtonProps) {
    return (
    <View style={[styles.button, style]}>
        <Link href={href} asChild>
            <Pressable style={styles.pressable}>
                <View style={styles.content}>
                    {children}
                </View>
            </Pressable>
        </Link>
    </View>
);

}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        backgroundColor: getTheme().primary,
        borderRadius: 20,
    },
    pressable: {
        flex: 1,  // Makes Pressable fill the button space
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    content: {
        fontSize: 18,
        color: getTheme().primary_text,
        flexDirection: 'column',
        alignItems: 'center',
    },
    });