(function() {var implementors = {};
implementors["glutin_window"] = ["impl <a class=\"trait\" href=\"window/trait.AdvancedWindow.html\" title=\"trait window::AdvancedWindow\">AdvancedWindow</a> for <a class=\"struct\" href=\"glutin_window/struct.GlutinWindow.html\" title=\"struct glutin_window::GlutinWindow\">GlutinWindow</a>",];
implementors["piston_window"] = ["impl <a class=\"trait\" href=\"window/trait.AdvancedWindow.html\" title=\"trait window::AdvancedWindow\">AdvancedWindow</a> for <a class=\"struct\" href=\"glutin_window/struct.GlutinWindow.html\" title=\"struct glutin_window::GlutinWindow\">GlutinWindow</a>","impl&lt;W&gt; <a class=\"trait\" href=\"window/trait.AdvancedWindow.html\" title=\"trait window::AdvancedWindow\">AdvancedWindow</a> for <a class=\"struct\" href=\"piston_window/struct.PistonWindow.html\" title=\"struct piston_window::PistonWindow\">PistonWindow</a>&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"window/trait.AdvancedWindow.html\" title=\"trait window::AdvancedWindow\">AdvancedWindow</a>,&nbsp;</span>",];
implementors["window"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
