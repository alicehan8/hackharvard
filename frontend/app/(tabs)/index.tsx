import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { uploadPhoto } from '../../api/uploadService';
import * as FileSystem from 'expo-file-system';

// Define types for file and error
type FileURI = string | null;
type ErrorMessage = string | null;

export default function HomeScreen() {
  // Stores the selected image URI
  const [file, setFile] = useState<FileURI>(null);

  // Stores any error message
  const [error, setError] = useState<ErrorMessage>(null);

  // Function to pick an image from the device's media library
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission Denied", "Sorry, we need camera roll permission to upload images.");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled && result.assets?.[0].uri) {
        const temp = result.assets[0].uri;

        // Convert the image to base64
        const base64Image = await fetch(temp)
          .then(response => response.blob())
          .then(blob => {
            return new Promise((resolve) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.readAsDataURL(blob);
            });
          });
        console.log("base64 image", base64Image)

        setFile(temp);
        // try {
        //   const uploadResult = await uploadPhoto(base64Image);
        //   console.log('File uploaded successfully', uploadResult);
        // } catch (error) {
        //   console.error('Error uploading file:', error);
        // }

        setError(null);
      }
    }
  };

  // Effect to upload the photo when the file state updates
  useEffect(() => {
    const uploadImage = async () => {
      if (file) {
        try {
          const result = await uploadPhoto(file);
          console.log('File uploaded successfully', result);
        } catch (error) {
          console.error('Error uploading file2:', error);
          setError("Upload failed. Please try again."); // Set error message
        }
      }
    };

    uploadImage();
  }, [file]); // Dependency array to trigger effect when file changes

  return (
    <View style={styles.container}>
      <Text style={[styles.header1, { transform: [{ translateX: 0.5 }, { translateY: 1}], color: "#E07BE0"}]}>
        WELCOME TO B.T.R.
      </Text>
      <Text style={styles.header1}>
        WELCOME TO B.T.R.
      </Text>

      <Text style={[styles.header, { height: file ? 400 : 200, marginBottom: file ? -340 : -120 }]}>
        Add Image:
      </Text>

 
      {/* Button to choose an image */}
      <TouchableOpacity style={[styles.button, { display: file ? "none" : "flex" }]} onPress={pickImage}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>

      {/* Conditionally render the image or error message */}
      {console.log("Displaying image with URI:", file)}
      {file ? (
        // Display the selected image
        <View style={styles.imageContainer}>
          <Image source={{ uri: file }} style={styles.image} />
        </View>
      ) : (
        // Display an error message if there's an error or no image selected
        <Text style={styles.errorText}>{error}</Text>
      )}
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
    marginTop: -60,
    marginBottom: 40,
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
});