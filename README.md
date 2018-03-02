# Log of utterances and responses for custom alexa skill

![logo](https://user-images.githubusercontent.com/21247634/36923254-ae754c9c-1e90-11e8-8135-c50253e77d85.jpeg)

<h3>Go to http://github.com/anishsamant/IPLAlexaSkill to get the app</h3>
<p>
<h3>ABOUT THE APP</h3><p>
&emsp;The app is based on the custom alexa skills that have been created on scanning and querying the IPL dataset (https://www.kaggle.com/manasgarg/ipl/data). The dataset consists of statistical analysis of all the matches ever played in the IPL upto season 10 (2017). This mobile app shows a <b>list of defined intents, their utterances and the respective response that alexa will give</b>. Currently there are 5 intents defined and the app provides the valid utterances for each one of them. This app works as a guide for the user to effectively interact with the alexa enabled device.<p>
	
<h3>Intents</h3><p>
&emsp;Currently 5 intents have been defined:<p>
<ol>
	<li>Welcome Message
	<li>About IPL
	<li>Total Matches Played
	<li>Season Winner
	<li>Exit message
</ol>
<p>
	
<h3>Steps to set up development environment</h3>

	-- Follow the steps as mentioned in "Getting Started" section of react-native website in the "Build with native code" tab
	-- https://facebook.github.io/react-native/docs/getting-started.html

<h3>To Clone Repository and Running on device/emulator</h3>

	-- git clone https://github.com/anishsamant/IPLAlexaSkill	
	-- cd IPLAlexaSkill
	-- npm install (to install project dependencies)
	-- react-native run-android (for android)
			OR
	-- react-native run-ios (for ios)
	-- This will run the app on your connected emulator or development device
	
<h3>Screenshots</h3>
<br>

![home](https://user-images.githubusercontent.com/21247634/36922877-6bf3e7f8-1e8f-11e8-933a-450e47d12e25.png)
&emsp;
![intents](https://user-images.githubusercontent.com/21247634/36922914-8d67acee-1e8f-11e8-8a1a-2b13c84696f6.png)
&emsp;
![welcome](https://user-images.githubusercontent.com/21247634/36922918-8e44fb1c-1e8f-11e8-9414-f6d4ec641870.png)
<br><br>
![about](https://user-images.githubusercontent.com/21247634/36922919-8e777060-1e8f-11e8-9c10-37c57b18817d.png)
&emsp;
![totalmatches](https://user-images.githubusercontent.com/21247634/36922917-8e11fae6-1e8f-11e8-88da-18bcb74c69ab.png)
&emsp;
![seasonwinner](https://user-images.githubusercontent.com/21247634/36922916-8ddabb8a-1e8f-11e8-9a0b-91884e9a9f70.png)

<p>
	
<h3>Internal Implementation</h3>
<p>
1. The user has to start speaking with <b>"Alexa, start IPL search"</b> then follow it with the question.<br>
2. If the asked question matches with the defined utterances, Alexa will give the respective response.<br>
3. Eg: Alexa, start IPL search, What is Indian Premier League<br>
&emsp;Response: The Indian Premier League (IPL), officially Vivo Indian Premier League for sponsorship reasons, is a professional Twenty20 cricket league in India contested during April and May of every year by teams representing Indian cities.
<p>
	
<h3>Support</h3>
<p>
&emsp;If you happen to get stuck anywhere, please mail me at anish.samant97@gmail.com. Alternatively, if you find a bug, you can raise an issue at (https://www.github.com/anishsamant/IPLAlexaSkill/issues).
