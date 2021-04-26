// var championNameList = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "AurelionSol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana", "DrMundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi","Irelia", "Ivern", "Janna", "JarvanIV", "Jax", "Jayce","Jhin", "Jinx", "Kaisa", "Kalista", "Karma", "Karthus", "Kassadin"]
var dummyImage = "images/question_mark.jpeg";
var draftPosition;

function startHTML(){
	jQuery.getJSON("http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/champion.json", "{}", function(data){createChampList(data);});
}

function createChampList(championList){
	const championNameList = Object.keys(championList['data']);
	var element = "championList";
	var champListDiv = document.getElementById(element);
	document.onclick = function(e){ 
		var cond1 = champListDiv.style.display === 'block';
		var cond2 = e.target.parentElement.id !== 'championList' & e.target.parentElement.className !== 'champRow';
		var cond3 = e.target.onclick == null;
		if(cond1&cond2&cond3){
            champListDiv.style.display = 'none';
            }
         };

	var row = document.createElement("div");
	row.className = "champRow";
	row.id = "champRow0";

    champListDiv.appendChild(row);
    var j = 0;

	championNameList.forEach(function(championName){
		var row = document.getElementById("champRow"+j);
    	if (row.childElementCount > 2){
    		j+=1;
			var row = document.createElement("div");
			row.className = "champRow";
			row.id = "champRow" + j;
		    champListDiv.appendChild(row);
		}
    	var icon = document.createElement("input");
    	icon.type = "image";
    	icon.id = championName;
    	icon.className = "champIcon";
    	icon.alt = dummyImage;
    	icon.setAttribute('data-tag', championList['data'][championName]['tags']);
    	icon.src = "http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/" + championName + ".png";
        row.appendChild(icon);
    }
    )
}

function changeChampion(dom, draftPosition){

	if (dom.className === "champIconGray"){
		dom.className = "champIcon";
	}
	else{
		dom.className = "champIconGray";
	}

	var draftPositionIcon = document.getElementById(draftPosition+"Icon");
	draftPositionIcon.src = dom.src;

	var championNameText = document.getElementById(draftPosition+"_champion_name");
	var championNameType = document.getElementById(draftPosition+"_champion_type");

	var oldText = championNameText.textContent;

	if(typeof oldText !== "undefined" && oldText !== ''){
		var oldChampion = document.getElementById(oldText);
		oldChampion.className = "champIcon";
	}

	championNameText.textContent = dom.id;
	championNameType.textContent = dom.getAttribute('data-tag');
	var champListDiv = document.getElementById("championList");

	if (champListDiv.style.display === "none") {
		champListDiv.style.display = "block";
	} else {
		champListDiv.style.display = "none";
	}

	create_svg(draftPosition, dom.id);
}

function getChampionOverlay(draftPosition) {
	var championOverlay = document.getElementById('championList').getElementsByTagName('input');
	for (i=1; i<championOverlay.length; i++){
		var championIcon = championOverlay[i];
    	championIcon.onclick = function(){changeChampion(this, draftPosition);};
	}
    var champListDiv = document.getElementById("championList");
	if (champListDiv.style.display === "none") {
		champListDiv.style.display = "block";
	} else {
		champListDiv.style.display = "none";
	}
};


function searchChampion(){
	var input = document.getElementById('championSearch').value.toLowerCase();
    var champOne = Array.from(document.getElementsByClassName('champIcon'));
    var champTwo = Array.from(document.getElementsByClassName('champIconGray'));
    var champSearch = champOne.concat(champTwo);
    for (i = 0; i < champSearch.length; i++) { 
        if (!champSearch[i].id.toLowerCase().includes(input)) {
            champSearch[i].style.display="none";
        }
        else {
            champSearch[i].style.display="list-item";                 
        }
    }
};

