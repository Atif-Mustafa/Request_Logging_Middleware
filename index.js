const express = require('express');
const app = express();


const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - IP: ${req.ip}`);
    next();
}

const infoMiddleware = (req, res, next) => {
    console.info(`[INFO] ${req.method} ${req.url}`);
    next();
}

const debugMiddleware = (req, res, next) => {
    console.debug(`[DEBUG] ${req.method} ${req.url} - IP: ${req.ip}, User-Agent: ${req.get('User-Agent')}`);
    next();
}
app.use(requestLogger);

app.use(infoMiddleware);

app.use(debugMiddleware)


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(5000, () => {
    console.log('server is up and listening at port 5000')
})