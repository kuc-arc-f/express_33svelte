
import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
const app = express();
import 'dotenv/config'
//
import Top from './pages/App';
//
import commonRouter from './routes/commonRouter';
import tursoTodoRouter from './routes/tursoTodoRouter';
//
//
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV)
//
const errorObj = {ret: "NG", messase: "Error"};

// route
app.use('/api/common', commonRouter);
app.use('/api/turso_todo', tursoTodoRouter);

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