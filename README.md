![logo](https://user-images.githubusercontent.com/21247634/36923254-ae754c9c-1e90-11e8-8135-c50253e77d85.jpeg)

### Important Links

1. **Github Project:-**  http://github.com/anishsamant/IPLAlexaSkill
2. **.apk file:-** [IPLAlexaSkill](https://drive.google.com/drive/folders/1cqYim39u2zC1iGJBKR_SiDwv3Senu1X6)  
   **(keep coming back for new version. Current: 03/03/2018)**

### ABOUT THE APP

The app is based on the custom alexa skills that have been created on scanning and querying the IPL dataset (https://www.kaggle.com/manasgarg/ipl/data). The dataset consists of statistical analysis of all the matches ever played in the IPL upto season 10 (2017). This mobile app shows a <b>list of defined intents, their utterances and the respective response that alexa will give</b>. Currently there are 5 intents defined and the app provides the valid utterances for each one of them. This app works as a guide for the user to effectively interact with the alexa enabled device.<p>
	
### Intents
Currently 5 intents have been defined:

1. Welcome Message
2. About IPL
3. Total Matches Played
4. Season Winner
5. Exit message
	
### Steps to set up development environment

	-- Follow the steps as mentioned in "Getting Started" section of react-native website in the "Build with native code" tab
	-- https://facebook.github.io/react-native/docs/getting-started.html

### To Clone Repository and Running on device/emulator

```
$ git clone https://github.com/anishsamant/IPLAlexaSkill	
$ cd IPLAlexaSkill
$ npm install
$ # (for android)
$ react-native run-android 
        OR
$ # (for ios)
$ react-native run-ios
$ # This will run the app on your connected emulator or development device
```
	
### Screenshots

![home](https://user-images.githubusercontent.com/21247634/36922877-6bf3e7f8-1e8f-11e8-933a-450e47d12e25.png)
&emsp;
![intents](https://user-images.githubusercontent.com/21247634/36922914-8d67acee-1e8f-11e8-8a1a-2b13c84696f6.png)
&emsp;
![welcome](https://user-images.githubusercontent.com/21247634/36922918-8e44fb1c-1e8f-11e8-9414-f6d4ec641870.png)  
&nbsp;  
&nbsp;  
![about](https://user-images.githubusercontent.com/21247634/36922919-8e777060-1e8f-11e8-9c10-37c57b18817d.png)
&emsp;
![totalmatches](https://user-images.githubusercontent.com/21247634/36922917-8e11fae6-1e8f-11e8-88da-18bcb74c69ab.png)
&emsp;
![seasonwinner](https://user-images.githubusercontent.com/21247634/36922916-8ddabb8a-1e8f-11e8-9a0b-91884e9a9f70.png)

	
### Internal Implementation

1. The skill is invoked by saying **"Alexa, start IPL search"**.
2. If the asked question matches with the defined utterances, Alexa will give the respective response.
3. What is Indian Premier League  
Response: The Indian Premier League (IPL), officially Vivo Indian Premier League for sponsorship reasons, is a professional Twenty20 cricket league in India contested during April and May of every year by teams representing Indian cities.
	
### Support

&emsp;If you happen to get stuck anywhere, please mail us at <anish.samant97@gmail.com> or <saurabh.friday@gmail.com>. Alternatively, if you find a bug, you can raise an issue [here](https://github.com/Saurabh3333/Alexa-IPL-Skill/issues).
