import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Participant() {
  function handleParticipantAdd(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Edmilson Soares Bezerra</Text>
      <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  );
}
