const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = require("./Utils/db");
const userRoute = require("./Route/userRoute");
const productRoute = require('./Route/productRoute')
const purchaseRoute = require('./Route/purchaseRoute');


app.use("/api", userRoute);
app.use("/api",productRoute)
app.use('/api/purchase',purchaseRoute)



const PORT = 9000;
sequelize
  .sync() 
  .then(() => {
    console.log("Database synced successfully");

    app.listen(PORT, () =>
      console.log(`Server running on PORT ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Database sync failed:", err.message);
  });
