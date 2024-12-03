Interactive Temperature Map

项目概述

Interactive Temperature Map 是一个交互式数据可视化平台，允许用户上传基于位置的照片和温度感知数据，并在地图上实时展示这些数据的地理分布。
通过该平台，用户可以探索不同区域的温度感知差异，了解气候变化对人们体感温度的影响，旨在提高公众对环境变化的认知与关注。

功能特点

	1.	交互式地图展示
	•	使用 Mapbox 或 Leaflet.js 构建，实时展示用户上传的温度数据点和照片。
	•	支持热力图层，直观展示温度感知的地理分布。
	2.	用户数据上传
	•	用户可以上传照片、位置、温度感知和活动信息。
	•	上传的数据将同步到后端数据库 (MongoDB) 并更新在地图上。
	3.	数据可视化
	•	根据用户的主观温度感知生成不同的颜色标记，展示温度差异。
	•	支持时间轴功能，查看不同时期的数据变化。
	4.	响应式设计
	•	支持移动端和桌面端访问，适配不同设备。

技术栈

	•	前端：
	•	HTML5 / CSS3 / JavaScript
	•	Mapbox 或 Leaflet.js (交互地图)
	•	Axios (与后端通信)
	•	后端：
	•	Node.js (Express 框架)
	•	MongoDB (数据存储)
	•	RESTful API (处理数据请求)
	•	部署：
	•	Vercel 或 Heroku (用于前后端部署)
	•	GitHub (代码版本管理)

安装与运行

1. 克隆项目

git clone https://github.com/yourusername/Interactive-Temperature-Map.git
cd Interactive-Temperature-Map

2. 安装依赖

确保你的电脑已安装 Node.js 和 npm，然后运行：

npm install

3. 配置环境变量

在项目根目录下创建一个 .env 文件，并添加以下内容：

MONGO_URI=your_mongodb_connection_string
PORT=3000
MAPBOX_API_KEY=your_mapbox_api_key

4. 运行项目

运行以下命令启动项目：

# 启动后端服务器
npm start

# 启动前端开发服务器 (如使用 Vite、Parcel 或 Webpack)
npm run dev

访问 http://localhost:3000 查看你的项目。

使用说明

	1.	上传数据
	•	在地图页面上点击 上传数据 按钮，填写位置信息、上传照片并输入主观温度感知。
	•	提交后，数据会同步到后端，并在地图上实时显示。
	2.	浏览数据
	•	在地图上浏览不同地区的温度感知数据，使用热力图和标记来分析区域气温差异。
	•	使用时间轴功能查看历史数据。

项目展示效果

<img src="screenshots/map-screenshot.png" alt="Interactive Temperature Map Screenshot" width="800">


部署到 Vercel

	1.	安装 Vercel CLI：

npm install -g vercel

	2.	部署项目：

vercel

	3.	访问你的在线项目：

部署完成后，你会获得一个在线访问的链接，类似于 https://yourproject.vercel.app。

贡献指南

欢迎任何形式的贡献！
如果你想为项目做出贡献，可以按照以下步骤操作：
	1.	Fork 本项目
	2.	新建功能分支：git checkout -b feature/your-feature-name
	3.	提交修改：git commit -m "Add your feature description"
	4.	推送到你的分支：git push origin feature/your-feature-name
	5.	提交 Pull Request

许可协议

本项目基于 MIT 许可证 开源。

联系我们

如果你有任何疑问或建议，欢迎通过以下方式联系：
	•	项目负责人：TANG Ziyan
	•	邮箱：2474621712@qq.com
	•	GitHub：ZiyanTANG52638
