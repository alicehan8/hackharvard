import axios from 'axios';

export const uploadPhoto = async (fileUri: string) => {
  const formData = new FormData();

  formData.append('file', fileUri);

  try {
    const response = await axios.post('http://localhost:3000/parse', fileUri, {
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