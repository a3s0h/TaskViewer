const express = require('express');
const app = express();
const taskRoutes = require("./Tasks/routes");
const cors = require("cors")


app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
  res.send("hello");
})


app.use('/api/v1/tasks' , taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
