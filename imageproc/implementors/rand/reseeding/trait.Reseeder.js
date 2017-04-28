(function() {var implementors = {};
implementors["arrayvec"] = [];
implementors["enum_primitive"] = [];
implementors["image"] = [];
implementors["imageproc"] = [];
implementors["libc"] = [];
implementors["num"] = [];
implementors["quickcheck"] = [];
implementors["rand"] = [];
implementors["rayon"] = [];
implementors["regex_syntax"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
