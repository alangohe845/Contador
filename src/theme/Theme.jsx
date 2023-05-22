
export const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'red',
      
    },
    uno:{
      flex:1,
      backgroundColor: '#329371',
      padding:20,
      justifyContent:'center',
    },
    texto1:{
      textAlign:'center',
      fontSize:30,
      color:'black',
      fontWeight:'bold',
    },
    texto2:{
      color:'black',
      fontWeight:'bold',
      textAlign:'center',
      fontSize:20,
    },
    button: {    
      borderWidth:2,
      borderRadius:20,
      margin:10,
      alignItems: 'center',
      backgroundColor: '#C5DA68',
      padding: 10,
    },
    cartas_container:{
      flex:1,
      backgroundColor:colores_cartas.uno,
    },
    cartas_input:{
      height:40,
      margin:12,
      borderWidth:2,
      padding:10,
    },
    cartas_boton:{
      backgroundColor:colores_cartas.uno,
      alignItems:'center',
      padding:10,
      margin:10,
    },
    cartas_boton_texto:{
      fontSize:15,
      color: colores_cartas.seis,
    }
  });
  export default styles;
  
  export const colores = {
    'uno':'#8a77ba',
    'dos':'#AFB1ED',
    'tres':'#FAB096',
    'cuatro':'#B9F0E1',
    'cinco':'#FFDFBA',
    'seis':'#fffff'
  }
  