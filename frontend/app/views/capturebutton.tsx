// import React, { useCallback } from 'react';
// import { StyleSheet, TouchableOpacity, View } from 'react-native';
// import { Camera } from 'react-native-vision-camera';

// type CaptureButtonProps = {
//   camera: React.RefObject<Camera>;
//   onMediaCaptured: (media: any) => void;
//   enabled: boolean;
// };

// export default function CaptureButton({ camera, onMediaCaptured, enabled }: CaptureButtonProps) {
//   // Function to take a picture
//   const takePicture = useCallback(async () => {
//     if (camera.current == null || !enabled) return;

//     try {
//       const photo = await camera.current.takePhoto({
//         qualityPrioritization: 'quality', // or 'speed' based on your needs
//       });

//       // Handle the captured photo
//       onMediaCaptured(photo);
//     } catch (error) {
//       console.error('Failed to take photo:', error);
//     }
//   }, [camera, enabled, onMediaCaptured]);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={takePicture} disabled={!enabled}>
//         <View style={styles.innerCircle} />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   innerCircle: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: 'red',
//   },
// });
