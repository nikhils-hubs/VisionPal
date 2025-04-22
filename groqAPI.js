// groqAPI.js or whatever you're using as server file
const express = require('express');
const router = express.Router();
const { Groq } = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

router.post('/api/groq', async (req, res) => {
  try {
    const completion = await groq.chat.completions.create({
      model: req.body.model,
      messages: req.body.messages,
      temperature: req.body.temperature,
      max_tokens: req.body.max_tokens,
      top_p: req.body.top_p,
      stream: req.body.stream,
    });

    res.setHeader('Content-Type', 'text/plain');

    for await (const chunk of completion) {
      res.write(chunk.choices[0]?.delta?.content || '');
    }

    res.end();
  } catch (err) {
    console.error('GROQ error:', err);
    res.status(500).send('GROQ API failed.');
  }
});

module.exports = router;
