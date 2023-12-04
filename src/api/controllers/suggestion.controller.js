import dotenv from "dotenv";
dotenv.config();
import { BingChat } from "bing-chat";

const suggestion = async (req, res) => {
  const { data } = req.body;
  console.log(data);

  const flan = "https://api-inference.huggingface.co/models/google/flan-ul2";
  const penAssistant =
    "https://api-inference.huggingface.co/models/OpenAssistant/oasst-sft-1-pythia-12b";
  try {
    const response = await fetch(flan, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${process.env.HF_TOKEN} `,
      },
      body: JSON.stringify({
        inputs: `Create an example of a sentence that can be formed with this word: ${data},
          explain the context of the word, the sentence must be grammatically correct.`,
        // options: {
        //   wait_for_model: true,
        // },
      }),
    });
    console.log(response.ok);
    console.log(response.status);

    const result = await response.json();
    console.log(result);
    res.json({ status: "ok", message: result[0].generated_text });
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};

export default suggestion;
