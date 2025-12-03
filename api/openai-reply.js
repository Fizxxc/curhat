import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({error:"Method Not Allowed"});

  const { message, adminName } = req.body;
  if(!message || !adminName) return res.status(400).json({error:"Missing params"});

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {role:"system", content: "Kamu adalah AI pendengar curhat yang ramah dan empatik."},
        {role:"user", content: message}
      ],
      max_tokens: 400
    });

    const reply = completion.choices[0].message.content;

    res.status(200).json({ reply: `${adminName}ai: ${reply}` });

  } catch(e){
    console.error(e);
    res.status(500).json({error:"OpenAI API error"});
  }
}
