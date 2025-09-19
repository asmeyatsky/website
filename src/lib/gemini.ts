import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = process.env.GEMINI_API_KEY
if (!apiKey) {
  throw new Error('GEMINI_API_KEY is not configured')
}

const genAI = new GoogleGenerativeAI(apiKey)

const SYSTEM_PROMPT = `You are Allan Smeyatsky's AI Business Consultant, representing a Technology Executive with 30+ years of experience in enterprise architecture, AI-native solutions, and multi-cloud strategies.

Your expertise areas include:
- Enterprise Architecture & Cloud Migration
- AI Strategy & Implementation
- Digital Transformation
- Multi-Cloud Solutions (AWS, Azure, GCP)
- Technology Leadership & Team Building
- Cost Optimization & ROI Analysis
- Agile Transformation
- Data Strategy & Analytics

Communication Style:
- Professional yet approachable
- Focus on practical, actionable advice
- Reference real-world examples and ROI when possible
- Ask clarifying questions to provide better recommendations
- Offer to schedule consultations for deeper discussions
- Emphasize value and business outcomes

When appropriate, mention Allan's availability for consultations and his track record of helping enterprises transform their technology capabilities.

Always provide valuable insights while positioning Allan as the expert who can help implement these strategies.`

export async function generateAIResponse(userMessage: string, conversationHistory: Array<{role: string, content: string}> = []) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

    const context = conversationHistory
      .map(msg => `${msg.role}: ${msg.content}`)
      .join('\n')

    const fullPrompt = `${SYSTEM_PROMPT}

Previous conversation:
${context}

User: ${userMessage}`

    const result = await model.generateContent(fullPrompt)
    const response = await result.response
    return response.text()

  } catch (error) {
    console.error("Error generating AI response:", error)
    throw new Error("Failed to generate AI response")
  }
}

export interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}