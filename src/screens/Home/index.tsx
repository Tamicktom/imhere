//* Libraries imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

//* Local imports
import { styles } from './styles';

export default function Home() {

  const handleAddNewParticipant = () => {
    console.log('teste');
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent style='light' />
      <View>
        <Text style={styles.eventName}>Nome do envento</Text>
        <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6b6b6b"
          keyboardType='default'
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddNewParticipant}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}