const app = require('./src/app');
const port = appPort(process.env.PORT || '5000');
function appPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}
app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})