//* Libraries imports
import { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";

import { styles } from "./styles";

type Props = {
  id: string;
  name: string;
  onRemove: (id: string) => void;
}

export default function Participant(props: Props) {
  //when the component is rendered, do a bounce animation
  //to make it more fun

  //create a new animated value
  const bounce = useRef(new Animated.Value(0)).current;

  //create a new animated value
  const opacity = useRef(new Animated.Value(0)).current;

  //when the component is rendered, do a bounce animation
  //to make it more fun
  useEffect(() => {
    Animated.parallel([
      Animated.spring(bounce, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.container, {
      opacity: opacity,
      transform: [
        {
          scale: bounce,
        }
      ]
    }]}>
      <Text style={styles.name}>{props.name}</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => props.onRemove(props.id)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}