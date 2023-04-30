import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then((response) => {
        setPokemonList(response.data.pokemon);
        setPokemonTypes([...new Set(response.data.pokemon.map((pokemon) => pokemon.type[0]))]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderType = (type) => {
    const filteredPokemonList = pokemonList.filter((pokemon) => pokemon.type.includes(type));
    return (
      <View style={styles.typeContainer}>
        <Text style={styles.typeTitle}>{type}</Text>
        <FlatList
          data={filteredPokemonList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => Alert.alert("******** DETAIL POKEMAN ********","Name : "+item.name+"\nheight : "+item.height+
            "\nweight :"+item.weight+"\negg : "+item.egg+"\nweaknesses : "+item.weaknesses,[{text:'OK'}])} style={styles.card}>
              <Image style={styles.cardImage} source={{ uri: item.img }} />
              <Text style={styles.cardText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonTypes}
        renderItem={({ item }) => renderType(item)}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeContainer: {
    margin: 10,
  },
  typeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    margin: '2.5%',
    marginBottom: '5%',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardText: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight:'bold'
  },
});
