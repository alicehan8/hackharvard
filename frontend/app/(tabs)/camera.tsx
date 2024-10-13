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

import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const ref = useRef(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  _takePhoto = async () => {
    const photo = await ref.current.takePictureAsync()
    console.debug(photo)
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_takePhoto}
          >
            <Text>Snap Photo</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}


// from layout: 
      {/* <Tabs.Screen
        name="camera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      /> */}