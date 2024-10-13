import axios from 'axios';

// Function to convert URI to Blob
const uriToBlob = async (uri: string): Promise<Blob> => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
};

export const uploadPhoto = async (fileUri: string) => {
  const formData = new FormData();

  //formData.append('file', fileUri);
  const blob = await uriToBlob(fileUri);
  formData.append('file', blob, 'receipt.png');
  try {
    const response = await axios.post('http://localhost:3000/parse', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
      },
    });

    // console.log('Upload successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
};
