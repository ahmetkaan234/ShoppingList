const express = require('express')
const cors =require('cors')
const dotenv =require('dotenv') 
const productRouter = require('./routes/productRouter')

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());


app.use('/',productRouter)


const PORT =process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(` Server is running on ${PORT} `);
})