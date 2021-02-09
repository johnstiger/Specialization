const express = require('express')
const app = express();

app.use(express.static('./dist/angular-specialization'));
app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: './dist/angular-specialization/' })
});


app.listen(process.env.PORT || 8080)