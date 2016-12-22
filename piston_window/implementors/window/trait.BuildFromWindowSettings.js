(function() {var implementors = {};
implementors["glutin_window"] = ["impl <a class='trait' href='window/trait.BuildFromWindowSettings.html' title='window::BuildFromWindowSettings'>BuildFromWindowSettings</a> for <a class='struct' href='glutin_window/struct.GlutinWindow.html' title='glutin_window::GlutinWindow'>GlutinWindow</a>",];
implementors["piston_window"] = ["impl <a class='trait' href='window/trait.BuildFromWindowSettings.html' title='window::BuildFromWindowSettings'>BuildFromWindowSettings</a> for <a class='struct' href='glutin_window/struct.GlutinWindow.html' title='glutin_window::GlutinWindow'>GlutinWindow</a>","impl&lt;W&gt; <a class='trait' href='window/trait.BuildFromWindowSettings.html' title='window::BuildFromWindowSettings'>BuildFromWindowSettings</a> for <a class='struct' href='piston_window/struct.PistonWindow.html' title='piston_window::PistonWindow'>PistonWindow</a>&lt;W&gt; <span class='where fmt-newline'>where W: <a class='trait' href='window/trait.Window.html' title='window::Window'>Window</a> + <a class='trait' href='window/trait.OpenGLWindow.html' title='window::OpenGLWindow'>OpenGLWindow</a> + <a class='trait' href='window/trait.BuildFromWindowSettings.html' title='window::BuildFromWindowSettings'>BuildFromWindowSettings</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;W::<a class='trait' href='window/trait.Window.html' title='window::Window'>Event</a>: <a class='trait' href='input/generic_event/trait.GenericEvent.html' title='input::generic_event::GenericEvent'>GenericEvent</a></span>",];
implementors["window"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
