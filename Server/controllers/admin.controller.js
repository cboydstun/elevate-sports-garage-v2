import {Admin} from '../models/admin.schema.js';
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
const SALT_ROUNDS = 10;

export async function createAdmin(req,res) {
    console.log(req.body)
    const{user, password} = req.body
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
 
    const admin = new Admin({
        user,
        password:hashedPassword
    })
    
    res.send('User Created Succesfully')
    await admin.save();
}


export async function adminLoginFunction(req,res) {
    
    const { user, password } = req.body;

    if (!user || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide all the fields"
        })
    }

    try {
        // find the user in the database
        const admin = await Admin.findOne({ user });

        // if the user is not found then return an error
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        // // compare the password
        const isValidPassword = await bcrypt.compare(password, admin.password)

        // validate the password
        if (!isValidPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        // generate a jwt token
        const token = jwt.sign(
            {
                userId: admin._id,
                message:'ADMIN'
               
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        // send the success response
        res.status(200).json(token)
    } catch (error) {
        console.log(error);
    }
}