import express, { json } from 'express';
import {userRouter} from './src/routes/userRoute.js';
import {exerciseRouter} from './src/routes/exerciseRoute.js';
import 'dotenv/config' ;
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
//import { fileURLToPath } from 'C:\Users\Rolo\Desktop\API PROGYM\dist';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//const __dirname = dirname(__dirname);

const path = __dirname + '/dist/';
const app =  express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(express.static(path));
app.use(json());
app.use(cors(corsOptions));
app.disable('x-powered-by'); // Desactiva el header x-powered-by de express
console.log(path)
const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.sendFile(path+"index.html");
  });
app.use('/user', userRouter);
app.use('/rutina', exerciseRouter);

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});