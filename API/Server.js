const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

const corsOptions = {
	// origin: 'http://localhost:3000',
	credentials: true,
	optionSuccessStatus: 200
};
app.use(cors(corsOptions));

const Port = process.env.PORT ||2000;

//Imports
const Auth = require('./routes/auth');
const UserRoute = require('./routes/user');

dotenv.config();

app.use(express.json());

mongoose
	.connect(process.env.MONGODB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: false,
		// useFindAndModify: false
	})
	.then(() => console.log('Database Connected Successfully !'))
	.catch((err) => console.log(err));

//Import initialization
app.use('/api/Auth', Auth);
app.use('/api/User', UserRoute);

app.listen(Port, () => console.log(`Server Started on port ${Port}`));
