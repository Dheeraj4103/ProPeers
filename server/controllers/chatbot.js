// import dotenv from "dotenv";
// dotenv.config()
// import { Configuration, OpenAIApi } from 'openai'
// const configuration = new Configuration({
//   apiKey: process.env.OPEN_AI_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export const chatbotController = async (req, res) => {
//   const { message } = req.body
//   try {
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: `${message}`,
//       max_tokens: 100,
//       temperature: 0,
//     });
//     res.status(200).json({
//       message: response.data.choices[0].text
//     })
//   } catch (error) {
//     console.log(error)
//     res.status(400).json("Something went wrong...")
//   }
// }

import dotenv from "dotenv";
dotenv.config()
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

const makeOpenAIRequest = async (message, retryCount = 0) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0,
    });
    return response.data.choices[0].text;
  } catch (error) {
    if (error.response && error.response.status === 429 && retryCount < 3) {
      // Retry after an increasing delay (exponential backoff)
      const delay = Math.pow(2, retryCount) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
      return makeOpenAIRequest(message, retryCount + 1);
    } else {
      console.error(error);
      throw new Error("Something went wrong with the OpenAI request.");
    }
  }
};

export const chatbotController = async (req, res) => {
  const { message } = req.body;
  try {
    const responseText = await makeOpenAIRequest(message);
    res.status(200).json({ message: responseText });
  } catch (error) {
    console.log(error);
    res.status(400).json("Something went wrong...");
  }
};
