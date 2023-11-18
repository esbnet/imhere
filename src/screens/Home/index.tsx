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

  function handleParticipantRemove(name: string) {
    alert("remove : " + name);
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
      <Participant
        name="Edmilson Soares Bezerra"
        onRemove={() => handleParticipantRemove("Edmilson")}
      />
      <Participant
        name="Cleiton Bezerra"
        onRemove={() => handleParticipantRemove("Cleiton")}
      />
      <Participant
        name="Sabrina Bezerra"
        onRemove={() => handleParticipantRemove("Sabrina")}
      />
      <Participant
        name="Cleide Bezerra"
        onRemove={() => handleParticipantRemove("Cleide")}
      />
    </View>
  );
}
