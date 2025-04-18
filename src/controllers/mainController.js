import quotes from '../quotes.json' with { type: 'json' };

const APIKEY = process.env.APIKEY || 'Q8xA3fZp1Lk7BnW9';

export const getRandomQuote = (req, res) => {
    const apiKey = req.header('x-api-key');

    if (apiKey !== APIKEY) {
        return res.status(401).json({
            status: 'error',
            message: 'Unauthorized. Invalid API key.'
        });
    }

    const index = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[index];

    return res.status(200).json({
        status: 'success',
        data: randomQuote
    });
}