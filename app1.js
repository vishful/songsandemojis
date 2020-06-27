var images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 
                'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg', 
                'images/11.jpg', 'images/12.jpg', 'images/13.jpg', 'images/14.jpg', 'images/15.jpg'];


var image_titles = ['summertime sadness','boom clap','black or white','just dance','old town road', 'shape of you', 'senorita','love you like a love song',
                    'monster','baby','dna','tik tok','bad guy','love story','single ladies'];


var audios = ['audio2/ldr.mp3','audio2/boomclap.mp3','audio2/michael.mp3','audio2/gaga.mp3','audio2/oldtownroad.mp3',
                'audio2/ed.mp3','audio2/senorita.mp3','audio2/sel.mp3','audio2/monster.mp3','audio2/baby.mp3',
                'audio2/dna.mp3','audio2/kesha.mp3','audio2/badguy.mp3','audio2/ts.mp3','audio2/beyonce.mp3'];

var titles = ['Summertime Sadness by Lana Del Rey', 'Boom Clap by Charli XCX', 'Black Or White by Michael Jackson', 'Just Dance by Lady Gaga', 
            'Old Town Road by Lil Nas X ft. Billy Ray Cyrus', 'Shape Of You by Ed Sheeran', 'Senorita by Camila Cabello ft. Shawn Mendes', 
                'Love You Like A Love Song by Selena Gomez And The Scene', 'Monster by Eminem ft. Rihanna', 'Baby by Justin Bieber ft. Ludacris', 
                'DNA by BTS', 'Tik Tok by Kesha', 'bad guy by Billie Eilish', 'Love Story by Taylor Swift', 'Single Ladies by Beyoncé'];

var albums = ['albums2/summertime.png','albums2/boom.jpg','albums2/borw.png','albums2/gaga.jpg','albums2/old.jpg','albums2/shape.png', 
                'albums2/senorita.jpg','albums2/sel.jpg','albums2/monster.png','albums2/baby.jpg','albums2/dna.jpg','albums2/tiktok.jpg','albums2/bad.png',
                'albums2/ts.png','albums2/yonce.png'];


var max=9;
var min=0;



function disp() {
    var rand=Math.floor(Math.random()*(max-min+1)+min);
    return rand; 
    /*document.getElementsByClassName("results").style.display = "none";*/
}

var val;

function getVal() {
val=disp();
}

function picDispNow() {
    document.getElementById("myPicture").src=images[val];
}


function picDisp() {
    setTimeout(() =>document.getElementById("myPicture").src=images[val], 7000);
}

var score=0;
var count=0;


/*function playSounds( ) {
    document.getElementById('abc')=audios[val];
}*/



/*var guess = document.getElementById("inputText").value;*/


function decide() {
    if (document.getElementById("inputText").value==image_titles[val])
    {
        document.getElementById('abc').play();
        alert("You guessed right! This is "+ titles[val]);

        document.getElementById('lmn').src=audios[val];
        document.getElementById('lmn').play();
        setTimeout(() => document.getElementById('lmn').pause(), 7000);
        score=score+1;
        document.getElementById("myForm").reset();
        document.getElementById('gameScore').innerHTML = score;
        count=count+1;
        document.getElementById('gameAttempts').innerHTML = count;
        showAlbum();

    }
    else {
        document.getElementById('xyz').play();
        alert("You guessed wrong! This is "+ titles[val]);
        document.getElementById('lmn').src=audios[val];
        document.getElementById('lmn').play();
        setTimeout(() => document.getElementById('lmn').pause(), 7000);  
        document.getElementById("myForm").reset();
        count=count+1;
        document.getElementById('gameAttempts').innerHTML = count;
        showAlbum();
    }

    if(count==3 && score>=2){
        window.location.replace("congrats.html");
    }
    else if(count==3 && score!=2){
        window.location.replace("tryagain.html");
    }
}


function showAlbum() {
    document.getElementById("myPicture").src=albums[val];
}

/*function showTitles() {
    document.getElementById('deets').innerHTML='This is '+titles[val];   
    setTimeout(myFunction, 3000);
    clearTimeout(myVar);*/



/*var myVar=setInterval(showTitles, 3000);
clearInterval(myVar);

function hideTitles() {
    setInterval(document.getElementById('deets').style.display="none", 12000);
}*/


var mins = 10; 
 
		var secs = mins * 60; 

		function countdown() { 
			setTimeout('Decrement()', 60); 
		} 

		function Decrement() { 
			if (document.getElementById) { 
				minutes = document.getElementById("minutes"); 
				seconds = document.getElementById("seconds"); 

				if (seconds < 59) { 
					seconds.value = secs; 
				} 

				else { 
					minutes.value = getminutes(); 
					seconds.value = getseconds(); 
				} 
				if (mins < 1) { 
					minutes.style.color = "red"; 
					seconds.style.color = "red"; 
				} 
				if (mins < 0) { 
          
      if(count==3 && score>=2){
        window.location.replace("congrats.html");
      }
      else if(count==3 && score!=2){
        window.location.replace("tyagain.html");
      }
      else {
        window.location.replace("tryagain.html");
      }

					minutes.value = 0; 
					seconds.value = 0; 
				} 
				else { 
					secs--; 
					setTimeout('Decrement()', 1000); 
				} 
			} 
		} 

		function getminutes() { 
			mins = Math.floor(secs / 60); 
			return mins; 
		} 

		function getseconds() { 
			return secs - Math.round(mins * 60); 
		} 









