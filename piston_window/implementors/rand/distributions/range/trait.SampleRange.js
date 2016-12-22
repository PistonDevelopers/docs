(function() {var implementors = {};
implementors["glutin"] = [];
implementors["glutin_window"] = [];
implementors["image"] = [];
implementors["piston_window"] = [];
implementors["rand"] = [];
implementors["tempfile"] = [];
implementors["wayland_window"] = [];
implementors["winit"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
