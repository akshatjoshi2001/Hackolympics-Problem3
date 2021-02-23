# MTX - Hackolympics 

## Problem Statement - 3 Documentation

## Overview
The presented solution aims at creating a voice based command system which can be used for easily managing cloud computing systems.

## Why choose this problem statement over the others?
Typing commands on a command line is a hassle. Managing large scale distributed systems even more. We felt that we can make the process a bit easier using a highly flexible  Google Assistant based command system. 



## Solution:
![alt text](https://github.com/akshatjoshi2001/Hackolympics-Problem3/blob/master/solution.png?raw=true)
IFTTT is used for accepting commands from google assistant which is then sent to a public endpoint which pushes the command to a local client which will then execute the command.


## Detailed Technical Approach:

**Integrating with IFTTT**:

* An applet on IFTTT is created which on recieving a command from Google Assistant will call a public API Endpoint.
* Note that this applet is not public. Hence for testing purposes one will have to manually create the applet.

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

## **Video Demonstration with explanation of technical details:**
* The video with  demonstration, explanation of features and technical details is here: https://drive.google.com/file/d/1d-mrXYP37CJTSuqECvjlK08azQp9kcTx/view?usp=sharing
