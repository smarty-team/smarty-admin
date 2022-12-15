const http = require('http');
const express = require('express');
const ecstatic = require('ecstatic');
const history = require('connect-history-api-fallback');
const path = require('path')
const app = express();

app.use(history());
app.use(function (req, res, next) {
    console.log('url:', req.url)
    if (req.url === '/index.html') {
        res.set({
            'Cache-Control': 'public, max-age=0',
            'Expires': new Date(Date.now() + 0).toUTCString()
        });
    } else {
        res.set({
            'Cache-Control': 'public, max-age=31536000',
            'Expires': new Date(Date.now() + 31536000000).toUTCString()
        });
    }
    next();
});
app.use(
    express.static(path.resolve(__dirname, '../dist'),)
);

http.createServer(app).listen(6565, () => {
    console.log('调试服务器启动 at: ', 6565)
});