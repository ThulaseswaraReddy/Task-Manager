const express=require('express');
const cors=require('cors');
const connectDB=require('./db');
const PORT = process.env.PORT || 3000;

const app=express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth",require('./routes/auth'));
app.use('/api/tasks',require('./routes/tasks'));


app.listen(PORT, () => {
  console.log("Server running");
});
