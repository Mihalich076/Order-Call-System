var Sequelize = require('sequelize');
require("dotenv/config");
var sequelize = new Sequelize(process.env.DB, process.env.DB_LOGIN, process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql"
});

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,

});

var Playlist = sequelize.define('playlist', {
  src: Sequelize.STRING,
  timer:Sequelize.INTEGER,
  checked:Sequelize.BOOLEAN,
  sort:{type:Sequelize.INTEGER,}


});
var Gates = sequelize.define('gates', {
  id_:{type:Sequelize.INTEGER},
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  checked:Sequelize.BOOLEAN,

});


var Setting = sequelize.define('setting', {
  name: Sequelize.STRING,
  value: Sequelize.STRING,


});
User.count({ where: {username: 'admin'} }).then(function(count){
  if (count != 0) {
    console.log('Author already exists')
  //assuming you want it to keep looping, if not use callback(new Error("Author already exists"))
  } else {
    console.log('Creating author...')
    User.create({
      username: 'admin', password: 'admin'
    })
  }
})



// if (!User.findOne({ where: { username: 'admin' }})){
// User.create({
//     username: 'admin', password: 'admin'
//   });
// }

// sequelize.sync({ }).then(() => {

  // User.create({
  //   username: 'admin', password: 'admin'
  // });

  // Setting.create({
  //   name: "marque", value: "",
  // })
  // Setting.create({
  //   name: "OrderSound", value: "50",
  // })
  // Setting.create({
  //   name: "PlayerSound", value: "50",
  // })
  // Setting.create({
  //   name: "delete_order_timer", value: "10",
  // })
  // Gates.create({
  //  id_:1, name: "W1",checked:true,
  // })
  // Gates.create({
  //   id_:2, name: "W2",checked:true,
  // })
  // Gates.create({
  //   id_:3, name: "W3",checked:true,
  //  })
  //  Gates.create({
  //    id_:4, name: "W4",checked:true,
  //  })
  //  Gates.create({
  //   id_:5, name: "W5",checked:true,
  //  })
  
  // Playlist.create({
  //   src:'/images/download.jpg',timer:5, checked:true, sort:1
  // })
  // Playlist.create({
  //   src:'/videos/Google Pay- Camping Trip.mp4',timer:5, checked:true, sort:2
  // })
  // Playlist.create({
  //   src:'http://mcdonalds.md/',timer:5, checked:true, sort:3
  // })
  // Playlist.create({
  //   src:'/images/thumb-1920-411820.jpg',timer:5, checked:true, sort:4
  // })
  
  // Playlist.create({
  //   src:'https://www.andys.md/',timer:5, checked:true, sort:6
  // })
  // Playlist.create({
  //   src:'/videos/Introducing Microsoft Surface Go.mp4',timer:5, checked:true, sort:5
  // })
  // Playlist.create({
  //   src:'/images/ExoticHDWallpapers.jpg',timer:5, checked:true, sort:7
  // })
  // Playlist.create({
  //   src:'/videos/Meet iPhone X — Apple.mp4',timer:5, checked:true, sort:8
  // })
  // Playlist.create({
  //   src:'https://laplacinte.md/',timer:5, checked:true, sort:9
  //  })
// });

module.exports = {
  User, Setting, Playlist, Gates,sequelize
};