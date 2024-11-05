const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.use('/src', express.static(path.join(__dirname, 'src')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});


app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
