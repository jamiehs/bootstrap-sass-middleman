(function($, window, undefined){
    var MainScripts = {
        initialize: function(){
        	console.log("Running");
        }
    };

    // Send to global namespace
    window.MainScripts = MainScripts;

    // DOM Ready
    $(function(){
        MainScripts.initialize();
    });

    // Deferred loading (window.load)
    $(window).load(function() {
    }); 

})(jQuery, window, null);
