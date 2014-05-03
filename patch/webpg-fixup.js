window.myLocalStorage = {};
document.myCookie = function(val) {
  var theCookie = document.cookie;
  theCookie = val;
  return theCookie;
}

(function(){
  Ext.onReady(function() {
	  // Open external links in new window.
	  Ext.getBody().on('click', function(evt, target) {
		  target = Ext.get(target);
		  if (!target.is('a'))
			  return;

		  var href = target.getAttribute('href');
		  if (href && !/^#/.exec(href) && window.open(href, '_blank'))
			  evt.preventDefault();

	  });
	});

  Docs.initEventTracking = function() {
    var doctabs = Ext.getCmp('doctabs'),
        doctabs_top = 5,
        header = Ext.getElementById("header-content"),
        north = Ext.getCmp('north-region'),
        search = Ext.getCmp('search-container');

    if (window.top === window) {
      // Adjust the header size to the appropriate value
      north.setHeight(80);
      north.items.first().setHeight(53);
    } else {
      doctabs.on("move", function(e) {
        var newPos = e.getPosition();
        if (newPos.hasOwnProperty(1) &&
            newPos[1] !== doctabs_top)
          doctabs.setPosition(0, doctabs_top);
      });
      // Adjust the header for display in the WebPG extension iframe
      north.setHeight(32);
      north.items.first().setHeight(32);
      doctabs.setPosition(0, 5);
      doctabs.el.dom.style.top = '5px !important';
      doctabs.getEl(".tab-overflow").dom.style.top = '5px';
      search.el.dom.style.marginLeft = '-10px';
      search.el.dom.style.zIndex = '9999';
      header.style.display = 'none';
    }
  };
//  Docs.otherProducts = [
//      {text: 'Browser Extension', href: '../docs/index.html', icon: 'resources/images/flogo.png'},
//      {text: 'libwebpg', href: 'http://webpg.org/docs/webpg-npapi/'}
//  ];

  var protocol = (document.location.protocol === "https:") ? "https:" : "http:";
  document.write("<link href='"+protocol+"//fonts.googleapis.com/css?family=Exo' rel='stylesheet' type='text/css' />");
})();
