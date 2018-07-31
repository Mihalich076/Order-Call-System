var db = require("../db");


module.exports = {
	create: function (req, res) {
		db.sequelize.sync({force:true }).then(() => {
			db.User.create({
    username: 'admin', password: 'admin'
  });

  db.Setting.create({
    name: "marque", value: "Съешь же ещё этих мягких французских булок, да выпей чаю",
  })
  db.Setting.create({
    name: "OrderSound", value: "50",
  })
  db.Setting.create({
    name: "PlayerSound", value: "50",
  })
  db.Setting.create({
    name: "delete_order_timer", value: "10",
  })
  db.Gates.create({
   id_:1, name: "W1",checked:true,
  })
  db.Gates.create({
    id_:2, name: "W2",checked:true,
  })
  db.Gates.create({
    id_:3, name: "W3",checked:true,
   })
   db.Gates.create({
     id_:4, name: "W4",checked:true,
   })
   db.Gates.create({
    id_:5, name: "W5",checked:true,
   })});
	},

};