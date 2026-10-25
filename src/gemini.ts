import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Gemini API key is missing");
}

const ai = new GoogleGenAI({ apiKey });

export async function askGemini(question: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
    contents: question,
  });

  return response.text ?? "No response received";
}