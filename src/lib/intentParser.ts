import companyData from "@/data/company-info.json";

type Language = "en" | "hi" | "hinglish";

export function parseIntent(query: string): string | null {
  const normalizedQuery = query.toLowerCase().trim();

  // --- LANGUAGE DETECTION ---
  let lang: Language = "en";
  if (/[\u0900-\u097F]/.test(query) || /\b(hindi)\b/i.test(normalizedQuery)) {
    lang = "hi";
  } else if (/\b(kya|kaise|batao|kaun|kahan|kitna|hai|bhai|suno|tumhara|hamara|dikhao|paisa|kiski|kiske|kar|raha|hota|matlab|matlb|mtlb|chahiye|nahi|haan|kaam|naam)\b/i.test(normalizedQuery)) {
    lang = "hinglish";
  }

  // Access the translated responses
  const responses = (companyData as any).chatbotResponses;
  if (!responses) return null;

  // GLOBAL STRICTNESS: If the query is very long (more than 10 words), it's likely a complex question (like a blog query).
  // Skip simple keyword matching so it goes directly to the AI/Fallback for a proper response.
  const wordCount = normalizedQuery.split(/\s+/).length;
  if (wordCount > 10) {
    return null; // Force fallback to AI
  }

  // Bypass local matching for market research / top company queries
  if (/\b(best|top|list|companies in|company in|who is the best|which company)\b/i.test(normalizedQuery)) {
    return null; // Let the AI answer this genuinely
  }

  // 1. SERVICES INTENT
  if (/(services|what do you do|kya karte ho|kaam kya hai|offerings|kya banate ho|what can you build|what are your services|your expertise|tumhara kaam|software development|app development|web development|solutions)/i.test(normalizedQuery)) {
    return responses.services[lang];
  }

  // 2. CONTACT & LOCATION INTENT
  if (/(contact|address|kahan ho|office kahan|phone|email|location|kaise mile|phone number|reach out|where are you located|office located|how to contact|get in touch|mobile number|call me|whatsapp|map)/i.test(normalizedQuery)) {
    return responses.contact[lang];
  }

  // 3. ABOUT/PROFILE INTENT
  if (/(about|who are you|kaun ho tum|company details|profile|alvion kya hai|tell me about your company|introduction|background|history)/i.test(normalizedQuery)) {
    return responses.about[lang];
  }

  // 4. CAREERS & JOBS INTENT
  if (/(jobs|careers|hiring|vacancy|openings|naukri|job hai|fresher|internship|apply|looking for a job|current openings|career opportunities|recruitment)/i.test(normalizedQuery)) {
    return responses.jobs[lang];
  }

  // 5. PROJECTS & PORTFOLIO INTENT
  if (/(projects|portfolio|case studies|kaam dikhao|previous work|clients|apps built|show me your work|what have you built|examples|past work)/i.test(normalizedQuery)) {
    return responses.projects[lang];
  }

  // 6. PRICING & COST INTENT
  if (/(price|cost|kitna charge|kitna paisa|budget|expensive|rate|quotation|estimate|how much does it cost|pricing model|fees)/i.test(normalizedQuery)) {
    return responses.cost[lang];
  }

  // 7. FREE CONSULTATION INTENT
  if (/(free consultation|call|meet|meeting|appointment|schedule a call|talk to sales|book a meeting)/i.test(normalizedQuery)) {
    return responses.consultation[lang];
  }

  // 8. SPECIFIC TECHNOLOGIES (Appian, React, Java)
  // Only trigger tech intents if the query is relatively short (e.g., less than 6 words) or explicitly asks about our tech stack
  if (wordCount <= 6 || /(do you use|your tech|expertise in|hire)/i.test(normalizedQuery)) {
    if (/\b(appian|low[- ]code|automation|bpm)\b/i.test(normalizedQuery)) {
      return responses.appian[lang];
    }
    if (/\b(react|reactjs|react native|frontend|mobile app|ui|ux|ios|android)\b/i.test(normalizedQuery)) {
      return responses.react[lang];
    }
    if (/\b(java|spring boot|backend|api|server|database)\b/i.test(normalizedQuery)) {
      return responses.java[lang];
    }
  }

  // 9. GREETINGS
  if (/\b(hi|hello|hey|namaste|hi alvion|hello alvion|sun|suno|bhai|good morning|good evening|good afternoon|what's up)\b/i.test(normalizedQuery)) {
    return responses.greetings[lang];
  }

  // 10. WORKING HOURS & TIMING
  if (/(time|timing|working hours|kab khulta hai|kab band hota hai|office time|weekend|saturday|sunday|are you open)/i.test(normalizedQuery)) {
    return responses.timings[lang];
  }

  // 11. LEADERSHIP & FOUNDERS
  if (/(founder|ceo|owner|maalik|kiski company hai|who owns|management|director)/i.test(normalizedQuery)) {
    return responses.founders[lang];
  }

  // 12. SUPPORT & HELP
  if (/(support|help|error|bug|issue|dikkat|kaam nahi kar raha|problem|i need help|system down)/i.test(normalizedQuery)) {
    return responses.support[lang];
  }

  // 13. TECH STACK & TOOLS
  if (/(tech stack|technology|kaunsi technology|kisme kaam karte ho|tools|what stack do you use)/i.test(normalizedQuery)) {
    return responses.techStack[lang];
  }

  // 14. CLIENTS & REVIEWS
  if (/(clients|customers|reviews|kiske sath kaam kiya|brands|testimonials|rating)/i.test(normalizedQuery)) {
    return responses.clients[lang];
  }

  // No match found - fallback to AI
  return null;
}
