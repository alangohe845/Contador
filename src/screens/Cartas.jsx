import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  VirtualizedList,
  StyleSheet,
} from 'react-native';
// import { styles } from '../theme/Theme';
const initialState = {
  matricula: '',
  nombre: '',
  direccion: '',
  telefono: '',
};
const initialStateBotones = {
  agregar: false,
  campoMatricula:true,
};
const getItem = (data, index) => ({
  matricula: data[index].matricula,
  nombre: data[index].nombre,
  direccion: data[index].direccion,
  telefono: data[index].telefono,
});
const Item = ({dat}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>Matricula: {dat.matricula} </Text>
      <Text style={styles.cuerpo}>Nombre: {dat.nombre} </Text>
      <Text style={styles.cuerpo}>Direccion: {dat.direccion} </Text>
      <Text style={styles.cuerpo}>Telefono: {dat.telefono} </Text>
    </View>
  );
};
const getItemCount = data => {
  return data.length;
};
const Cartas = () => {
  const [datos, setDatos] = useState([]);
  const [alumno, setAlumno] = useState(initialState);
  const [botones, setBotones] = useState(initialStateBotones);
  const {matricula, nombre, direccion, telefono} = alumno;
  var mat = '';

  const handleChange = (nom, valor) => {
    setAlumno({...alumno, [nom]: valor});
  };
  const handleSubmit = () => {
    if (alumno.matricula != '') {
      let dat = [...datos];
      dat.push(alumno);
      setDatos(dat);
      setAlumno(initialState);
      ToastAndroid.show('Alumno agregado', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Ingresa datos', ToastAndroid.SHORT);
    }
  };
  const handleLimpiar = () => {
    setAlumno(initialState);
    setBotones({...botones, ['campoMatricula']:true})
  };
  const handleEliminar = () => {
    let arr = [...datos];
    for(var i = 0; i < arr.length; i++){
      if(arr[i].matricula === alumno.matricula){
        arr.splice(i,1);
        ToastAndroid.show('Alumno eliminado', ToastAndroid.SHORT);
      }
    }
    handleLimpiar();
    setDatos(arr);
  };
  const handleModificar = () => {
    let arr = [...datos];
    for(var i = 0; i < arr.length; i++){
      if(arr[i].matricula === alumno.matricula){
        arr[i].nombre === alumno.nombre;
        arr[i].direccion === alumno.direccion;
        arr[i].telefono === alumno.telefono;
    }
    handleLimpiar();
    setDatos(arr);
  };
}
  
  const handleBuscar = () => {
    for (let i = 0; i < datos.length; i++) {
      if (alumno.matricula === datos[i].matricula) {
        setAlumno(datos[i]);
        setBotones({...botones, ['campoMatricula']:false})
        return 0;
      } else {
        ToastAndroid.show('No se encontro', ToastAndroid.SHORT);
      }
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Matricula"
        Value={matricula}
        onChangeText={valor => handleChange('matricula', valor)}
        style={styles.cartas_input}
        editable={ botones.campoMatricula }
      />
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={valor => handleChange('nombre', valor)}
        style={styles.cartas_input}
      />
      <TextInput
        placeholder="Direccion"
        value={direccion}
        onChangeText={valor => handleChange('direccion', valor)}
        style={styles.cartas_input}
      />
      <TextInput
        placeholder="Telefono"
        value={telefono}
        onChangeText={valor => handleChange('telefono', valor)}
        style={styles.cartas_input}
      />
      <TouchableOpacity
        // disabled={ botones.agregar }
        onPress={handleSubmit}
        style={styles.button}>
        <Text>Agregar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // disabled={ botones.agregar }
        onPress={handleLimpiar}
        style={styles.button}>
        <Text>Limpiar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // disabled={ botones.agregar }
        onPress={handleBuscar}
        style={styles.button}>
        <Text>Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // disabled={ botones.agregar }
        onPress={handleEliminar}
        style={styles.button}>
        <Text>Eliminar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // disabled={ botones.agregar }
        onPress={handleModificar}
        style={styles.button}>
        <Text>Modificar</Text>
      </TouchableOpacity>

      <VirtualizedList
        data={datos}
        getItem={getItem}
        getItemCount={getItemCount}
        renderItem={({item}) => <Item dat={item} />}
        keyExtractor={item => item.matricula}></VirtualizedList>
    </View>
  );
};

export default Cartas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5B7B1',
  },
  uno: {
    flex: 1,
    backgroundColor: '#329371',
    padding: 20,
    justifyContent: 'center',
  },
  texto1: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  texto2: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
     borderWidth: 2,
     borderRadius: 20,
     margin: 10,
     alignItems: 'center',
     backgroundColor: '#C5DA68',
     padding: 10,
   },
  cartas_container: {
    flex: 1,
    backgroundColor: '',
  },
  cartas_input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
  cartas_boton: {
    backgroundColor: '',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  cartas_boton_texto: {
    fontSize: 15,
    color: '',
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  item: {
    backgroundColor: '#FFDFBA',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  cuerpo: {
    fontSize: 18,
    color: 'black',
  },
});
const colores = {
  uno: '#8a77ba',
  dos: '#AFB1ED',
  tres: '#FAB096',
  cuatro: '#B9F0E1',
  cinco: '#FFDFBA',
  seis: '#fffff',
  siete: 'red',
};
