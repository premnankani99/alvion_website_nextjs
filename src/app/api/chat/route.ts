import { NextResponse } from "next/server";
import companyData from "@/data/company-info.json";

export async function POST(req: Request) {
  try {
    const { message, history, intentType } = await req.json();

    let systemInstruction = "";
    let temperature = 0.7;

    if (intentType === "COMPANY_QUERY") {
      systemInstruction = `
        You are Alvion AI Copilot, the official expert HR and Sales representative for Alvion Technologies.
        1. Tone: Professional, friendly, and helpful. Never mention you are an AI.
        2. LANGUAGE MIRRORING (STRICT RULE): If user writes in Hindi, reply in Hindi. If English, reply in English. If Hinglish, reply in Hinglish.
        3. Format your output using Markdown.
        4. Use the provided [COMPANY DATA] strictly to answer questions about Alvion Technologies. If the user asks about other companies, admit you are focused on Alvion's offerings.

        [COMPANY DATA]
        ${JSON.stringify(companyData)}
      `;
      temperature = 0.5; // Slightly lower for accurate company facts
    } else if (intentType === "MARKET_QUERY") {
      systemInstruction = `
        You are an objective AI tech consultant. 
        1. Provide unbiased, genuine market research, comparisons, and top lists.
        2. Do NOT act as a sales representative for any specific company. 
        3. If asked for a list of companies in a specific city or domain, provide a real-world list of top actual competitors (e.g., Infosys, Metacube, Pratham, A3logics, etc., for Jaipur).
        4. You may include Alvion Technologies naturally if relevant, but do not claim it is the only one.
        5. If you do not know the answer based on your training data, reply 'I don't have that information'.
        6. LANGUAGE MIRRORING: Reply in the same language as the user (English, Hindi, or Hinglish).
      `;
      temperature = 0.3; // Low temp to prevent hallucinating fake companies
    } else {
      // GENERAL_QUERY
      systemInstruction = `
        You are a helpful tech assistant. Provide concise, accurate technical answers.
        1. LANGUAGE MIRRORING: Reply in the same language as the user.
        2. Format output in Markdown.
      `;
      temperature = 0.6;
    }

    const formattedHistory = (history || []).map((msg: any) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text,
    }));

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-scout-17b-16e-instruct", 
        messages: [
          { role: "system", content: systemInstruction },
          ...formattedHistory,
          { role: "user", content: message }
        ],
        temperature: temperature
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
      { reply: "Oops! Hamara AI system abhi thoda busy hai. Tab tak aap apne sawal info@alviontechnologies.com par email kar sakte hain! 😊" },
      { status: 500 }
    );
  }
}
