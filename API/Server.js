const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send("Welcome to Login System Server running");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
