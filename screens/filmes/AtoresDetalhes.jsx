import React, { useEffect, useState } from 'react'
import { Avatar, Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { ScrollView } from 'react-native'

const AtoresDetalhes = ({ navigation, route }) => {
    const [Ator, setAtor] = useState({})

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/person/${id}`).then(resultado => { setAtor(resultado.data) })
    }, [])

    return (
        <ScrollView style={{ margin: 10 }}>
            <Card key={Ator.id}>
                <Card.Cover source={{ uri: 'http://image.tmdb.org/t/p/w500/' + Ator.profile_path }} />
                <Card.Content>
                    <Text variant="titleLarge">{Ator.name}</Text>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Text variant="titleLarge">Sexo: {Ator.gender}</Text>
                    <Text variant="titleLarge">Data de nascimento: {Ator.birthday}</Text>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

export default AtoresDetalhes