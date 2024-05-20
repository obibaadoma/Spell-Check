// server.js
const express = require('express');
const app = express();
const languagetool = require('languagetool');

app.post('/check-text', (req, res) => {
  const text = req.body.text;
  const languageTool = new languagetool.LanguageTool('en-US');
  const result = languageTool.check(text);
  res.json(result);
});

app.post('/correct-text', (req, res) => {
  const text = req.body.text;
  const languageTool = new languagetool.LanguageTool('en-US');
  const correctedText = languageTool.correct(text);
  res.json(correctedText);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});