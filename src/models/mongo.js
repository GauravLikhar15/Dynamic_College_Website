const express = require('express')
const app = express();
const Register = require("../connection/mongoose");
const path = require("path")
require("../connection/mongoose");
app.use(express.static(path.join(__dirname, "../../login")))
app.use(express.static(path.join(__dirname, "../../public")))

const bodyparser = require("body-parser")
const { JSON } = require("Express");
const { Collection } = require('mongoose');
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }))


// app.get("/home", (req, res) => {
//         res.sendFile("D:/VOLUME S/MITAOE 1/WD CODE/COLLEGE WEBSITE/public/home.html");
// })
app.post("/", async (req, res) => {
        try {
                pass = req.body.pass
                repass = req.body.repass

                if (pass == repass) {
                        const reg = new Register({
                                name: req.body.name,
                                email: req.body.email,
                                pass: req.body.pass,
                                repass: req.body.repass,
                        })
                        reg.save();
                        res.send("SAVED SUCCESSFULLY ,You Can now login in to website")

                }
                else {

                        res.send("INVALID CREDENTIALS")


                }
        }
        catch (error) {
                res.send("ERROR OCCURED")
        }

})


app.post("/login.html", async (req, res) => {

        try {
                useremail = req.body.youremail;
                userpass = req.body.yourpass;
                console.log(useremail);
                console.log(userpass);

                const data = await Register.findOne({ email: useremail });
                if (data.pass == userpass) {
                        
                        res.sendFile("D:/VOLUME S/MITAOE 1/WD CODE/COLLEGE WEBSITE/public/home.html");
                }
                else {
                        res.statusCode(404).send("Invalid Credentials");
                }
        }
        catch (error) {
                res.send("ERROR OCCURED")

        }
})


app.listen(80, () => {
        console.log(`Connected to https://localhost `);
})