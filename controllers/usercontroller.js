const Log=require('../middleware/logging');
const getUsers=async(req,res)=>{ await Log(
    "backend",
    "info",
    "controller",
    "Fetching users"
    );
    res.send("Users fetched");
};
module.exports={getUsers};