import jwt from 'jsonwebtoken'

const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(400).json({ message: "No token provided" })
        }
        const token = authHeader.split(" ")[1]
        let verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        if (!verifyToken) {
            return res.status(400).json({ message: "Invalid token" })
        }
        req.userId = verifyToken.userId
        next()
    } catch (error) {
        console.log("isAuth error")
        return res.status(500).json({ message: `isAuth error ${error}` })
    }
}

export default isAuth
