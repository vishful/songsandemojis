var images = ['images2/img1.jpg','images2/img2.jpg','images2/img3.jpg','images2/img4.jpg','images2/img5.jpg','images2/img6.jpg','images2/img7.jpg','images2/img8.jpg','images2/img9.jpg','images2/img10.jpg','images2/img11.jpg','images2/img12.jpg','images2/img13.jpg','images2/img14.jpg','images2/img15.jpg'];
var image_titles = ['royals','poker face','blank space','7 rings','electra heart', 'crybaby', 'call me maybe','roar',
                    'pills n potions','blue jeans','ship to wreck','watermelon sugar','circus','dancing queen','moon river'];
var audios = ['audio/royals.mp3','audio/poker.mp3','audio/blank.mp3','audio/7rings.mp3','audio/electra.mp3',
                'audio/crybaby.mp3','audio/call.mp3','audio/roar.mp3','audio/pills.mp3','audio/bluejeans.mp3',
                'audio/ship.mp3','audio/harry.mp3','audio/circus.mp3','audio/abba.mp3','audio/moon.mp3'];

var titles = ['Royals by Lorde','Poker Face by Lady Gaga', 'Blank Space by Taylor Swift', '7 rings by Ariana Grande', 'Electra Heart by Marina',
                'Crybaby by Melanie Martinez', 'Call Me Maybe by Carly Rae Jepsen', 'Roar by Katy Perry', 'Pills N Potions by Nicki Minaj',
                'Blue Jeans by Lana Del Rey', 'Ship To Wreck by Florence + The Machine', 'Watermelon Sugar by Harry Styles', 'Circus by Britney Spears',
                 'Dancing Queen by Abba', 'Moon River by Audrey Hepburn'];

var albums = ['albums/royals.png','albums/gaga.jpg','albums/blank.png','albums/7rings.png','albums/electra.png','albums/crybaby.png', 
                'albums/call.png','albums/roar.png','albums/pills.jpg','albums/btd.jpg','albums/ship.png','albums/sugar.jpg','albums/circus.png',
                'albums/abba.jpeg','albums/audrey.jpeg'];


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









