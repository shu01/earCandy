
$(window).scroll(function () {
  //set scroll position in session storage
  sessionStorage.scrollPos = $(window).scrollTop();
});
var init = function () {
   //return scroll position in session storage
   $(window).scrollTop(sessionStorage.scrollPos || 0)
};
window.onload = init;


window.onload=function(){
	//document.getElementById("loading").style.display = "none";
	document.getElementById("body").setAttribute("class", "bgd");
	 $(window).bind("mousewheel", function() {
    $("html, body").stop();
    });



	function clearSelection(){
		document.getElementById("body").setAttribute("class", "bgd");

		$("#instructions").css("opacity",1);

		list = document.getElementsByClassName("selected");
		for (index = 0; index < list.length; ++index) {
    		list[index].classList.remove("selected");
    	}

    	tlist = document.getElementsByClassName("cdText");
		for (index = 0; index < tlist.length; ++index) {
    		tlist[index].setAttribute("id", "hidden");
		}

		tlist = document.getElementsByClassName("spotify");
		for (index = 0; index < tlist.length; ++index) {
    		tlist[index].setAttribute("id", "hidden");
		}

    	var objDiv = document.getElementById("cdDisplay");
			objDiv.scrollTop = objDiv.scrollHeight;
		document.getElementById("decor").className = "";

		slist = document.getElementsByClassName("spotify");
		for (index = 0; index < slist.length; ++index) {
    		slist[index].setAttribute("id", "hidden");
		}
	}

	function scrollBot(){
		$("html, body").animate({ scrollTop: $(document).height() }, 4000);
	}

	function cdSelected(cdNum, selCdNum, cdDecorNum, bgnum, text, textNum,link){
		document.getElementById("body").setAttribute("class", bgnum);
		document.getElementById(cdNum).classList.add("selected");
		list = document.getElementsByClassName("selectedCd");
		for (index = 0; index < list.length; ++index) {
    		list[index].setAttribute("id", selCdNum);
		}
		tlist = document.getElementsByClassName("cdText");
		for (index = 0; index < tlist.length; ++index) {
    		tlist[index].setAttribute("id", textNum);
    		tlist[index].innerHTML = text;
		}
		$("#instructions").css("opacity",0);
		
 	
		slist = document.getElementsByClassName("spotify");
		for (index = 0; index < slist.length; ++index) {
    		slist[index].id = "";
    		slist[index].setAttribute('href',link);
    		console.log("ok");
    	
    	}

       	document.getElementById("decor").setAttribute("class",cdDecorNum);
       	$(window).on("scroll", function() {
  		$("." + cdDecorNum).css("opacity", (window.innerHeight + ($(window).scrollTop()* 100)) / ($(document).height()*40));
		});
	}

	$(window).scroll(function() {
   		if($(window).scrollTop() + $(window).height() > $(document).height() -120) {
			$(".spotify").css("opacity", 1);
			$(".cdText").css("opacity", 1);
		}else{
			$(".spotify").css("opacity", 0);
			$(".cdText").css("opacity", 0);
		}
	});

	// cd selection 
	document.getElementById("cd1").addEventListener("click", cd1);
	function cd1() {
		clearSelection();
		cdSelected("cd1","selectedCd1","decor1","bg1","i liked things better the way they were","cdText1","https://open.spotify.com/user/123877546/playlist/0gLf0aS2jsms2QvBXoq3zU?si=OjIMk0YVSKyf214Y2bSJ-Q");
		scrollBot()
	}

	document.getElementById("cd2").addEventListener("click", cd2);
	function cd2() {
		clearSelection();
		cdSelected("cd2","selectedCd2","decor2","bg2","Humidity will make it feel like it's 100 degrees!","cdText2","https://open.spotify.com/user/123877546/playlist/0tTiW4P4D19RDV3WhWSxrv?si=zb0GmsBXSXm7DVZ_iVaWCw");
		scrollBot()
	}

	document.getElementById("cd3").addEventListener("click", cd3);
	function cd3() {
		clearSelection();
		cdSelected("cd3","selectedCd3","decor3","bg3","one small step for mankind","cdText3","https://open.spotify.com/user/123877546/playlist/71PhFS5UiafwQtpD0rhdHC?si=uHR2nnxzTYysQjzHWSyr1w");
		scrollBot()
	}

	document.getElementById("cd4").addEventListener("click", cd4);
	function cd4() {
		clearSelection();
		cdSelected("cd4","selectedCd4","decor4","bg4","i like the way it hurts", "cdText4","https://open.spotify.com/user/123877546/playlist/0ujw5ajD3qoXjMnOkV8GRG?si=NGQRSV71R96_wFYOsqdauw");
		scrollBot()	
	}

	document.getElementById("cd5").addEventListener("click", cd5);
	function cd5() {
		clearSelection();
		cdSelected("cd5","selectedCd5","decor5","bg5", "youth knows no pain", "cdText5","https://open.spotify.com/user/123877546/playlist/3Ht5ThZaYae8bCMnTDsIi6?si=OWzj7I2nTrqlW0qeWCLRzw");
		scrollBot()
	}

	document.getElementById("cd6").addEventListener("click", cd6);
	function cd6() {
		clearSelection();
		cdSelected("cd6","selectedCd6","decor6","bg6","why did you do it?", "cdText6","https://open.spotify.com/user/123877546/playlist/60V8jut1wgBSzqWdUNu8Kf?si=ZrVqvOHAT_ae0WUzZzRlHA");
		scrollBot()
	}
	// eject button

	document.getElementById("ejectButton").addEventListener("click", eB);
	function eB() {
		$("html,body").animate({ scrollTop: 10 }, 1000);
			function scrolled() {
			clearSelection();
			list = document.getElementsByClassName("selectedCd");
			for (index = 0; index < list.length; ++index) {
    			list[index].setAttribute("id", "hidden");
			}
		}
		scrolled();
	}
}