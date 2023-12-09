//* Libraries imports
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type Props = {
  id: string;
  name: string;
  onRemove: (id: string) => void;
}

export default function Participant(props: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => props.onRemove(props.id)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}