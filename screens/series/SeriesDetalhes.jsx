import React, { useEffect, useState } from 'react'
import { Avatar, Button, Card, IconButton, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { ScrollView } from 'react-native'

const SeriesDetalhes = ({ navigation, route }) => {

    const [serie, setSerie] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/tv/${id}`).then(resultado => { setSerie(resultado.data) })
        apiFilmes.get(`/tv/${id}/credits`).then(resultado => { setAtores(resultado.data.cast) })
    }, [])

    return (
        <ScrollView style={{ margin: 10 }}>
            <Card key={serie.id}>
                <Card.Cover source={{ uri: 'http://image.tmdb.org/t/p/w500/' + serie.poster_path }} />
                <Card.Content>
                    <Text variant="titleLarge">{serie.title}</Text>
                    <Text variant="bodyMedium">{serie.overview}</Text>
                </Card.Content>
            </Card>
            <Card style={{ marginTop: 10 }}>
                <Card.Content>
                    <Text variant="bodyMedium">Orçamento: {serie.budget}</Text>
                    <Text variant="bodyMedium">Nota: {serie.vote_average}</Text>
                    <Text variant="bodyMedium">Duração: {serie.runtime} min</Text>
                    <Text variant="bodyMedium">Lançamento: {serie.release_date}</Text>
                </Card.Content>
            </Card>

            {atores.map(item => (
                <Card key={item.id}
                    mode="outlined"
                    onPress={() => navigation.push('atores-detalhes', { id: item.id })} style={{ margin: 10 }}
                >
                    <Card.Title
                        title={item.character}
                        subtitle={item.name}
                        left={(props) => <Avatar.Image size={48} source={{ uri: 'http://image.tmdb.org/t/p/w500/' + item.profile_path }} />}
                        right={(props) => <IconButton {...props} icon="chevron-right"/>}
                    />
                </Card>
            ))}

        </ScrollView>
    )
}

export default SeriesDetalhes