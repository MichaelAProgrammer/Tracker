import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import trackCreateScreen from './src/screens/TrackCreateScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <TrackProvider>
                <LocationProvider>
                    <Stack.Navigator>
                        <Stack.Screen name="Track Create" component={trackCreateScreen} />
                    </Stack.Navigator>
                </LocationProvider>
            </TrackProvider>
        </NavigationContainer>
    );
}

export default App;
