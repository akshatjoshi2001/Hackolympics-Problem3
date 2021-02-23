/*

   This is the local client which will listen for commands from our public endpoint.
   

*/

const ENDPOINT = "http://hackolymp.herokuapp.com/"; // The URL of our endpoint
const {exec} = require("child_process")
const io = require("socket.io-client");

const socket = io(ENDPOINT);



console.log("Local client running... \n Commands will be automatically executed when recieved")

// Ones command is recieved, send that command for execution to our mini SDK.
socket.on('command',(data)=>{

    sdkCommand = "node cmd.js "+data.command // Can be replaced with any other SDK like gcloud/kubectl
    exec(sdkCommand,(err,out)=>{

        if(!err)
            {
             console.log(out)  // Print the output of the command if no errors are found.
            }
            else
            {
                console.log("Error:" + err) // In case of error, show the error
            }
    
    })
})