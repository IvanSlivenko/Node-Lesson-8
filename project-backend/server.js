const mongoose = require("mongoose");



const app = require('./app');

// console.log(process.env.DB_HOST);



// ми додали ключ DB_HOST зі значенням === mongodb+srv://ivan8822:iv07092006sl@cluster0.5m4an.mongodb.net/my-movies?retryWrites=true&w=majority
// в render environment
const { DB_HOST, PORT = 3000 } = process.env;


  // зв'язуємось з базою данних !!!
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    // закриваємо всі запущені процеси
    process.exit(1);
  });


