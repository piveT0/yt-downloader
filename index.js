const express = require('express')
const ytdl = require('ytdl-core');
const app = express()
const port = 3000

app.get("/", function (req, res) {
  const {url} = req.query;

  const {date} = new Date()
  res.header("Content-Disposition", `attachmentt; filename="video_${date}.mp4"`);
  return ytdl(url).pipe(res);
});

app.listen(port)
