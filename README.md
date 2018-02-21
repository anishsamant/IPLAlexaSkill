# Log of utterances and responses for custom alexa skill

<h3>ABOUT THE APP</h3><p>
&emsp;The app is based on the custom alexa skills that have been created on scanning and querying the IPL dataset (https://www.kaggle.com/manasgarg/ipl/data). The dataset consists of statistical analysis of all the matches ever played in the IPL upto season 10 (2017). This mobile app shows a <b>list of defined intents, their utterances and the respective response that alexa will give</b>. Currently there are 5 intents defined and the app provides the valid utterances for each one of them. This app works as a guide for the user to effectively interact with the alexa enabled device.<p>
	
<h3>Intents</h3><p>
&emsp;Currently 5 intents have been defined:<p>
<ol>
	<li>About IPL
	<li>Total Matches Played
	<li>Match Summary
	<li>Match Result
	<li>Man of the match
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

![home](https://user-images.githubusercontent.com/21247634/36489665-9dfe002a-174c-11e8-9583-eecb64133579.png)
&emsp;
![intents](https://user-images.githubusercontent.com/21247634/36489788-d6549a2e-174c-11e8-8a6d-3b37182cdca8.png)
&emsp;
![aboutipl](https://user-images.githubusercontent.com/21247634/36489787-d61e3a24-174c-11e8-95b1-acf5d29b5486.png)
<br><br>
![totalmatches](https://user-images.githubusercontent.com/21247634/36489793-d734d300-174c-11e8-9f96-7aba00591c0a.png)
&emsp;
![manofmatch](https://user-images.githubusercontent.com/21247634/36489789-d688a918-174c-11e8-9de7-1b0f95fac302.png)
&emsp;
![matchresult](https://user-images.githubusercontent.com/21247634/36489790-d6bc3742-174c-11e8-8c7f-31b63f596b5c.png)

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
&emsp;If you happen to get stuck anywhere, please mail me at anish.samant97@gmail.com. Alternatively, if you find a bug, you can raise an issue [here](https://github.com/anishsamant/IPLAlexaSkill/issues).
