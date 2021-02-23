# MTX - Hackolympics 

## Problem Statement - 3 Documentation

### Detailed Aprroach:

**Integrating with IFTTT**:




**Public API Endpoint**:
* The server is coded up inside a file named **server.js** present in the directory Server.
* IFTTT upon a request on Google Assistant hits the public API endpoint which is hosted here: http://hackolymp.herokuapp.com/runCommand?command=[Specify the command here].
* The public endpoint will the send a message to the locally running client over a Socket.io connection
* Socket.io provides real time connectivity between the public API and the local client.

**Local Client**:
* The local client is coded up inside a file named **client.js** present in the directory Client.
* The local client is responsible for running commands that it has recieved from the endpoint over a Socket.io connection
* By default the client passes on the command to the Mini SDK that we have created.
* This can be modified to include any general SDK like kubectl or Google Cloud

**Mini SDK**:
* The local client is coded up inside a file named **cmd.js** present in the directory Client.
* The Mini SDK supports a simple 'print' function by default. This can be extended as per need
* Upon supplying commands other than the predefined ones(print in this case), it will try to run the command  on the shell/command prompt.
* The output is displayed on the screen.
