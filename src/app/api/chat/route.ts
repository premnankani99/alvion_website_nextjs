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
    5. If asked about the "best AI company in Jaipur", "top Appian companies", or other general industry questions, provide a genuine, objective, and real-world answer. You MUST list actual top IT/Tech companies in Jaipur (such as Infosys, Metacube, Pratham Software, A3logics, GirnarSoft, and Genpact) and naturally include Alvion Technologies in that list. Do not say "no other companies are listed". Give a proper, competitive list.
    6. If asked general knowledge questions, use your own intelligence.

    [COMPANY DATA]
    ${JSON.stringify(companyData)}
    `;

    // Map history to Groq (OpenAI format)
    const formattedHistory = (history || []).map((msg: any) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text,
    }));

    // Groq API Call
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-scout-17b-16e-instruct", // Best for free tier (30,000 TPM)
        messages: [
          { role: "system", content: systemInstruction },
          ...formattedHistory,
          { role: "user", content: message }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`Groq API Error: ${response.status}`);
    }

    const data = await response.json();
    const aiText = data.choices[0].message.content;

    return NextResponse.json({ reply: aiText });
  } catch (error: any) {
    console.error("AI Error:", error);
    return NextResponse.json(
      { reply: "Oops! Hamara AI system abhi thoda busy hai. Tab tak aap apne sawal info@alviontechnologies.com par email kar sakte hain, ya phir website par hamari services check kar sakte hain! 😊" },
      { status: 500 }
    );
  }
}
