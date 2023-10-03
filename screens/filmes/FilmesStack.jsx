import React from 'react'
import FilmesPopulares from './FilmesPopulares';
import FilmesDetalhes from './FilmesDetalhes';
import AtoresDetalhes from './AtoresDetalhes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const FilmesStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="filmes-populares" component={FilmesPopulares} options={{ title: "Filmes Populares" }} />
                <Stack.Screen name="filmes-detalhes" component={FilmesDetalhes} options={{ title: "Filmes Detalhes" }} />
                <Stack.Screen name="atores-detalhes" component={AtoresDetalhes} options={{ title: "Atores Detalhes" }} />
            </Stack.Navigator>
        </>
    )
}

export default FilmesStack