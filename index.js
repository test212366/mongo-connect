const {MongoClient} = require('mongodb')
const client = new MongoClient('mongodb+srv://qwerty:qwerty123@cluster0.8f0lc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const start = async () => {
    try {
        await client.connect()
        await client.db().createCollection('users')
        const users = client.db().collection('users')
          await users.insertOne({
            name: 'nikita'
        })
        const user = await users.findOne({name: 'nikita'})
        console.log(user)
        console.log('start serve')
    }catch (e) {
        console.log(e)
    }
}
start()