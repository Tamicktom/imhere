//* LIbraries imports
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    alignItems: "center",
    justifyContent: "center",
    gap: 36,
    paddingTop: 48,
  },
  eventInfoHolder: {
    width: "100%",
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  eventDate: {
    color: "#888",
  },
  noParticipantsText: {
    color: "#fff",
    fontSize: 24,
  },
  input: {
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    paddingHorizontal: 16,
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  button: {
    backgroundColor: "#31CF67",
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
