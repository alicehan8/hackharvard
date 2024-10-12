// import React, { useRef, useState, useCallback } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { Camera, useCameraDevice, PhotoFile } from 'react-native-vision-camera';
// import { useIsFocused } from '@react-navigation/core';
// import { CaptureButton } from '../views/capturebutton.tsx'; // Assuming you have a CaptureButton component

// export function CameraPage({ navigation }) {
//   const camera = useRef<Camera>(null);
//   const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  
//   // Get camera device
//   const device = useCameraDevice('back'); // Default to the back camera
  
//   // Check if the camera is active
//   const isFocused = useIsFocused();
//   const isActive = isFocused;

//   const onInitialized = useCallback(() => {
//     setIsCameraInitialized(true);
//   }, []);

//   // Function to handle media capture (photo in this case)
//   const onMediaCaptured = useCallback((media: PhotoFile) => {
//     console.log(`Photo captured: ${media.path}`);
//     // Navigate to another page or handle the captured photo
//     navigation.navigate('MediaPage', { path: media.path, type: 'photo' });
//   }, [navigation]);

//   if (device == null) {
//     return (
//       <View style={styles.emptyContainer}>
//         <Text style={styles.text}>No camera available</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Camera
//         ref={camera}
//         style={StyleSheet.absoluteFill}
//         device={device}
//         isActive={isActive}
//         onInitialized={onInitialized}
//         photo={true} // Enable photo capture
//       />
//       <CaptureButton
//         style={styles.captureButton}
//         camera={camera}
//         onMediaCaptured={onMediaCaptured}
//         enabled={isCameraInitialized && isActive}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   captureButton: {
//     position: 'absolute',
//     alignSelf: 'center',
//     bottom: 50, // Adjust as needed
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 18,
//   },
// });