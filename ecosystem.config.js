module.exports = {
  apps: [{
    name: 'powerchip-clone',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000',
    cwd: '/www/wwwroot/powerchip-clone',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    // 确保在正确的 Node 环境下运行
    interpreter: '/www/server/nodejs/v16.20.2/bin/node'
  }]
};
