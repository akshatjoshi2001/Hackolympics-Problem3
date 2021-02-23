/*

    This is our mini SDK. It can run predefined commands. If the entered command is not predefined, it will run that command on the shell/terminal
*/



const {exec} = require("child_process")

processCommand(process.argv[2],process.argv.slice(3,process.argv.length))


// Function to process each command recieved
function processCommand(command,args)
{
    
    if(command.toLowerCase()=="print")
    {

        // Building the  string to be printed on screen
       string = args.join(" ")
       
        console.log(string)

    }

    
   
    else  // If the command is not predefined it will be running the asked command on shell
    {
        // Building the command string to be executed.
        str = command + " " + args.join(" ")
        console.log("Command asked to be run: " + str)
        exec(str,(err,out)=>{
            if(!err)
            {
             console.log(out)  // Print the output of the command if no errors are found.
            }
            else
            {
                console.log("Error:" + err) // In case of error, show the error
            }
    
        })
    }

}



