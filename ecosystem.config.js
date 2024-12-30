module.exports = {
    apps: [
      {
        name: '器捐協會',
        port: '3000',
        exec_mode: 'cluster',
        instances: '1',
        script: './.output/server/index.mjs'
      }
    ]
  }
  