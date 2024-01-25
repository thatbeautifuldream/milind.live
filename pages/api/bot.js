import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { HumanMessage } from "@langchain/core/messages"

const vision = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro-vision",
  maxOutputTokens: 2048,
})

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      if (req.body.imageUrl.endsWith(".gif")) {
        return res.json({ message: "GIFs are not supported" })
      }
      const imageUrl = req.body.imageUrl
      const imageBase64 = Buffer.from(imageUrl.data, "binary").toString(
        "base64"
      )
      const input = [
        new HumanMessage({
          content: [
            {
              type: "text",
              text: "Describe the following image.",
            },
            {
              type: "image_url",
              image_url: `data:image/png;base64,${imageBase64}`,
            },
          ],
        }),
      ]
      const result = await vision.invoke(input)
      res.status(200).json(result)
    } catch (error) {
      console.error("Error processing the image:", error)
      res.status(500).json({ error: "Internal Server Error" })
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" })
  }
}
