
import { GoogleGenAI } from "@google/genai";

/**
 * Get sommelier advice using Gemini API.
 * Following guidelines: initialize with apiKey from process.env.API_KEY 
 * and create instance right before the call.
 */
export const getSommelierAdvice = async (wineName: string, userQuery: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a world-class sommelier for Vinha d'Ouro, an ultra-luxury winery. 
      The user is asking about the wine: ${wineName}.
      User query: ${userQuery}.
      Provide a sophisticated, poetic, yet concise response. Focus on terroir, food pairings, and the sensory experience.
      Keep it under 100 words.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The sommelier is currently attending to the cellar. Please try again in a moment.";
  }
};
