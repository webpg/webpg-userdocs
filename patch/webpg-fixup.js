(function(){
  Docs.initEventTracking = function() {
    if (window.top === window) {
      // Adjust the header size to the appropriate value
      Ext.getCmp('north-region').setHeight(80);
      Ext.getCmp('north-region').items.first().setHeight(53);
    } else {
      // Adjust the header for display in the WebPG extension iframe
      Ext.getCmp('north-region').setHeight(32);
      Ext.getCmp('north-region').items.first().setHeight(32);
      Ext.getCmp('doctabs').setPosition(0, 5);
      Ext.getCmp('doctabs').getEl(".tab-overflow").dom.style.top = '5px';
      Ext.getCmp('search-container').el.dom.style.marginLeft = '-10px';
      Ext.getCmp('search-container').el.dom.style.zIndex = '9999';
      Ext.getElementById("header-content").style.display = 'none';
    }
  };
  var protocol = (document.location.protocol === "https:") ? "https:" : "http:";
  document.write("<link href='"+protocol+"//fonts.googleapis.com/css?family=Exo' rel='stylesheet' type='text/css' />");
})();
