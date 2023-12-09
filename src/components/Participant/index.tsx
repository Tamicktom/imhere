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

  //create a new animated values
  const bounce = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const height = useRef(new Animated.Value(0)).current;

  //when the component is rendered, do a bounce animation
  //to make it more fun
  useEffect(() => {
    Animated.parallel([
      Animated.spring(bounce, {
        toValue: 1,
        useNativeDriver: false,
        bounciness: 1,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.spring(height, {
        toValue: 56,
        useNativeDriver: false,
        bounciness: 12,
      })
    ]).start();
  }, []);

  //before the component is removed from the screen, do a fade out animation
  const handleRemove = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.spring(bounce, {
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.timing(height, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      })
    ]).start();

    //after the animation is done, call the onRemove function
    setTimeout(() => props.onRemove(props.id), 240);
  }

  return (
    <Animated.View style={[styles.container, {
      opacity: opacity,
      height: height,
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
        onPress={handleRemove}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}