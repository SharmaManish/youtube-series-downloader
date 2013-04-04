/*

content_script created by Manish Sharma

*/

(function(){

	var currentState = 0;
	
	var toggled = false;

	$(document).ready(function (){
	
			createTag();
	
		    console.log("manish content_script");
		
			ToggleState();
			
			$("#download-youtube-video-fmt45678934").click(function(){
			
				var timeout = window.setTimeout(function (){
						
				var youseries_nextbuttonid="watch7-playlist-bar-next-button";
		
				console.log("playNextVideo Called");
			
				document.getElementById(youseries_nextbuttonid).click();
						
				}, 10000);
			
			});
		
			$("#download-youtube-video-fmt45678918").click(function(){
			
				var timeout = window.setTimeout(function (){
						
				var youseries_nextbuttonid="watch7-playlist-bar-next-button";
		
				console.log("playNextVideo Called");
			
				document.getElementById(youseries_nextbuttonid).click();
						
				}, 10000);
			
			});
			
			$("#download-youtube-video-fmt45678935").click(function(){
			
				var timeout = window.setTimeout(function (){
						
				var youseries_nextbuttonid="watch7-playlist-bar-next-button";
		
				console.log("playNextVideo Called");
			
				document.getElementById(youseries_nextbuttonid).click();
						
				}, 10000);
			
			});
		
			seeCurrentState();
	
	});
	
	function createTag()
	{
		$("#watch-like-dislike-buttons").append("<span><button id='download-st' onclick=';return false;' class='yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty yt-uix-button-text' type='button'><span id='download-condition' class='yt-uix-button-content'>Off </span></button></span>");
	}
	
	function ToggleState()
	{
		$("#download-st").click(function (){
		
			toggled = true;
		
			chrome.extension.sendRequest({method : "getState",data : currentState},function(response){
			
				if(response.data == 1)
				{
				
					currentState = 0;
					
					document.getElementById("download-condition").innerHTML="Off ";
					
					chrome.extension.sendRequest({method : "setState",data : currentState},function(response){
					
						console.log(response.msg);
					
					});
				}
				
				else
				{
					currentState = 1;
					
					document.getElementById("download-condition").innerHTML="On ";
					
					chrome.extension.sendRequest({method : "setState",data : currentState},function(response){
					
						console.log(response.msg);
					
					});
					
					downloadPlaylist();
				}
			
			})
		
		});
	}
	
	function seeCurrentState()
	{
	
		if(toggled == true)
		{
			console.log("don't call else loop");
		}
		
		else 
		{
			chrome.extension.sendRequest({method : "getState",data : currentState},function(response){
			
				if(response.data == 1)
				{
					document.getElementById("download-condition").innerHTML = "On ";
					console.log(response.msg);
					downloadPlaylist();
				}
				
				else
				{
					console.log(response.msg);
					console.log("downloadState is 0");
				}
			
			});
		}
		
	}
	
	function downloadPlaylist()
	{
	
		var cur_length = document.getElementById("watch7-playlist-current-index").innerHTML ;
		var playlist_length = document.getElementById("watch7-playlist-length").innerHTML ;
		
		if(cur_length == playlist_length)
		{
			downloadVideo();
			console.log("nextVideo will not be played");
			return ;
		}
	
		downloadVideo();
	
	}
	
	function downloadVideo()
	{
	
		var youseries_buttonid_flv360="download-youtube-video-fmt45678934";
		var youseries_buttonid_mp4360="download-youtube-video-fmt45678918";
		var youseries_buttonid_flv480="download-youtube-video-fmt45678935";
		
		console.log("downloadVideo Called");
		
		if(document.getElementById(youseries_buttonid_flv360) != null)
		{
			console.log("flv360 called");
			document.getElementById(youseries_buttonid_flv360).click();
		}
		
		else if(document.getElementById(youseries_buttonid_mp4360) != null)
		{
			console.log("mp4360 called");
			document.getElementById(youseries_buttonid_mp4360).click();
			
		}
		
		else if(document.getElementById(youseries_buttonid_flv480) != null)
		{
			console.log("flv480 called");
			document.getElementById(youseries_buttonid_flv480).click();
		}
		
		return true;
		
	}

})();