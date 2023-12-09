//* Libraries imports
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

//* Local imports
import Participant from '../../components/Participant';

import { styles } from './styles';

export default function Home() {
  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState([]);

  const handleAddNewParticipant = () => {
    if (participantName.trim() === '') {
      return;
    }

    const newParticipant = {
      id: randomId(),
      name: participantName,
    }

    setParticipants((prev) => [...prev, newParticipant]);
    setParticipantName('');
  }

  const handleRemoveParticipant = (id: string) => {
    setParticipants((prev) => prev.filter((participant) => participant.id !== id));
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent style='light' />
      <View style={{
        width: "100%",
        paddingHorizontal: 16,
      }}>
        <View style={styles.eventInfoHolder}>
          <Text style={styles.eventName}>Nome do envento</Text>
          <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Nome do participante'
            placeholderTextColor="#6b6b6b"
            keyboardType='default'
            autoCapitalize='words'
            autoCorrect={false}
            value={participantName}
            onChangeText={setParticipantName}
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item.id}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          paddingHorizontal: 16,
        }}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            id={item.id}
            name={item.name}
            onRemove={handleRemoveParticipant}
          />
        )}
        ListEmptyComponent={() => (
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
          }}>
            <Text style={{
              fontSize: 18,
              color: '#6b6b6b',
              textAlign: 'center',
            }}>Nenhum participante adicionado</Text>
          </View>
        )}
      />
    </View>
  );
}

function randomId() {
  const dictionary = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 32; i++) {
    id += dictionary[Math.floor(Math.random() * dictionary.length)];
  }
  // shuffle
  id = id.split('').sort(() => Math.random() - 0.5).join('');
  return id;
}