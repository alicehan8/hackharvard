import axios from 'axios';

export const uploadPhoto = async (fileUri: string) => {
  const formData = new FormData();

  formData.append('file', {
    uri: fileUri,
    type: 'image/png',
    name: 'receipt.png',
  });

  try {
    const response = await axios.post('https://your-backend-api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Upload successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
};