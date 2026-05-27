const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyDjdFkLsFfmk0y3cHO4PKp1wu7J8NysK9w"; // Using the key from .env.local
const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
  try {
    // The SDK does not have a direct listModels method, we can fetch it via REST
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();
    console.log("Available models:");
    data.models.forEach(model => {
      console.log(`- ${model.name} (Supported Methods: ${model.supportedGenerationMethods.join(", ")})`);
    });
  } catch (err) {
    console.error(err);
  }
}

listModels();
