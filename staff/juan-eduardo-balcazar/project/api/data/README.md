# MongoDB

to initialize mongodb server

```sh
🐖 pwd
/Users/manuelbarzi/workspace/mongodb-macos-x86_64-8.0.3
🐖 mkdir data
🐖 ./bin/mongod --dbpath data
```

to connect to mongodb server with mongosh

```sh
🐖 pwd
/Users/manuelbarzi/workspace/mongosh-2.3.3-darwin-arm64
🐖 ./bin/mongosh
```
to see databases

```sh
test> show databases
admin   40.00 KiB
config  12.00 KiB
local   40.00 KiB
test> show dbs
admin   40.00 KiB
config  12.00 KiB
local   40.00 KiB
test> 
```

to see collections

```sh
test> show collections
```

to insert a document in a collection

```sh
test> db.users.insertOne({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('6740ef141bbda32c13400b86')
}
test> db.users.insertOne({ name: 'Campa Nilla', email: 'campa@nilla.com', username: 'campanilla', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('6740ef5f1bbda32c13400b87')
}
test> 
```

to see documents in a collection

```sh
test> db.users.find()
[
  {
    _id: ObjectId('6740ef141bbda32c13400b86'),
    name: 'Pepito Grillo',
    email: 'pepito@grillo.com',
    username: 'pepitogrillo',
    password: '123123123'
  },
  {
    _id: ObjectId('6740ef5f1bbda32c13400b87'),
    name: 'Campa Nilla',
    email: 'campa@nilla.com',
    username: 'campanilla',
    password: '123123123'
  }
]
test> 
```

same for another collection

```sh
test> db.infos.insertOne({ author:  ObjectId('6740ef141bbda32c13400b86'), image: 'https://static.wikia.nocookie.net/disneyypixar/images/4/42/Jiminy_KH3.png/revision/latest?cb=20181216183245&path-prefix=es', text: 'hi! this is me!', date: ISODate() })
{
  acknowledged: true,
  insertedId: ObjectId('6740f0201bbda32c13400b88')
}
test> db.infos.insertOne({ author:  ObjectId('6740ef5f1bbda32c13400b87'), image: 'https://static.wikia.nocookie.net/dhadas/images/b/b8/Tinkerbell.jpg/revision/latest/scale-to-width-down/238?cb=20101123010642&path-prefix=es', text: 'hello there!', date: ISODate() })
{
  acknowledged: true,
  insertedId: ObjectId('6740f0741bbda32c13400b89')
}
test> db.infos.find()
[
  {
    _id: ObjectId('6740f0201bbda32c13400b88'),
    author: ObjectId('6740ef141bbda32c13400b86'),
    image: 'https://static.wikia.nocookie.net/disneyypixar/images/4/42/Jiminy_KH3.png/revision/latest?cb=20181216183245&path-prefix=es',
    text: 'hi! this is me!',
    date: ISODate('2024-11-22T20:57:04.833Z')
  },
  {
    _id: ObjectId('6740f0741bbda32c13400b89'),
    author: ObjectId('6740ef5f1bbda32c13400b87'),
    image: 'https://static.wikia.nocookie.net/dhadas/images/b/b8/Tinkerbell.jpg/revision/latest/scale-to-width-down/238?cb=20101123010642&path-prefix=es',
    text: 'hello there!',
    date: ISODate('2024-11-22T20:58:28.553Z')
  }
]
test> 
```
