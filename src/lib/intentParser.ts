import companyData from "@/data/company-info.json";

type Language = "en" | "hi" | "hinglish";

export type IntentType = "LOCAL" | "COMPANY_QUERY" | "MARKET_QUERY" | "GENERAL_QUERY";

export interface IntentResult {
  type: IntentType;
  response?: string;
}

export function parseIntent(query: string): IntentResult {
  const normalizedQuery = query.toLowerCase().trim();

  // --- LANGUAGE DETECTION ---
  let lang: Language = "en";
  if (/[\u0900-\u097F]/.test(query) || /\b(hindi)\b/i.test(normalizedQuery)) {
    lang = "hi";
  } else if (/\b(kya|kaise|batao|kaun|kahan|kitna|hai|bhai|suno|tumhara|hamara|dikhao|paisa|kiski|kiske|kar|raha|hota|matlab|matlb|mtlb|chahiye|nahi|haan|kaam|naam)\b/i.test(normalizedQuery)) {
    lang = "hinglish";
  }

  const responses = (companyData as any).chatbotResponses;

  // 1. MARKET RESEARCH (Unbiased, no company info)
  if (/\b(best|top|list|compare|vs|competitors|vendor|who is the best|which company|top companies)\b/i.test(normalizedQuery)) {
    return { type: "MARKET_QUERY" };
  }

  // 2. GREETINGS (Local)
  if (/\b(hi|hello|hey|namaste|hi alvion|hello alvion|sun|suno|bhai|good morning|good evening|good afternoon|what's up)\b/i.test(normalizedQuery)) {
    return { type: "LOCAL", response: responses.greetings[lang] };
  }

  // 3. CONTACT & LOCATION (Local)
  if (/(contact|address|kahan ho|office kahan|phone|email|location|kaise mile|phone number|reach out|where are you located|office located|how to contact|get in touch|mobile number|call me|whatsapp|map)/i.test(normalizedQuery)) {
    return { type: "LOCAL", response: responses.contact[lang] };
  }

  // 4. PRICING & COST (Local)
  if (/(price|cost|kitna charge|kitna paisa|budget|expensive|rate|quotation|estimate|how much does it cost|pricing model|fees)/i.test(normalizedQuery)) {
    return { type: "LOCAL", response: responses.cost[lang] };
  }

  // 5. FREE CONSULTATION (Local)
  if (/(free consultation|call|meet|meeting|appointment|schedule a call|talk to sales|book a meeting)/i.test(normalizedQuery)) {
    return { type: "LOCAL", response: responses.consultation[lang] };
  }

  // 6. WORKING HOURS & TIMING (Local)
  if (/(time|timing|working hours|kab khulta hai|kab band hota hai|office time|weekend|saturday|sunday|are you open)/i.test(normalizedQuery)) {
    return { type: "LOCAL", response: responses.timings[lang] };
  }

  // 7. SPECIFIC COMPANY QUERIES
  // Any specific reference to Alvion or their portfolio
  if (/(alvion|your services|what do you do|kaam kya hai|offerings|kya banate ho|what can you build|your expertise|tumhara kaam|about|who are you|kaun ho tum|company details|profile|alvion kya hai|projects|portfolio|case studies|clients|customers|reviews|kiske sath kaam kiya|founder|ceo|owner|maalik)/i.test(normalizedQuery)) {
    return { type: "COMPANY_QUERY" };
  }

  // 8. SPECIFIC TECHNOLOGIES 
  // If short, it might be asking if we do it. So, company query.
  const wordCount = normalizedQuery.split(/\s+/).length;
  if (/(appian|react|java|low[- ]code|automation|bpm|reactjs|react native|frontend|mobile app|ui|ux|ios|android|spring boot|backend|api|server|database)/i.test(normalizedQuery)) {
    if (wordCount <= 6 || /(do you use|your tech|expertise in|hire)/i.test(normalizedQuery)) {
      return { type: "COMPANY_QUERY" };
    }
  }

  // 9. EVERYTHING ELSE -> General Query (Unbiased, no company info needed for general knowledge)
  return { type: "GENERAL_QUERY" };
}
