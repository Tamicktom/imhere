//* Libraries imports
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

//* Local imports
import Participant from '../../components/Participant';

import { styles } from './styles';

export default function Home() {
  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState([
    { id: randomId(), name: 'Rodrigo' },
  ]);

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

      <ScrollView
        style={{
          width: "100%",
          paddingHorizontal: 16,
          paddingBottom: 32
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          {
            participants.map((participant) => (
              <Participant
                key={participant.id}
                id={participant.id}
                name={participant.name}
                onRemove={handleRemoveParticipant}
              />
            ))
          }
        </View>
      </ScrollView>
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