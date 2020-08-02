(function() {var implementors = {};
implementors["adler"] = [{"text":"impl Hasher for Adler32","synthetic":false,"types":[]}];
implementors["fnv"] = [{"text":"impl Hasher for FnvHasher","synthetic":false,"types":[]}];
implementors["fxhash"] = [{"text":"impl Hasher for FxHasher","synthetic":false,"types":[]},{"text":"impl Hasher for FxHasher64","synthetic":false,"types":[]},{"text":"impl Hasher for FxHasher32","synthetic":false,"types":[]}];
implementors["rustc_hash"] = [{"text":"impl Hasher for FxHasher","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()