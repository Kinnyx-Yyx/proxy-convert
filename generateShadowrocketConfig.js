const fs = require('fs');

// 代理信息
const proxy = {
    type: "http", // 使用http代理类型
    host: "149.40.76.229", // IP地址
    port: 6305, // 端口
    username: "98120578", // 用户名
    password: "y0uP0Peg" // 密码
};

// 创建 Shadowrocket 配置
const shadowrocketConfig = {
    "version": 1,
    "servers": [
        {
            "name": "My Proxy",
            "type": proxy.type,
            "server": proxy.host,
            "port": proxy.port,
            "username": proxy.username,
            "password": proxy.password
        }
    ]
};

// 输出到 JSON 文件
const outputFilePath = 'shadowrocket.json';
fs.writeFileSync(outputFilePath, JSON.stringify(shadowrocketConfig, null, 2), 'utf-8');

console.log(`Shadowrocket configuration has been generated and saved to ${outputFilePath}`);
