(function() {var implementors = {};
implementors["rand"] = [];implementors["tempfile"] = [];implementors["wayland_window"] = [];implementors["winit"] = [];implementors["image"] = [];implementors["glutin"] = [];implementors["glutin_window"] = [];implementors["piston_window"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
