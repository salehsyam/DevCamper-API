const dotenv = require('dotenv');
const colors = require('colors');
dotenv.config({ path: './src/config/config.env' });

const app = require('./app.js');


const connectDB = require('./config/db');



port = process.env.PORT || 3000;


connectDB();

async function main() {
  const server= app.listen(port, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow
        .bold
    );
  });

  // Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
// server.close(() => process.exit(1));
});

}

main();

