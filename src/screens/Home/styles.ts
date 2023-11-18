import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#131016",
      padding: 24,
    },
    eventName: {
      color: "#FDFCFE",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 48,
    },
    eventDate: {
      color: "#6B6B6B",
      fontSize: 16,
    },
    input: {
      flex: 1,
      color: "#FDFCFE",
      backgroundColor: "#1F1E25",
      height: 56,
      borderRadius: 5,
      padding: 16,
      fontSize: 16,
      marginRight: 12,
    },
    button: {
      backgroundColor: "#31CF67",
      height: 56,
      width: 56,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: "#FDFCFE",
      fontSize: 24,
    },
    form: {
      width: "100%",
      flexDirection: "row",
      marginTop: 36,
      marginBottom: 42,
    }
  });
