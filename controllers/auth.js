
const bcryptjs = require('bcryptjs');
const User = require("../models/Users");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "sidhant";

const createToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET);
};

const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        const token = createToken(newUser._id);
        res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Email is required for login",
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: `Invalid ${email} or password` });
        }

        const passwordMatch = await bcryptjs.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: `Invalid ${email} or password` });
        }

        const token = createToken(user._id);
        res.status(200).json({
            message: "Login successful",
            token: token
        });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
};

module.exports = { Register, Login };