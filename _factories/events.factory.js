/* Events Component Manager/Factory :
   
*/

FACTORY.Register("Events", function EventsFactory() {
	var Events = function (config) {
		var self = this;
     	var $search;
      
      	self._config = $fctry.new('Config');
      	self._shared = {
          // Attach _shared factories that can be pushed to
		  // other factories via onload() event.
        };
		
		// Attach all factories to the main parent.
		// Each factory should connect to a UI component's events.
		//
		// self.login = $fctry.new('Login');
      	// self.header = $fctry.new('Header');
		// ...
		// ..
		// .

      	self.startSession = function(sessid) {
		  // Trigger this after a user has logged into
		  // the site and created a sessionid.

		  // Login Complete.
          // - Current sessionID passed as sessid. 
          // - Current User Details located on USER.acct.
        };
      
        self.main = {
          activate: function(e, itm) {
            $with($f, [
              ['pos', 'frmmain', '', 0, 0],
              ['full', 'frmmain']
            ]);
          },
          startdiagnostic: function(e, itm) {
            // Cordova Plugins diagnosis script.
            $phone.diagnose('frmmain', 'results');
          }
        };
      
		self.title = {
          startup: function(e, itm) {
            $f.full('frmtitle');
            $f.load('frmmain');

			setTimeout(function() {
              $f.unload('frmtitle');
              $f.show('frmmain');
              
              $phone = $fctry.new('Phone');
            }, 3500);
            // Initialize and REST calls for the public view
			// of the site/app.
          },
          body: {
            click: function(e, item) {
              alert('Phone Diagnostic App!');
            }
          }
		};

        // Trigger onLoad event on all attached factories,
        // to share necessary methods in a tree.
        for (var mod in self) {
          if (self[mod].onload) { self[mod].onload(self); }
        }
	};
	

  	Events.prototype.type = function () {
		return "Events";
	};
	Events.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return Events;
});

