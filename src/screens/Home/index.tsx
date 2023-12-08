//* Libraries imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//* Local imports
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar translucent style='light' />
      <Text style={styles.label}>Olá mundo!</Text>
    </View>
  );
}