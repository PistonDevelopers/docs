(function() {var implementors = {};
implementors["winit"] = [];implementors["glutin"] = [];implementors["glutin_window"] = [];implementors["piston_window"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
