import { Entypo } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
  name: string;
  onRemove: (name: string) => void;
};

export default function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onRemove(name)}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          <Entypo name="trash" size={24} color="#e23c44" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
