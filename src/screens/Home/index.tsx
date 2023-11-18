import {
  GestureResponderEvent,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Participant from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {
  function handleParticipantAdd(event: GestureResponderEvent): void {
    alert("oi");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Show do RHCP </Text>
      <Text style={styles.eventDate}>Sexta, 30 de junho de 2022 </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant/>
      <Participant/>
    </View>
  );
}
