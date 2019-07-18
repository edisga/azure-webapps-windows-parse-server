module.exports = {
  server: {
    appId: process.env.APP_ID || 'edison',
    masterKey: process.env.MASTER_KEY || 'mredison',
    databaseURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/myparse',
    serverURL: (process.env.SERVER_URL || 'http://localhost:3000') + '/parse',
  },
  dashboard: {
    apps: [
      {
        serverURL: (process.env.SERVER_URL || 'http://localhost:3000') + '/parse',
        appId: process.env.APP_ID || 'edison',
        masterKey: process.env.MASTER_KEY || 'mredison',
        appName: 'Parse Server Azure' 
      }
    ],
    users: [ 
      { 
        user: process.env.APP_ID || 'edison',
        pass: process.env.MASTER_KEY || 'mredison',
      } 
    ] 
  },
  storage: {},
  push: {}
}
