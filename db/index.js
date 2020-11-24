const mongoose = require('mongoose');
// mongodb+srv://m0moooZ:<password>@react-blog.pf36a.mongodb.net/<dbname>?retryWrites=true&w=majority
// 'mongodb+srv://m0moooZ:momoftw1!@react-blog.pf36a.mongodb.net/github?retryWrites=true&w=majority'
const db = mongoose.connect('mongodb+srv://m0moooZ:momoftw1!@react-blog.pf36a.mongodb.net/ameedToDo?retryWrites=true&w=majority' ,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  module.exports = db; 