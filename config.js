module.exports = {
  server: {
    appId: process.env.APP_ID || 'egachi',
    masterKey: process.env.MASTER_KEY || 'Passw0rd123456',
    databaseURI: process.env.DATABASE_URI || 'mongodb://edisga:toZpQmJKtCJo8Fq3e9nqRg5XVYamfGoV6ZaH01AWzWLTptlj81Rmcz7YufFhWMaJVLyOhG9JUIyORXhzVNbcvQ==@edisga.documents.azure.com:10255/dev?ssl=true&replicaSet=globaldb',
    serverURL: (process.env.SERVER_URL || 'http://edisga-parse.azurewebsites.net') + '/parse',
  },
  dashboard: {},
  storage: {},
  push: {}
}
