import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Endpoint GET
app.get("/api/data", (req, res) => {
  const user = req.headers["User-id"]

  if(user !== 'ifabula') {
    return res.status(401).json({
      success: false,
      responseCode: 401,
      responseMessage: "Unauthorized",
    })
  }

  res.status(200).json({
    success: true,
    responseCode: 200,
    responseMessage: "Data berhasil didapat",
    data: dataDummy,
  });
});



// Endpoint POST
app.post("/api/data", (req, res) => {
  const user = req.headers["User-id"]
  const { userId, id, title, body } = req.body

  if(user !== 'ifabula') {
    return res.status(401).json({
      success: false,
      responseCode: 401,
      responseMessage: "Unauthorized",
    })
  }

  if(!userId || !id || !title || !body) {
    res.status(400).json({
      success: false,
      responseCode: 400,
      responseMessage: "Bad Request",
    })
  }

  const newData = { userId, id, title, body }
  dataDummy.push(newData)

  res.status(201).json({
    success: true,
    responseCode: 201,
    responseMessage: "Data berhasil ditambahkan",
    data: newData,
  })
})

// Menjalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
