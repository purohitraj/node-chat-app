const express = require('express');
const app = express();

const path = require('path');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
// app.get('/',(req,res)=>{
// 	res.send(publicPath+'/index.html')
// })
app.use(express.static(publicPath))

app.listen(port,() => {
	console.log(`Start Localhost at port ${port}`)
})