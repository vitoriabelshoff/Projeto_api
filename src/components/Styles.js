import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardMovies: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      width: '100%',
    },
    titulo: {
      fontSize: '150%',
      color: '#f57636',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subtitulo: {
      fontSize: '100%',
      color: '#f57636',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '10px',
    },
    poster: {
        width: 300,
        height: 400,
        marginBottom: '10px',
        borderRadius: '5px',
        borderColor: '#10054f',
        borderWidth: '3px',
    },
    tituloSinopse: {
        color: '#f57636',
        fontSize: '100%',
        fontWeight: 'bold',
    },
    sinopse: {
      color: '#f57636',
      textAlign: 'center',
      maxWidth: 390,
      width: '100%',
      marginBottom: '10px',
    },
    container: {
        backgroundColor: '#110557'
    }
  });

  export default styles;
