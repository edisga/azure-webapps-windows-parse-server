module.exports = {
  server: {
    appId: process.env.APP_ID || 'edison',
    masterKey: process.env.MASTER_KEY || 'mredison',
    databaseURI: process.env.DATABASE_URI || 'mongodb://edisga:xJEvdeLVKXh6ycOUtXZLD8TVdEoofh4D8n1HqYXP7rYtNzVkPq7j2l7iKkVPgwZ3UWeG9FPTm70A1DZKfUYt4Q==@edisga.documents.azure.com:10255/myparse?ssl=true&replicaSet=globaldb',
    serverURL: (process.env.SERVER_URL || 'https://edisga-parser.azurewebsites.net') + '/parse',
  },
  dashboard: {
    apps: [
      {
        serverURL: (process.env.SERVER_URL || 'https://edisga-parser.azurewebsites.net') + '/parse',
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