function get_param(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1];
}

if( get_param("prod") !== "undefined" ){
	if( get_param("lang") !== "undefined" ){
		langs = langs+'.';
	} else {
		langs = '';
	}
	var sub 	= ['_', 'A', '6', '2', 'V', 'y', 'u'];
	var mykey 	= sub[0]+sub[1]+sub[2]+sub[3]+sub[4]+sub[5]+sub[6];
	window.location.href = 'https://s.click.aliexpress.com/deep_link.htm?aff_short_key='+mykey+'&dl_target_url=https://'+langs+'aliexpress.com/item/'+get_param("prod")+'.html';
}
