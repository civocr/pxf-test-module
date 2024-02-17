const mongoose = require('mongoose');

process.stdin.resume();//so the program will not close instantly

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);

  // JZdndkX4LXiLwzpR - backend
  // r0ry9MhrkH9VaKBh - jason
  //console.log('connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}