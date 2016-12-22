(function() {var implementors = {};
implementors["glutin"] = [];
implementors["glutin_window"] = [];
implementors["piston_window"] = [];
implementors["wayland_client"] = [];
implementors["wayland_kbd"] = [];
implementors["wayland_window"] = [];
implementors["winit"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
