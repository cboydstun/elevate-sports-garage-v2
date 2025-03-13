import jwt from 'jsonwebtoken'
import {Admin} from '../models/admin.schema.js'
export default async function authenticateUser(req, res, next){
    try {
        // get the token from the request headers
        //make sure 'token' is what it is named etc
        const token = req.headers.authorization;
        
        // validate the token
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed, no token"
            })
        }

        // verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // get the user from the database
        const admin = await Admin.findById(decoded.userId);

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed, "
            })
        }

        // add the user to the request object
        req.admin = admin;
        next();
    } catch (error) {
        console.log(error);
    }
}



