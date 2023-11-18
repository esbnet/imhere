import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
  name: string;
  onRemove: (name: string) => void;
};

export default function Participant({ name, onRemove }: ParticipantProps) {
  function handleParticipantAdd(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onRemove(name)}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
