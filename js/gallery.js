var stripeTable ={
	getTheTables:function(){
		if (!document.getElementsById) return false;
		var theTables = document.getElementsById("table");
		for (var i=0; i < theTables.length; i++) {
			if (theTables[i].className == "table") {
				stripeTable.addStripes(theTables[i]);
			}
		}
	},

	addStripes:function(theTable) {
		var theTableRows = theTable.getElementsByTagName("tr");
		var rowCount=theTableRows.length;
		for (var i=1; i < rowCount; i++) {
			theTableRows[i].className = "odd";
			i++;
		}
	}

}

window.onload() =init();
function init(){
	return stripeTable.getTheTables
}