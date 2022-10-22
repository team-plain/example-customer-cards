import server from ".";

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`⚡️ Server is running at https://localhost:${port}`);
});
