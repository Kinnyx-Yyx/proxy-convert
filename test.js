const SocksProxyAgent = require('socks-proxy-agent');
const net = require('net');

const proxyConfig = {
  host: 'asg.360s5.com:3600',
  port: 1080,
  username: '98120578-zone-custom-region-GB-city-london-sessid-psdjGhiV-sessTime-120',
  password: 'JI6nmSu5'
};

const agent = new SocksProxyAgent({
  ...proxyConfig,

});

const socket = net.connect({
  host: 'www.google.com',
  port: 443,
  agent
});

socket.on('connect', () => {
  console.log('Connected to destination server through SOCKS5 proxy.');
});

socket.on('error', err => {
  console.error('Error:', err);
});