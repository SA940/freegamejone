var myIndex = 0;
function mySlides() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(mySlides, 4000);    
}
	mySlides();	
	
	
	// Game request blink........
	    function blinker() {
        $('.blink').fadeOut(600).fadeIn(600);
    }
     
    setInterval(blinker, 1000);
	
	//Designer contact info..........
	function blinker1() {
        $('.blink1').fadeOut(1200).fadeIn(1200);
    }
     
    setInterval(blinker1, 2800);