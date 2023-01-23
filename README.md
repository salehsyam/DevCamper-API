# DevCamper API

> Backend API for DevCamper application, which is a bootcamp directory website

# :computer: Technologies
This project was made using the follow technologies:
<ul>
<li><a href="https://nodejs.org/en/">Node.js</a></li>
<li><a href="https://expressjs.com/">Express</a></li>
<li><a href="https://www.mongodb.com/">Mongodb</a></li>
<li><a href="https://www.npmjs.com/package/express-handlebars">Express Handlebars</a></li>
</ul> 



## Install 

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

