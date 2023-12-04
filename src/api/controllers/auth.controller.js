import dotenv from "dotenv";
dotenv.config();
const clientId = process.env.OAUTH_CLIENT_ID;
const clientSecret = process.env.OAUTH_CLIENT_SECRET;
const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

const login = async (req, res) => {
  const authCode = req?.body?.code;
  console.log(clientId, clientSecret);
  try {
    const response = await fetch("https://api.notion.com/v1/oauth/token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${encoded}`,
      },
      body: JSON.stringify({
        grant_type: "authorization_code",
        code: authCode,
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      res.status(400).json({ message: "error", data: result });
    } else {
      res.status(200).json({ message: "success!", data: result });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "error", error });
  }
};

export default login;
