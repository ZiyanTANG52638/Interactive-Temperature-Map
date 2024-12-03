// 导入依赖项
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// 初始化 Express 应用
const app = express();
app.use(bodyParser.json());
app.use(cors());

// 连接到 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/temperatureData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 定义数据模型
const TemperatureSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
    temperature: String,
    timestamp: { type: Date, default: Date.now }
});

const Temperature = mongoose.model('Temperature', TemperatureSchema);

// 路由：保存用户数据到 MongoDB
app.post('/api/temperature', async (req, res) => {
    const { latitude, longitude, temperature } = req.body;

    try {
        const newTempData = new Temperature({
            latitude,
            longitude,
            temperature
        });

        await newTempData.save();
        res.status(200).send('Data saved successfully!');
    } catch (error) {
        res.status(500).send('Error saving data');
    }
});

// 路由：获取所有存储的数据
app.get('/api/temperature', async (req, res) => {
    try {
        const allData = await Temperature.find();
        res.json(allData);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


