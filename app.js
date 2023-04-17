const express = require("express");
const cors = require("cors");
const { default: main } = require("./mailer");



const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    // res.send("Hello World");
    main();

});




app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

