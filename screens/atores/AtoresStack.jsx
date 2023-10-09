import React from 'react'
import AtoresPopulares from './AtoresPopulares';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AtoresStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="atores-populares" component={AtoresPopulares} options={{ title: "Atores Populares" }} />
            </Stack.Navigator>
        </>
    )
}

export default AtoresStack