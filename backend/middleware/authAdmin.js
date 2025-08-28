import jwt from "jsonwebtoken"

// corrected authentication 
const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers
        if (!atoken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        const decoded = jwt.verify(atoken, process.env.JWT_SECRET);
        if (decoded.role !== 'admin' || decoded.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: 'Access Denied. Invalid Admin Token.' });
        }
        req.admin = { email: decoded.email };
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authAdmin;