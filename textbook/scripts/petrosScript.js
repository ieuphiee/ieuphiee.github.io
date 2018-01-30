// JavaScript Document for petrology textbook by john brady
$(document).ready(function(){
//-------------------------------------------------accordion menu sliding
	$("#menu h3").click(function(){
		$("#menu ul ul").slideUp();	//close all sections
		if($(this).next().is(":hidden")){	//open the selected one
			$(this).next().slideDown();
		}
	}); //End "#menu h3" click function
//-------------------------------------------------accordion menu2 sliding
	$("#menu2 h3").click(function(){
		$("#menu2 ul ul").slideUp();	//close all sections
		if($(this).next().is(":hidden")){	//open the selected one
			$(this).next().slideDown();
		}
	});  //End "#menu2 h3" click function
//	$("#sections").slideDown();	
//	$("#section43").style.color = "Red";  Why doesn't this work?!!
//--------------------------------------------------------------------------
}); //End ready functions()
//--------------------------------------------------------------------------
		
//Script to open a new page in same window
function pageOpen(Number) {
    window.open("page" + Number +".php","_self");
};

//Script for large version of image to open using a button
function figOpen(Number) {
    window.open("figure" + Number +".php","_self");
};

//Script for banner caption to appear and disapper by pressing button
function captionBShow(Number){
	$("#caption"+Number).toggle();
};

//Script for caption to appear and disapper by pressing button
function captionShow(Number){
	$("#caption"+Number).toggle();
};

//Script to go back one page
function goHistory(x) {
	window.history.go(x);
};

//Script to play the audio for pronunciation---------------------------------
function speakIt(Number){
	document.getElementById("speak"+Number).play();
};


//Script to play/pause the audio for figures---------------------------------
function audioPlay(el,Number){
	var audio = document.getElementById("audio"+Number)
	if(el.className != "pause")
	{
		el.className = "pause";
		el.innerHTML = "Audio Play";
		audio.pause();
	}
	else if(el.className == "pause")
	{
		el.className = "play";
		el.innerHTML = "Audio Pause";
		audio.play();
	}
	return false;
};	//End audioPlay function

//----------------------------------------------------------------------------
//Script toggles the ppl and xpl images for any figure properly named --------
function toggleXplPpl(el,Number){
	var image = document.getElementById("figure" + Number)
	if(el.className != "xpl")
	{
		el.className = "xpl";
		el.innerHTML = "PPL";
		image.src="figures/figure" + Number + "_xpl.jpg";
	}
	else if(el.className == "xpl")
	{
		el.className = "ppl";
		el.innerHTML = "XPL";
		image.src="figures/figure" + Number + "_ppl.jpg"
	}
	return false;
};	//End toggleXplPpl function

//--------------------------------------------------------------------------
//Script for image to exchange with another by pressing button
function toggleImage(el,Number,tag){
	var image = document.getElementById("figure" + Number)
	if(el.classname != "hide")
	{
		el.classname = "hide";
		el.innerHTML = ("Hide " + tag);
		image.src="figures/figure" + Number + "B.png";
	}
	else if(el.classname == "hide")
	{
		el.classname = "show";
		el.innerHTML = ("Show " + tag);
		image.src="figures/figure" + Number + ".png"
	}
	return false;
};	//End toggleImage function

//--------------------------------------------------------------------------
//Script for svg object to exchange with another by pressing button
function toggleObjectSVG(el,Number,tag){
	var image = document.getElementById("figure" + Number)
	if(el.classname != "hide")
	{
		el.classname = "hide";
		el.innerHTML = ("Hide " + tag);
		image.data="figures/figure" + Number + "B.svg";
	}
	else if(el.classname == "hide")
	{
		el.classname = "show";
		el.innerHTML = ("Show " + tag);
		image.data="figures/figure" + Number + ".svg"
	}
	return false;
};	//End toggleImage function

//--------------------------------------------------------------------------
//Script for image to be replaced with another by pressing button
function replaceImage(id,newSrc){
	document.getElementById(id).src = newSrc;
};  //End replaceImage function
//--------------------------------------------------------------------------
function roundNumber(num, places) {
    return Math.round(num * Math.pow(10, places)) / Math.pow(10, places);
};
//--------------------------------------------------------------------------
