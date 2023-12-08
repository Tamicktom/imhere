//* Libraries imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

//* Local imports
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar translucent style='light' />
      <Text style={styles.eventName}>Nome do envento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor="#6b6b6b"
        keyboardType='default'
      />
    </View>
  );
}