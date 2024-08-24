const fs = require('fs');
const yaml = require('js-yaml');

// 读取输入文件
const inputFilePath = 'input.txt'; // 输入文件路径
const outputFilePath = 'clash.yaml'; // 输出文件路径

// 读取文本文件内容
const inputContents = fs.readFileSync(inputFilePath, 'utf-8').trim().split(/\r?\n/);

// 解析代理信息
const proxies = inputContents.map((line, index) => {
    const [auth, hostPort] = line.split('@');
    const [username, password] = auth.split(':');
    const [server, port] = hostPort.split(':');

    return {
        name: `Proxy-${index + 1}`,
        type: 'http',
        server: server,
        port: parseInt(port, 10),
        username: username,
        password: password,
    };
});

// 创建 Clash 配置
const clashConfig = {
    proxies: proxies,
    'proxy-groups': [{
        name: 'Proxies',
        type: 'select',
        proxies: proxies.map(proxy => proxy.name),
    }],
    rules: [
        'GEOIP,CN,DIRECT',
        'MATCH,Proxies',
    ],
};

// 输出到 YAML 文件
const yamlString = yaml.dump(clashConfig);
fs.writeFileSync(outputFilePath, yamlString, 'utf-8');

console.log(`Clash configuration has been generated and saved to ${outputFilePath}`);
