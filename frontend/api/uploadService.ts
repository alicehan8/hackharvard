import axios from 'axios';

export const uploadPhoto = async (base64Image: string) => {
  try {
    const response = await axios.post('http://localhost:3000/parse', {
      base64: base64Image,
    }, {
      headers: {
        'Content-Type': 'application/json', // Change to application/json since we're sending JSON
      },
    });

    console.log('Upload successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
};
