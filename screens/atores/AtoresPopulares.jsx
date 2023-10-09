import React, { useEffect, useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { ScrollView } from 'react-native'

const AtoresPopulares = ({ navigation }) => {

    const [atores, setAtores] = useState([])

    useEffect(() => {
        apiFilmes.get('/person/popular').then(resultado => setAtores(resultado.data.results))
    })

    return (
        <ScrollView style={{ margin: 10 }}>
            {atores.map(item => (
                <Card key={item.id} onPress={() => navigation.push('atores-detalhes', { id: item.id })} style={{ marginTop: 10 }}>
                    <Card.Cover source={{ uri: 'http://image.tmdb.org/t/p/w500/' + item.profile_path }} />
                    <Card.Content>
                        <Text variant="titleLarge">{item.name}</Text>
                    </Card.Content>
                </Card>
            ))}
        </ScrollView>
    )
}

export default AtoresPopulares