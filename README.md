# Note
This tool was originally made by someone I can't find anymore. Lots of issues weren't being taken care of so I took care of things.

<h1 align="center">[Discord] - Fake Verification Bot With QR CODE

</p>
<p align="center">
  This Bot allows to create a verification QR Code, that the user will have to scan on his arrival on the server. Once scanned, you will get his information including his Token.
</p>


## Disclaimer

|Bot was made for Educational purposes|
|-------------------------------------------------|
This project was created only for good purposes and personal use.
By using this Bot, you agree that you hold responsibility and accountability of any consequences caused by your actions.

## Features

- Async QR Code Management
- Using Websockets (no browser used)
- Personal QR Code (visible only to the person passing the verification)
- Saves the information in a json file
- Can gives a role to the user after his verification
- Can send a message to all the user's DMs + all user's Friend
- Possibility to define a logs channel (no webhook required)
- Easy to use + Intuitive

## How To Setup/Install

#### First of all please set your informations in the config.json file!
```json
{
    "botToken": "BOT-TOKEN-HERE", #For more information, read below
    "logs_channel_id": "LOGS-CHANNEL-ID-HERE", #ID of the channel to which the bot logs will be sent
    
    "prefix": "PREFIX-HERE",
    "command_name": "COMMAND-NAME-HERE",
    
    "give_role": false, #Can take the value: true or false
    "role_name": "ROLE-NAME-HERE", #Name of the role you want to give to the user after scanning the QR Code
    
    "mass_dm": 0, #Can take the value: 0 (Disable), 1 (current user's dms), 2 (user's friends), 3 (Current DMs + Friends)
    "message": "MESSAGE-HERE" #Message you want to send to all user's DMs after scanning the QR code
}
```
#### Set up and invite your Bot.
- Create a bot on the [Discord Developer page](https://discord.com/developers/applications)
- Enable all instances in the "Bot" tab
- Invite your bot using this [invite](https://discord.com/api/oauth2/authorize?client_id=CLIENTID&permissions=8&scope=applications.commands%20bot) (replace CLIENTID by the ID of your Bot)

#### 1st・Installation (Automated installation - Windows)
```
Launch the setup.bat file. A new file (start_tool.bat) will be created. You will only have to launch it.
```

#### 2nd・Installation (Linux installation)
Use the following command :
```
pip3 install -r requirements.txt
```

Then do 
```
python3 main.py
```


## Credits
Many thanks to [RuslanUC](https://github.com/RuslanUC) for [RemoteAuthClient](https://github.com/RuslanUC/RemoteAuthClient) and [TurfuFrogy](https://github.com/TurfuFrogy) for developing the database part of the tool.

## Credits V2
No thanks to the original coder who did an EXTREMELY POOR job at keeping this code up-to-date.
