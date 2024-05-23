import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:"100%",
      backgroundColor: '#1E1E20',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cameraBox:{
        position:'relative',
        width:350,
        height:'85%',
        borderWidth:2,
        borderColor:"#fff",
        overflow:'hidden',
        borderRadius:20,
    },
    triangleContainer:{
        position:'absolute',
        width: 0,
        height: 0,
        borderStyle:'solid',
        borderTopWidth:20,
        borderTopColor:'#fff',
        borderRightWidth:20,
        borderRightColor:'transparent',
    },
    topRight:{
        top:0,
        right:0,
        transform:[{rotate:'90deg'}]
    },
    bottonRight:{
        top:'97%',
        right:0,
        transform:[{rotate:'180deg'}]
    },
    bottonLeft:{
        top:'97%',
        left:0,
        transform:[{rotate:'-90deg'}]
    }
  });
  