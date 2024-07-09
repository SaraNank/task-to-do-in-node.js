import {express} from 'express';
import cors from "cors"
import bodyParser from 'body-parser';

import taskRouter from './taskRouter.js';



  connectDB();

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use("/tasks",taskRouter);
const port = 3000;



app.get('/',(req,res)=>{
    res.send('hello world!');
})



app.listen(port,()=>{
    console.log('Example app listening on http://localhost:${port}');
})