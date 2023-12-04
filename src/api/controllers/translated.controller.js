import dotenv from "dotenv";
dotenv.config();

const translated = async (req, res) => {
  const { data } = req.body;
  const helsinki =
    "https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-en-es";
  try {
    const response = await fetch(helsinki, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${process.env.HF_TOKEN} `,
      },
      body: JSON.stringify({
        inputs: `${data}`,
        options: {
          wait_for_model: true,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    res.json({ status: "ok", message: result[0].translation_text });
  } catch (error) {
    console.log(error);
  }
};

export default translated;
