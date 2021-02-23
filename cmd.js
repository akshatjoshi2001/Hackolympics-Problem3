

processCommand(process.argv[2],process.argv.slice(3,process.argv.length))



function processCommand(command,args)
{
    
    if(command.toLowerCase()=="print")
    {
       string = ""
        for(i in args)
        {
            
                string += args[i]+" "
        
        }
        console.log(string)

    }
    else if(command.toLowerCase()=="run")
    {
        console.log("running " + args)
    }
    else
    {
        console.log("Unrecognised command")
    }

}



