import React from 'react'
import SeriesPopulares from './SeriesPopulares';
import SeriesDetalhes from './SeriesDetalhes';
import AtoresDetalhes from '../atores/AtoresDetalhes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SeriesStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="series-populares" component={SeriesPopulares} options={{ title: "Series Populares" }} />
                <Stack.Screen name="series-detalhes" component={SeriesDetalhes} options={{ title: "Series Detalhes" }} />
                <Stack.Screen name="atores-detalhes" component={AtoresDetalhes} options={{ title: "Atores Detalhes" }} />
            </Stack.Navigator>
        </>
    )
}

export default SeriesStack