(function() {var implementors = {};
implementors['shader_version'] = [];implementors['opengl_graphics'] = [];implementors['glutin_window'] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
