import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList
} from "react-native";

const data = {
  items: [
    {
      name: "Mini Milk Choc Pretzels",
      expiration_date: "2025-04-12"
    },
    {
      name: "Apple Cider Donuts",
      expiration_date: "2024-10-15"
    },
    {
      name: "Roasted Garlic Marinara",
      expiration_date: "2025-10-12"
    },
    {
      name: "Soyaki",
      expiration_date: "2025-10-12"
    },
    {
      name: "Vegetable Fried Rice",
      expiration_date: "2025-04-12"
    },
    {
      name: "2lb Mandarin Bag",
      expiration_date: "2024-10-24"
    },
    {
      name: "Butternut Mac & Cheese",
      expiration_date: "2024-10-19"
    },
    {
      name: "Italian Style Meatballs",
      expiration_date: "2025-04-12"
    },
    {
      name: "Ground Beef 80/20",
      expiration_date: "2024-10-16"
    },
    {
      name: "Baby Crispy Green Lettuce",
      expiration_date: "2024-10-18"
    },
    {
      name: "Chicken Breast Boneless",
      expiration_date: "2024-10-19"
    },
    {
      name: "Salmon Fillet Skin On",
      expiration_date: "2024-10-15"
    },
    {
      name: "Gnocchi Alla Sorrentina",
      expiration_date: "2025-04-12"
    }
  ]
};

export default function Fridge() {

  return (
    <View style={styles.container}>
      <Text style={[styles.header1, { transform: [{ translateX: 0 }, { translateY: 48}], color: "#E07BE0"}]}>
        B.T.R. <ul>FRIDGE</ul>
      </Text>
      <Text style={styles.header1}>
        B.T.R. <ul>FRIDGE</ul>
      </Text>

      {/* <Text style={styles.title}>Your Fridge</Text> */}
      <FlatList
        data={data.items}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.expiration_date}</Text>
          </View>
        )}
      />
 
      {/* Button to choose an image */}
      {/* <TouchableOpacity style={[styles.button, { display: file ? "none" : "flex" }]} onPress={pickImage}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity> */}

      {/* Conditionally render the image or error message */}
      {/* {console.log("Displaying image with URI:", file)}
      {file ? (
        // Display the selected image
        <View style={styles.imageContainer}>
          <Image source={{ uri: file }} style={styles.image} />
        </View>
      ) : (
        // Display an error message if there's an error or no image selected
        <Text style={styles.errorText}>{error}</Text>
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
  header: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 16,
    marginBottom: -130,
    width: 300,
    height: 400,
    backgroundColor: "#E07BE0",
    fontWeight: "500",
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
    shadowColor: "#000000",
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
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    fontSize: 16,
    flex: 1,
  },
});