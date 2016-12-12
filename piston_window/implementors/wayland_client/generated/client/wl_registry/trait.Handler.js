(function() {var implementors = {};
implementors["wayland_window"] = [];implementors["wayland_kbd"] = [];implementors["winit"] = [];implementors["glutin"] = [];implementors["glutin_window"] = [];implementors["piston_window"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
