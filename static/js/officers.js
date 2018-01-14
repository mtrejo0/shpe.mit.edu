var officers = new Array();
function slider_generate(name){
    var officer = document.createElement('div'); 
    $(officer).addClass('officer');
    $(officer).append('<h1>'+name+'</h1>');
    officers.push({'name': name, 'obj':officer});
};

function officer(role,name,email) {
	var officer = document.createElement('div');
	$(officer).addClass('officer');
	var headshot = document.createElement('img');
	$(headshot).addClass('headshot');
	$(headshot).attr('src','static/images/'+name+'.jpeg');
	// var image = '<img src="static/images/'+name+'.jpeg></img>';
	// $(image);

	// $(image).append('<img src="static/images/'+name+'.jpeg></img>');
	var info = document.createElement('div');
	$(info).addClass('info');
	$(info).append('<h1>'+role+'</h1>');
	$(info).append('<h3>'+name+'</h3>');
	$(info).append('<p>'+email+'</p>');
	$(officer).append(headshot);
	$(officer).append(info);
	return officer;
}
function createOfficerTabs() {
	// where we're building to
	target = document.getElementById('officers');
	var informationArray= [];
	// info we're reading form
	$.getJSON('../officers.json', function(json) 
	{
		$.each(data, function(key, val)
		{
			informationArray.push(key + '-' + val);
		});
		console.log(informationArray);
	});

	for (var i = 0; i < 120; i++) {
		var bullet = officer('President','gonzo','dangonzo@mit.edu');
		$(bullet).appendTo(target).trigger('create');
	}
}