
import express from 'express';
const app = express();
//
import { htmlSend } from './lib/RenderUtil'
import Top from './pages/App';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV)
//
const errorObj = {ret: "NG", messase: "Error"};
//SPA
app.get('/*', async (req: any, res: any) => {
  try {
    //Top
    const htm = Top({coolieAuth: "" });
    res.send(htm);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

//start
const PORT = 3000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');
