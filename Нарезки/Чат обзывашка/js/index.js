$(document).ready(function(){
	
	//TODO:
	//check for cross browser compatability
	//upload to my site isntead of codepen (sorry codepen ily)
	
	//simple method to give random item from array
	var randomItem = function(array){return array[Math.floor(Math.random() * array.length)];};
	
	var username = "Stranger";
		
	var kid = {
		WPM: 80,//typing speed aka time it takes to type response
		status: "not connected",
		maxAttention: 45,//how long in seconds before kid gets bored and leaves
		curAttentionSpan: this.maxAttention,//start at max
		curUsername: "Kid",
		usernames: [
			"xxC0DYxx",
			"0wNeD_KiD",
			"L0L0L0L0L",
			"xTR0LL_69x",
			"FUKZ_UR_M0M",
			"xSMOKExW33Dx",
			"xF4GS_R_G4Yx",
			"PuSsY_sLaYeR_69",
			"xXx420_N05C0P3_69xXx",
		],
		greetings: [
			"sup fag",
			"yo bitch",
			"ayy lmao",
			"sup bitch",
			"yo faggot",
			"sup gayboi",
			"what up faggot",
		],
		insults: [
			"no u",
			"ur gay",
			"faggot",
			"u mad???",
			"ur a fag",
			"u mad bro?",
			"u sound gay",
			"fuck u, fag",
			"fuck u bitch",
			"stfu ill pwn ur mom",
			"u like dick dont you",
			"i bet youd like that fgt",
			"thats what i thought gayboi",
			"are u a gay? u sound pretty gay",
			"get rekt fgt i 0wn3d ur moms pussy",
			"i bet u suck on ur daddys cock fag",
			"my dick is 9001 inches longer than urs",
			"guess who just got done fucking ur fat mom",
			"think of that one all by yourself? aw how cute",
			"that's what i said to ur mom when i was fucking her",
			"i bet it took u a long time to think of that one bitch",
			"AHAHAHAHAHSHAJKHSDAFHJKDFS sorry i was laughing at how retarded u r",
			"i bet ur a gay, you sound like you love taking it in the ass like a lil bitch",
			"what was that? couldnt hear u over the choking sound from all the cocks in ur mouth",
			"sorry i couldnt understand what u were saying cus u were too busy choking on my dick, fag",
		],
		copypastas: [
			"( ͡° ͜ʖ ͡°)",
			"( ͡°╭͜ʖ╮͡° ) DAY TUCKER NIGHT FUCKER ( ͡°╭͜ʖ╮͡° )",
			"(◕‿◕✿) Kawaii in the streets. Senpai in the sheets ( ͝° ͜ʖ͡°)",
			"Gr8 b8, m8. I rel8, str8 appreci8, and congratul8. I r8 this b8 an 8/8. Plz no h8, I'm str8 ir8.",
			"What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills.",
			"💯💯hOHoHOHHHHMYFUCkking GOFD 😂😂😂 DUDE 👌i AM 👉LITERALLY👈 iN 😂TEARS😂 RIGHT NOW BRo 👆👇👉👈 hHAHAHAHAHAHAHA ✌️👌👍 TAHT WA SO FUCKIN G FUNNY DUd 💧💧😅😂💦💧I cAN NOT FUCKING BELIEV how 💯FUNny 👌👍💯thta shit wa s 👀👍😆😂😂😅 I 👦 CAN NOT ❌ bRATHE 👃👄👃👄❌❌ / HELP ❗️I NEEd 👉👉 AN a m b u l a n c e🚑🚑 SSSooOOoo00000oOOOOOøøøØØØØØ fUCKING FUNY ✔️☑️💯💯1️⃣0️⃣0️⃣😆😆😂😂😅 shit man ❕💯💯🔥☝️👌damn",
		],
		afkAlmostGone: [
			"...?",
			"lol scared bro?",
			"whats wrong, scared?",
			"whered you go gay boy?",
			"having trouble thinking of a comeback there bud?",
			"if you dont respond in 2 seconds that means you are 100% gay",
		],
		afkGoodbyes: [
			"fuck this im out, pce",
			"alright im out, pce fag",
			"i gotta go now, cya faggot",
			"sorry gotta go get laid, cya bitch",
			"alright well im gonna go now, later fag",
			"alright guess ur not there anymore, cya fag",
			"aight since ur being such a pussy i gtg, later bitch",
		],
		triggers: [//something to keep in mind is that these are in order of importance
			[//so if two matches are triggered, the first one will be used
				new RegExp(".*(?:i (?:(?:got(?:ta| to))|have to) go|i'?m .*leav(?:e|ing)|bye+|cya|p(?:ea)?ce|gtg).*", 'gi'),
				[
					"bye fag",
					"cya loser",
					"cya gayboy",
					"lol k cya...",
					"yea ok pce fgt",
					"yea go ahead and leave pussy",
				]
			],
			[
				new RegExp(".*(?:(?:user)?name)[^?]*", 'gi'),
				[
					'at least my name is better than yours lil bitch',
					'my username is an acronym that stands for "i get all the pussy"',
					'at least my username is better than yours, ur name should be "gay boi"',
				]
			],
			[
				new RegExp('.*(?:old|\d ?y\/?o|y(?:ea)?rs? old|age|young).*', 'gi'),
				[
					"im 10 you fucking retard",
					"you dumb fag im actually 10",
					"actually im 10 u fucking faggot",
					"im actually 10yrs old so shut the fuck up",
				]
			],
			[
				new RegExp(".*(?:(?:yo)?u (?:are|r)|ur|you'?re)(?! not).*(?:retard|idiot|stupid|dumb).*", 'gi'),
				[
					"k...?",
					"look in a mirror dumb fuck",
					"hey news flash retard, look in a mirror",
					"u must be a retard for calling ME retarded, look in a mirror",
					"wow dude ur dumber than i am, i bet ur mom is typing all this for u",
				]
			],
		],
		reply: function(text){
			this.status = "typing";
			var kidName = this.curUsername;
			var kidWPM = this.WPM;
			var kidReply = "";
			var isCopyPasta = false;
			if(text !== undefined && text !== null && text !== ""){kidReply = text;}else{
				if($(".chatbox .messages-wrapper .you").length === 1){
					kidReply = randomItem(this.greetings);
				}else{
					var finalDecision = randomItem(this.insults);
					var lastUserMessage = $(".chatbox .message.you:last-child .text").text();
					var triggered = false;
					for(var i=0;i<this.triggers.length;i++){
						var curRegex = this.triggers[i][0];
						var randReply = randomItem(this.triggers[i][1]);
						if(lastUserMessage.match(curRegex)){
							console.log("TRIGGERED");
							triggered = true;
							finalDecision = randReply;
							break;
						}
					}
					if(Math.random() < 0.1 && !triggered){
						finalDecision = randomItem(this.copypastas);
						isCopyPasta = true;
					}
					kidReply = finalDecision;
				}
			}
			
			//function to simulate actual typing using WPM to estimate how long it'd take to type up a reply
			var sendReply = function(replyText, isPasta){
				setTimeout(function(){
					sendMsg(kidName, replyText);
					kid.status = "idle";
					$(".reply .typing").text("");
					console.log("done typing! took "+(replyText.length * (1000/((kidWPM * 6)/60)))+"ms to reply");
				}, isPasta?500:(replyText.length * (1000/((kidWPM * 6)/60))));
			};
			//function to delay response time (so kid doesnt start typing response instantly)
			setTimeout(function(){
				$(".reply .typing").text(kidName+" is typing...");
				console.log("typing");
				sendReply(kidReply, isCopyPasta);
			},(250+(Math.random()*5000)));
		},
	};
	
	//start attention span countdown
	var timerActive = false, almostAFK = false;
	var attentionTimer = function(){
		var timer = setInterval(function(){
			//console.log(kid.curAttentionSpan+" "+almostAFK);
			if(kid.curAttentionSpan > 0){
				if(kid.status === "idle"){kid.curAttentionSpan--;}
				if(!almostAFK && kid.curAttentionSpan <= kid.maxAttention - (kid.maxAttention / 2)){
					almostAFK = true;
					if(kid.status !== "typing"){kid.reply(randomItem(kid.afkAlmostGone));}
				}
			}else{
				if(kid.status !== "typing"){
					kid.reply(randomItem(kid.afkGoodbyes));
					kid.status = "disconnected";
					clearInterval(timer);
				}
			}
		}, 1000);
	};
	
	//function to add message to window, if who === username, it's your message, otherwise its the stranger
	var sendMsg = function(who, text){
		if(text === null || text === undefined || text === ""){return;}
		if($(".reply input.usermsg").attr("placeholder") != ""){
			$(".reply input.usermsg").attr("placeholder","");
		}
		var html = ''+
		'<div class="'+(who === username?"you":"them")+' message">'+
			'<div class="avatar"></div>'+
			'<div class="name">'+who+'</div>'+
			'<div class="text">'+text+'</div>'+
		'</div>';
		$(".chatbox .messages-wrapper").append($.parseHTML(html));
		$(".chatbox").scrollTop($(".chatbox .messages-wrapper").height());
		if(who === username){
			if(!timerActive){timerActive = true;attentionTimer();}
			kid.curAttentionSpan = kid.maxAttention;
			almostAFK = false;
			if(kid.status !== "typing"){kid.reply();}
			$(".reply input.usermsg").val("");
		}
	};
		
	//function to set initial username
	$(".setuser button").click(function(){
		var desiredName = $(".setuser .username").val();
		if(desiredName !== "" && desiredName !== null && desiredName !== undefined){
			username = desiredName;
			$(".setuser, .dim").fadeOut(100);
			setTimeout(function(){
				$(".messages-wrapper .status").text("Connected, say hello!");
				$(".reply input.usermsg").prop('disabled', false);
				kid.status = "idle";
				kid.curUsername = randomItem(kid.usernames);
			},(500+(Math.random()*1000)));
		}else{
			alert("Please enter a username.");
			$(".setuser input.username").focus();
		}
	});
	
	//send user's typed message when send button or enter key is pressed
	$(".reply input.usermsg").keydown(function(e){if(e.which === 13){sendMsg(username, $(this).val());}});
	$(".reply button.send").click(function(){sendMsg(username, $(".reply input.usermsg").val());$(".reply input.usermsg").focus();});
	
});