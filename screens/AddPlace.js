import PlaceForm from "../components/Places/PlaceForm";
import { Text, StyleSheet } from "react-native";

function AddPlace() {
  return (
    <>
      <PlaceForm />
    </>
  );
}

export default AddPlace;

const stylees = StyleSheet.create({
  test: {
    color: "white",
  },
});
