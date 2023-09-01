const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const symbols = [
  {
    characters: "abscdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    symbols: `!@#$%^&*()_-=+'"|/.,?;:[]{}`,
  },
];

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      symbols,
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(
    `App listening on port ${port}, checkout http://localhost:${port}`
  );
});
