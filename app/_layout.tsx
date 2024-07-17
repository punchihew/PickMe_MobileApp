import React from 'react';

import { Stack, Tabs } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="home3" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ headerShown: false }} />
            <Stack.Screen name="welcome" options={{ headerShown: false }} />
            <Stack.Screen name="setting" options={{ headerShown: false }} />
        </Stack>

       
    );
};