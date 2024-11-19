const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        // Kết nối đến MongoDB
        await mongoose.connect('mongodb+srv://nguyenhongphucms02:6XegPo0bY1SPjZR1@cluster0.kuun6.mongodb.net/demo_api?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Kết nối đến MongoDB thành công!');
    } catch (error) {
        console.error('Lỗi kết nối đến MongoDB:', error);
        process.exit(1); // Dừng ứng dụng nếu không thể kết nối
    }
};

module.exports = connectDB;
