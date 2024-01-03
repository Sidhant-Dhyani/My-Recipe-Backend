
const User = require('../models/Users');

const GETONE = async (req, res) => {
    try {
        const userId = req.params.id; 
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { GETONE };