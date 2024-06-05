require("./services/passport");
const express = require("express");
const authRouter = require("./routes/authRoutes");

const app = express();


app.use('/auth', authRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`What they say server running on ${PORT}`)
});
