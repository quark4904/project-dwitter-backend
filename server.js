import http from 'http';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import { PrismaClient } from '@prisma/client';

dotenv.config(); // dotevn 라이브러리 사용
// const prisma = new PrismaClient();

import routes from './routes';

const PORT = process.env.PORT;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// route
app.use(routes);

// 처리할 수 없는 URL로 진입시 처리(not found)(필수!)
app.use((req, res, next) => {
  res.sendStatus(404);
});

// 에러 처리(필수!)
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

// create server
const server = http.createServer(app);

// run my server
const serverStart = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`server is listening on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    // await prisma.$disconnect();
  }
};

serverStart();
