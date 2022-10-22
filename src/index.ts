import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello!`);
});

server.get("/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Hello from slug: ${slug}`);
});

export default server;
