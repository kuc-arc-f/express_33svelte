
import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
const app = express();
//
import Top from './pages/App';
//
//import Common from './lib/Common';
import testRouter from './routes/test'; 
//import commonRouter from './routes/common';
//
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV)
//
const errorObj = {ret: "NG", messase: "Error"};

// route
app.use('/api/test', testRouter);

//SPA
app.get('/test', (req: any, res: any) => {
  try {
    res.send("/test-11, OK");
  } catch (error) {
    res.sendStatus(500);
  }
});
//SPA
app.get('/*', (req: any, res: any) => {
  try {
    res.send(renderToString(Top()));
  } catch (error) {
    res.sendStatus(500);
  }
});

//start
const PORT = 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');

//export const viteNodeApp = app;