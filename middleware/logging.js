const axios = require('axios');
const getAccessToken = require('./auth');
async function Log(stack,level,pack,message){
try{


const token = await getAccessToken();

if(!token){

console.log("No token");

return;

}




const response = await axios.post(

'http://4.224.186.213/evaluation-service/logs',

{

stack,
level,
package:pack,
message


},

{

headers:{


Authorization:`Bearer ${token}`


}

}


);





console.log(response.data);



}


catch(err){


console.log(

err.response?.data ||
err.message
);
}

}
module.exports=Log;