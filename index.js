const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
dotenv.config();

mongoose
	.connect(process.env.MONGO_URI, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => {
		console.log('CONNECTED TO DB');
	})
	.catch(() => {
		console.log('CANNOT CONNECT TO DB');
	});

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user');

app.use('/api', userRoutes);

app.get('/api/countries', (req, res) => {
	fs.readFile('./countries.json', (err, data) => {
		if (err) {
			return res.status(400).json({
				error: err
			});
		}
		res.json(JSON.parse(data));
	});
});

console.log(path.join(__dirname, 'client', 'build'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client', 'build')));

	app.get('*', function(req, res) {
		const index = path.join(__dirname, 'build', 'index.html');
		res.sendFile(index);
	});
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Sevrer is running at port ${PORT}`);
});
