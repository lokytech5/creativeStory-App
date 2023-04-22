import axios from "axios";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const OPENAI_API_URL = process.env.OPENAI_API_URL

//*This function takes in prompt as input, token and temperature as parameters
async function generateStory(prompt, tokens = 150, temperature = 0.8){

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
    };


    const data = {
        prompt: prompt,
        max_tokens: tokens,
        n: 1,
        temperature: temperature
    };

    //*Making a post request with the required parameters listed above
    try {
        const response = await axios.post(OPENAI_API_URL, data, { headers: headers });
        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error generating story:', error);
        return null;
    }
}