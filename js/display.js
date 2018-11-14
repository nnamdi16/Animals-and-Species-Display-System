$(document).ready(function(){
	var jsonParsed = JSON.parse(data);
	var theDisplay = document.getElementById("animal-display");
	var html = animalLinks.animalToHTML(jsonParsed);
	return theDisplay.innerHTML = html;
})

function cbReadFile(){
	var jsonParsed = JSON.parse(data);
	var theDisplay = document.getElementById("animal-display");
	var html = animalLinks.animalToHTML(jsonParsed);
	return theDisplay.innerHTML = html;
	
}

function animalToHTML(){
	tags = '<div id="picture_box" class = "equal"></div>\n';
	tags += `<img src="  ${(json['image']['url'])} "
	``alt= "${(json['image']['alt'])}"> </div>\n`;
	tags += `<div id="info_box" class="equal">\n<div id="info_
			box_inner">\n`;
	tags += `<h4>${(json["guitar_name"])}</h4>\n`;
	tags += `<ul>\n`;
	tags += `<li>Model: <strong>${(json["model"])}</strong></
			li>\n`;
	tags += `<li>Made by: <strong>${(json["manufacturer"])}</
			strong></li>\n`;
	tags += `<li>Year: <strong>${(json["year"])}</strong></
			li>\n`;
	tags += `</ul>\n`;
	tags += `<h5>About this guitar</h5>\n`;
	var description = json["description"];
	for(var i = 0; i < description.length; i++){
	tags += `<p>’ + ${description[i]}</p>\n`;
	tags +=`<p><a href="${(json["link"]["url"])}> ${json["link"]["text"]}</a></p>\n`;
	tags += `</div>\n</div>`;
	}

	return tags

}