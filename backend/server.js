const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Free Cloud Database URL
const MONGO_URI = "mongodb://127.0.0.1:27017/gyankunj";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Database se connection tight hai bhai! 🗄️🎉"))
  .catch(err => console.log("Database connect nahi hua: ", err));

// Student Data Structure (Schema)
const StudentSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    course: String,
    date: { type: Date, default: Date.now }
});
const Student = mongoose.model('Student', StudentSchema);

// API Route 1: Admission Form Ka Data Save Karne Ke Liaye
app.post('/api/admission', async (req, res) => {
    try {
        const { name, mobile, course } = req.body;
        const newStudent = new Student({ name, mobile, course });
        await newStudent.save();
        res.status(201).json({ success: true, message: "Data Save Ho Gaya!" });
    } catch (error) {
        res.status(500).json({ success: false, error: "Server Error!" });
    }
});

// API Route 2: Dashboard Par Saara Data Dekhne Ke Liye
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find().sort({ date: -1 });
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: "Data nahi mila" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend Server port ${PORT} par daud raha hai... 🚀`));
