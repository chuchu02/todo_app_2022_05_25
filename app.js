import express from "express";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

const appPort = 3000;


app.get('/todos', (req, res)=> {
  return res.json([
    {
      id : 2,
    },
    {
      id : 1,
    }
  ])
})
app.listen(appPort, () => {
  console.log('Example app listening on port ${appPort}')
});