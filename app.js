// 初始化地图
const map = L.map('map').setView([24.4798, 118.0894], 10); // 初始视图为厦门

// 添加 OpenStreetMap 图层
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 存储用户上传数据的数组
let userData = [];

// 获取用户输入的数据并添加到地图
document.getElementById('dataForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const location = document.getElementById('location').value;
  const temperature = document.getElementById('temperature').value;
  const photo = document.getElementById('photo').files[0];

  // 使用 Geocoding API 将位置转换为经纬度
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        const lat = data[0].lat;
        const lon = data[0].lon;

        // 创建标记并显示
        const marker = L.marker([lat, lon]).addTo(map)
          .bindPopup(`<b>${location}</b><br>温度：${temperature}°C<br><img src="${URL.createObjectURL(photo)}" width="100">`)
          .openPopup();

        // 将数据存储在本地数组中
        userData.push({ lat, lon, temperature, location, photo });

        // 清空表单
        document.getElementById('dataForm').reset();

        // 更新热力图
        updateHeatmap();
      }        
    });
});

// 更新热力图
function updateHeatmap() {
  if (window.heatmapLayer) {
    map.removeLayer(window.heatmapLayer);
  }
  
  // 根据用户数据生成热力图
  const heatData = userData.map(item => [item.lat, item.lon, item.temperature]);
  window.heatmapLayer = L.heatLayer(heatData, { radius: 25 }).addTo(map);
}
fetch('http://localhost:3000/api/temperature')
    .then(response => response.json())
    .then(data => {
        data.forEach(point => {
            L.marker([point.latitude, point.longitude]).addTo(map)
                .bindPopup(`Temperature: ${point.temperature}`)
                .openPopup();
        });
    });