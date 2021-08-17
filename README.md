# StoruPosting | MERN

A MERN stack app to post a story of our life.

## Demo

[Deployed on Heroku (where i kept the front-end & back-end togother)](https://story-post-byzak.herokuapp.com/)

## Built using

#### Front-end

- [ReactJS](https://reactjs.org/) - Frontend framework
- [React-Redux](https://react-redux.js.org/api/hooks) - For state management
- [Material-UI w/ lots of js styling for material library](https://material-ui.com/) - UI library
-[moment](https://momentjs.com/docs/) -js library to manipulate dates
-[react-file-base64](https://www.npmjs.com/package/react-file-base64)- React Component for Converting Files to base64

#### Back-end

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Express.js](https://expressjs.com/) - Node.js framework, makes process of building APIs easier & faster
- [MongoDB](https://www.mongodb.com/) - Database to store document-based data
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file
-[body-parser](https://www.npmjs.com/package/body-parser)- Node.js body parsing middleware
-[cors](https://www.npmjs.com/package/cors)- package for providing a Connect/Express middleware


## Features

-add or delete a post
-edit a post


## Usage

#### Env variable:

Create a config.env file in ../server/config directory and add the following:

```
MONGODB_URI = "Your Mongo URI"
PORT = 5000
NODE_ENV="development or production"

```

#### Client:

Open client/package.json & change "proxy" to a port that suite you in case you have changed the port in server side 
```
cd client
npm install
npm start
```

#### Server:

Note: Make sure that you have installed 'nodemon' as global package.

```
cd server
npm install
npm run dev
```
