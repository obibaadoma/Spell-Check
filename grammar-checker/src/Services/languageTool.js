// src/services/languageTool.js
import axios from 'axios';

const LANGUAGE_TOOL_API_URL = 'https://api.languagetool.org/v2/check';

export async function detectErrors(userInput) {
  try {
    const response = await axios.post(LANGUAGE_TOOL_API_URL, {
      text: userInput,
      language: 'en-US', // Adjust based on user's language
    });
    return response.data.matches; // Array of error objects
  } catch (error) {
    console.error('Error detecting errors:', error);
    return []; // Return empty array if API request fails
  }
}
