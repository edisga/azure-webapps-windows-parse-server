module.exports = {
  server: {
    appId: process.env.APP_ID || 'username',
    masterKey: process.env.MASTER_KEY || 'password',
    databaseURI: process.env.DATABASE_URI || 'mongodb://username:password@[servername].documents.azure.com:10255/[dbname]?ssl=true&replicaSet=globaldb',
    serverURL: (process.env.SERVER_URL || 'https://[webappname].azurewebsites.net') + '/parse',
  },
  dashboard: {
    apps: [
      {
        serverURL: (process.env.SERVER_URL || 'https://[webappname].azurewebsites.net') + '/parse',
        appId: process.env.APP_ID || 'username',
        masterKey: process.env.MASTER_KEY || 'password',
        appName: 'Parse Server Azure' 
      }
    ],
    users: [ 
      { 
        user: process.env.APP_ID || 'username',
        pass: process.env.MASTER_KEY || 'password',
      } 
    ] 
  },
  storage: {},
  push: {}
}