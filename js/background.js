/*

created by Manish Sharma

*/


(function(){

	var downloadState = 0;
	
	var num_tabs ;
	
	chrome.extension.onRequest.addListener(function(request,sender,sendResponse){
	
		if(request.method == "getState")
		{	
			sendResponse({msg : "downloadState getState called ",data : downloadState});
			console.log("downloadState in getstate is "+downloadState);
		}
		
		else
		{
				if(request.data == 1)
				{
					downloadState = 1;
					console.log("downloadState in setstate is "+downloadState);
				}
				
				else
				{
					downloadState = 0;
					console.log("downloadState in setstate is "+downloadState);
				}
				
				sendResponse({msg : "downloadState setState is ",data : downloadState});
		}
	
	});
	
	chrome.tabs.getAllInWindow(null,function(tabs){
		console.log("Initial tab count: " + tabs.length);
		num_tabs = tabs.length-1;
	});
	
	chrome.tabs.onCreated.addListener(function(tab){
		num_tabs++;
		console.log("Tab created event caught. Open tabs #: " + num_tabs);
	});
	
	chrome.tabs.onRemoved.addListener(function(tabId){
		num_tabs--;
		console.log("Tab removed event caught. Open tabs #: " + num_tabs);
		
		if(num_tabs == 0)
		{
			downloadState=0;
			console.log("downloadState changed");
		}
	});

})();