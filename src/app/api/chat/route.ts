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
        1. LANGUAGE & TONE (ABSOLUTE CRITICAL RULE): 
           - Tone: Professional, friendly, and helpful. Never mention you are an AI.
           - Language: YOU MUST REPLY IN THE EXACT SAME LANGUAGE AS THE USER. 
             * If user writes in pure English -> Reply ONLY in English.
             * If user writes in pure Hindi -> Reply ONLY in Hindi.
             * If user writes in Hinglish -> Reply ONLY in Hinglish.
           - When fetching standard answers from 'chatbotResponses' in the [COMPANY DATA], ONLY use the text from the language key ('en', 'hi', or 'hinglish') that matches the user's language. Do NOT use the 'hi' (Hindi) text if the user asked in English!
        2. Format your output using Markdown.
        4. Use the provided [COMPANY DATA] strictly to answer questions about Alvion Technologies. If the user asks about other companies, admit you are focused on Alvion's offerings.
        5. ANTI-HALLUCINATION & GENUINE SALES PIVOT (CRITICAL RULE): If the user asks if Alvion has done a project in a specific domain (e.g., AI, Machine Learning, cosmetics) or offers a specific service, you MUST check the 'topProjects' array first. If there are no explicitly matching projects in 'topProjects', YOU MUST EXACTLY use the following response format without adding anything else: 
        "Filhal hamari website par [domain] se related koi public case study nahi hai, but hamari expert team [domain] ke liye custom software aur IT solutions build karne mein puri tarah capable hai. Kya aap apne project ki requirements share karna chahenge?"
        CRITICAL: DO NOT say "I couldn't find", DO NOT add "Alternative Solutions", DO NOT make up hypothetical features like "Product formulation", DO NOT use bullet points. Just use the exact sentences provided above.
        CRITICAL REQUIREMENT: When asked about 'case studies', 'projects', 'portfolio', or 'work', you MUST ONLY list a few relevant projects explicitly present in the 'topProjects' array. Do not just output the generic company overview. DO NOT hallucinate external project names or ideas under any circumstances.
        6. DOMAIN SYNONYMS: Understand related industries. For example, Fintech = Banking = Financial Services = Finance. Logistics = Supply Chain = eCommerce = Retail = Warehouse. Public Sector = Governance. If the user asks about 'Fintech', and 'Banking' is in the data, use the Banking data to answer.
        7. INCLUDE LINKS (CRITICAL RULE): Whenever you mention a specific project or case study from the [COMPANY DATA], you MUST format it as a markdown clickable link using its provided "link" field. Example: [Project Name](/url). Do not output raw text for projects if a link is available.
        8. CONTACT LINKS (CRITICAL RULE): If you suggest the user to contact us, schedule a call, or share requirements, you MUST ALWAYS provide a clickable link to the contact page like this: [Contact Us](/contact) or ask them to email info@alviontechnologies.com.
        9. JOB QUERIES: If a user shares their experience and asks to apply, cross-check with 'chatbotResponses.jobs' in the data. If their experience (e.g., 2 years) doesn't exactly match the role's requirement (e.g., Fresher), respond encouragingly and tell them to email their resume to info@alviontechnologies.com for future opportunities. ALWAYS include a clickable [Careers](/careers) link.

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
        3. Do NOT invent or offer business solutions, software development services, or pretend to be a company. If the user asks how you can help their business or company, state that as an AI assistant you can answer technical questions, but for business solutions they should contact Alvion Technologies at info@alviontechnologies.com.
      `;
      temperature = 0.4;
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
