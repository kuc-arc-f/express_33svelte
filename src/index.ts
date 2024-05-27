
import express from 'express';
const app = express();
//
import { htmlSend } from './lib/RenderUtil'
import App from './pages/App.svelte';
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
    const rendered = await App.render();
    res.send(htmlSend(rendered.html));
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

//start
const PORT = 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');
