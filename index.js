const http=require('http');
const axios=require('axios');
const port=3000;
const server=http.createServer(async (req,res)=>{
console.log('request has arrived')
    const codingApi= await axios.get('https://api.codingninjas.com/api/v3/event_tags')
    console.log(codingApi.data.data)

    // res.setHeader('Content-type','apllication/json')
    res.end(JSON.stringify(codingApi.data.data))
})
server.listen(port,()=>console.log(`Server is listening at port:${port}`));