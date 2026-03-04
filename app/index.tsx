import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
    const response = await fetch(URL, {
      method: "GET",
    });

    const data = await response.json();
    setResults(data.response);
    console.log(data);
  };

  return (
    <View>
      {results.map((pokemon) => (
        <Text key={pokemon.name}>{pokemon.name}</Text>
      ))}
    </View>
  );
}
