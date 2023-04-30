import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, Image} from 'react-native';

import styles from './src/components/styles'


export default function App() {

  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';
  const imageURL = 'https://api.otaviolube.com';

  useEffect(function(){
    fetch(baseURL)
    .then(data => data.json())
    .then(objeto => {
      console.log(objeto);
      setFilmes(objeto.data);
    })
  }, []);

  return (
  <View style={styles.container}>
    {(
      filmes.map((filme) => (
        <View key={filme._id} style={styles.content}>
          <View style={styles.cardMovies}>
            <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
            <Text style={styles.subtitulo}>{filme.attributes.subtitulo}</Text>  
              <View style={styles.Img}>
                  <Image style={styles.poster} source={{uri: imageURL+filme.attributes.poster.data.attributes.formats.small.url}} ></Image>
              </View> 
            <Text style={styles.tituloSinopse}>Sinopse</Text>
            <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text>
          </View>
        </View>
      ))
    )}
    <StatusBar style="auto" />
  </View>
  );
}
