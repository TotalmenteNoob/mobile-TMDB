import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { ScrollView } from 'react-native'

const FilmesDetalhes = ({ navigation, route }) => {

    const [filme, setFilme] = useState([])

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/movie/${id}`).then(resultado => setFilme(resultado.data))
    })

    return (
        <ScrollView style={{ margin: 10 }}>
            <Card key={filme.id}>
                <Card.Cover source={{ uri: 'http://image.tmdb.org/t/p/w500/' + filme.poster_path }} />
                <Card.Content>
                    <Text variant="titleLarge">{filme.title}</Text>
                    <Text variant="bodyMedium">{filme.overview}</Text>
                </Card.Content>
            </Card>
            <Card style={{ marginTop: 10 }}>
                <Card.Content>
                    <Text variant="bodyMedium">Orçamento: {filme.budget}</Text>
                    <Text variant="bodyMedium">Nota: {filme.vote_average}</Text>
                    <Text variant="bodyMedium">Duração: {filme.runtime} min</Text>
                    <Text variant="bodyMedium">Lançamento: {filme.release_date}</Text>
                </Card.Content>
            </Card>

            
        </ScrollView>
    )
}

export default FilmesDetalhes