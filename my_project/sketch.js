window.onload=function(){
	document.getElementById("body").setAttribute("class", "bgd");
	function clearSelection(){
		document.getElementById("body").setAttribute("class", "bgd");
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

	function cdSelected(cdNum, selCdNum, cdDecorNum, bgnum, text, textNum){
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

		slist = document.getElementsByClassName("spotify");
		for (index = 0; index < slist.length; ++index) {
    		slist[index].id = "";
    	}


       	document.getElementById("decor").setAttribute("class",cdDecorNum);
       	$(window).on("scroll", function() {
  		$("." + cdDecorNum).css("opacity", (window.innerHeight + ($(window).scrollTop()* 100)) / ($(document).height()*40));
		});
	}

	// cd selection 
	document.getElementById("cd1").addEventListener("click", cd1);
	function cd1() {
		clearSelection();
		cdSelected("cd1","selectedCd1","decor1","bg1","i liked things better the way they were","cdText1");
		scrollBot()
	}

	document.getElementById("cd2").addEventListener("click", cd2);
	function cd2() {
		clearSelection();
		cdSelected("cd2","selectedCd2","decor2","bg2","Humidity will make it feel like it's close to 100 degrees! Stay hydrated!","cdText2");
		scrollBot()
	}

	document.getElementById("cd3").addEventListener("click", cd3);
	function cd3() {
		clearSelection();
		cdSelected("cd3","selectedCd3","decor3","bg3","one small step for mankind","cdText3");
		scrollBot()
	}

	document.getElementById("cd4").addEventListener("click", cd4);
	function cd4() {
		clearSelection();
		cdSelected("cd4","selectedCd4","decor4","bg4","i like the way it hurts", "cdText4");
		scrollBot()	
	}

	document.getElementById("cd5").addEventListener("click", cd5);
	function cd5() {
		clearSelection();
		cdSelected("cd5","selectedCd5","decor5","bg5", "youth knows no pain", "cdText5");
		scrollBot()
	}

	document.getElementById("cd6").addEventListener("click", cd6);
	function cd6() {
		clearSelection();
		cdSelected("cd6","selectedCd6","decor6","bg6","why did you do it?", "cdText6");
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