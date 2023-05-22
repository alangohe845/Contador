import React, { useState } from "react";
import { Text, View,TouchableOpacity} from "react-native";
import { styles } from '../theme/Theme';

const Contador = () => {

  const initialState = 0
  const [dato, setDato] = useState(initialState);
  const incrementarDato = () => {
    let d = dato;
    ++d;
    setDato(d);
  }
  const decrementarDato = () => {
    let d = dato;
    --d;
    setDato(d);
  }
  const inicializarDato = () => {
    setDato(initialState);
  }
  return (
    <View style={styles.container}>
      <View style={styles.uno}>
        <Text style={styles.texto1}>Contador:{ dato }</Text>
        <TouchableOpacity style={styles.button} onPress= {incrementarDato}>
          <Text style={styles.texto2}>Incrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress= {decrementarDato}>
          <Text style={styles.texto2}>Decrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress= {inicializarDato}>
          <Text style={styles.texto2}>Inicializar</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

export default Contador;