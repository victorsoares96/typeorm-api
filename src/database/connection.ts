import { createConnection } from 'typeorm'

createConnection()
  .then(() => console.log('📦 Successfully connected with database'))
  .catch((reason) => console.log(reason))
