import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Show do RHCP    </Text>
      <Text style={styles.eventDate}>Sexta, 30 de junho de 2022  </Text>
      <StatusBar
        style="inverted"
        backgroundColor="transparent"
        
      />
    </View>
  );
}