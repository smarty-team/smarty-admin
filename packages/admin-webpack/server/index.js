const http = require('http');
const express = require('express');
const ecstatic = require('ecstatic');
const history = require('connect-history-api-fallback');
const path = require('path')
const app = express();

app.use(history());
app.use(ecstatic({ root: path.resolve(__dirname, '../dist') }));

http.createServer(app).listen(6565, () => {
    console.log('调试服务器启动 at: ', 6565)
});