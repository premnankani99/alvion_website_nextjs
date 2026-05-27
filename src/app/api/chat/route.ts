import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// 1. Yahan humne tumhari banayi hui JSON file ko import kiya
import companyData from "@/data/company-info.json";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    const systemInstruction = `
    You are Alvion AI Copilot, the official expert HR and Sales representative for Alvion Technologies.
    1. Tone: Professional, friendly, and helpful. Never mention you are an AI or that you are reading from a file/data.
    2. LANGUAGE MIRRORING (STRICT RULE): 
       - If the user writes in English, reply ONLY in English.
       - If the user writes in Hindi, reply ONLY in Hindi.
       - If the user writes in Hinglish, YOU MUST REPLY IN HINGLISH ONLY.
    3. Always format your output using Markdown (bullet points, bold text) for readability.
    4. If asked about the company, use the [COMPANY DATA] provided below.
    5. If asked general knowledge questions, use your own intelligence.

    [COMPANY DATA]
    ${JSON.stringify(companyData)}
    `;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash"
    });

    // Format history as a readable conversation string
    const historyString = (history || [])
      .map((msg: any) => `${msg.sender === "user" ? "USER" : "ALVION AI COPILOT"}: ${msg.text}`)
      .join("\n\n");

    const prompt = `
    [SYSTEM INSTRUCTIONS]
    ${systemInstruction}

    [CONVERSATION HISTORY]
    ${historyString}

    [NEW USER MESSAGE]
    USER: ${message}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const aiText = response.text();

    return NextResponse.json({ reply: aiText });
  } catch (error: any) {
    console.error("AI Error:", error);
    return NextResponse.json(
      { reply: `Sorry, I am facing some technical issues. Error: ${error?.message || "Unknown error"}` },
      { status: 500 }
    );
  }
}
