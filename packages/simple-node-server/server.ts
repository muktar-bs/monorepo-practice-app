import express from 'express';
const app = express();
const port = 3001;

app.get("/data", (req, res) => {
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log("Simple node server started at port: ", port);
});
