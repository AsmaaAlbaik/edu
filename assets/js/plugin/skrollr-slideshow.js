/*!
 * Plugin for skrollr.
 * This plugin makes a simple slideshow of the elements passed to it.
 *
 * Daniel McNeil - https://github.com/emotiongraphics
 *
 * Free to use under terms of MIT license
 */

(function(document, window) {
	'use strict';

	var skrollr = window.skrollr;

	skrollr.slideShow = {};
	skrollr.slideShow.init = function(skrollrInstance, div, scrollHeightPerItem) {
			
		if (typeof(scrollHeightPerItem)==='undefined') scrollHeightPerItem = 500;

		var p = document.querySelectorAll(div);
		console.log("p = "+p);
		var elements = [];
		
		for(var n in p[0].childNodes){ 
			
			if(p[0].childNodes[n].nodeType ==1){
		 		elements.push(p[0].childNodes[n]);
			}

		}
		
		for (var i=0; i<elements.length; i++){

			if(elements[i].nodeType == 1){
			
				var startY = i * scrollHeightPerItem;
				var midY1 = startY+(scrollHeightPerItem*0.10);
				var midY2 = startY+(scrollHeightPerItem*1);
				var endY = startY+(scrollHeightPerItem*1.1);

				
				var dataStart =document.createAttribute("data-"+startY)
				var dataMid1 = document.createAttribute("data-"+midY1);
				var dataMid2 = document.createAttribute("data-"+midY2);
				var dataEnd = document.createAttribute("data-"+endY);
				


				i==0 ? dataStart.nodeValue = "opacity:1;" : dataStart.nodeValue = "opacity:0;";
				dataMid1.nodeValue = "opacity:1;";
				dataMid2.nodeValue = "opacity:1;";
				i==elements.length-1 ? dataEnd.nodeValue = "opacity:1;" :	dataEnd.nodeValue = "opacity:0;";

				elements[i].setAttributeNode(dataStart);
				elements[i].setAttributeNode(dataMid1);
				elements[i].setAttributeNode(dataMid2);
				elements[i].setAttributeNode(dataEnd);
				
			}
		}
		
		skrollrInstance.refresh();
	}
}(document, window));
