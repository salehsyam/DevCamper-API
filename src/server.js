const dotenv = require('dotenv');
const colors = require('colors');

const app = require('./app.js');

app.get('/', (req, res) => {
  res.json({success:true , data: {name:'SAleh'} });
});

dotenv.config({ path: './src/config/config.env' });
port = process.env.PORT || 3000;

async function main() {
  app.listen(port, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow
        .bold
    );
  });

  
}

main();
