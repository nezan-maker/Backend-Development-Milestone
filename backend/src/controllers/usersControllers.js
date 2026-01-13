
import bcrypt from "bcrypt"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

export const getUsers = (User) => async (req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (error) {
        console.log("Error in controllers", error);
        res.status(500).send("Internal server error!")

    }

}
export const signUp = (User) => async (req, res) => {
    try {
        let { name, password ,email } = req.body
        let your_pass = password
        let clipped_email = email.replace(/\s+/g, '');
        password = await bcrypt.hash(password, (10))
        const newUser = new User({ name, password ,email})
        await newUser.save()
        res.status(201).json({ name, your_pass, message: "Account successfully created ! Welcome !" })
        let message = `Thank you for trying Niel's Hub and We are sorry to say it is still undergoing construction and will provide full services in a month's time`
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port:587,
            secure:false,
            auth:{
                user:process.env.USER_NAME,
                pass:process.env.USER_PASS
            }
        
        })

        transporter.sendMail({
            from:"nezaniel2@gmail.com",
            to: clipped_email,
            subject: "Email Confirmation",
            text: message,
            html:`<div style="
                    width: 500px; 
                    height: 500px; 
                    background-color: #F0F0F0; 
                    padding: 20px; 
                    font-family: Arial, sans-serif; 
                    color: #333;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.3); 
                        border-radius: 10px;
                    ">
                        <p style="font-weight: 500; font-size: 18px;">${message}</p>
                        <p style="font-weight: 500; font-size: 15px;">Click here ⬇️ to see more</p>
                        <a href="https://niels-hub.vercel.app/" 
                            style="display: inline-block;
                            text-decoration: none; 
                            padding: 10px 20px; 
                            background-color: green;
                            font-size: 18px;
                            color: white; 
                            margin-left: 0px;
                            border-radius: 8px;
                            font-weight: 500;">
                            Visit Niels Hub
                        </a>
                </div>`
            
            
        }).then(()=>{
            console.log("Email sent successfully ");
        }).catch((error)=>{
            console.log("Email not sent",error)
            res.status(500).send("Internal server error")
        })


    } catch (error) {
        console.log("Error in controllers", error);
        res.status(500).send("Internal server error!")

    }

}
