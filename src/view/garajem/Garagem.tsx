import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
export default function Garagem() {
  return (
    <View style={styles.container}>
        <View style={styles.cameraBox}>
            <View style={styles.triangleContainer}></View>
            <View style={[styles.triangleContainer,styles.topRight]}></View>
            <View style={[styles.triangleContainer,styles.bottonLeft]}></View>
            <View style={[styles.triangleContainer,styles.bottonRight]}></View>
        </View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
