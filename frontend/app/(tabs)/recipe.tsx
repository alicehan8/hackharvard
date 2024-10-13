import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

export default function Fridge() {
  const [recipe, setRecipe] = useState("");

  const generateRecipe = async () => {
    // Call to backend to generate a recipe
    setRecipe("Cut up some cheese and put it on a plate. Great work!");
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.header1, { transform: [{ translateX: 0 }, { translateY: 48}], color: "#E07BE0"}]}>
        B.T.R. <ul>RECIPE</ul>
      </Text>
      <Text style={styles.header1}>
        B.T.R. <ul>RECIPE</ul>
      </Text>

      {/* Button to generate a recipe */}
      <TouchableOpacity
        style={[styles.button, { display: recipe ? "none" : "flex" }]}
        onPress={generateRecipe}
      >
        <Text style={styles.buttonText}>Generate a Recipe</Text>
      </TouchableOpacity>

      {/* {recipe && (
        <>
          <Text style={styles.title}>Your New Recipe</Text>
          <FlatList
            data={data.items} // Make sure `data` is defined and accessible
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.name}</Text>
                <Text style={styles.cell}>{item.expiration_date}</Text>
              </View>
            )}
          />
        </>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#CEFFCD",
    borderRadius: 8,
  },
  header1: {
    fontSize: 20,
    marginTop: -20,
    marginBottom: 0,
    fontWeight: "1000",
    color: "#0A1045",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    fontSize: 16,
    flex: 1,
  },
});
