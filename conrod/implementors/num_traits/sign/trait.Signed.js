(function() {var implementors = {};
implementors["num_bigint"] = [{"text":"impl Signed for BigInt","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;T:&nbsp;Clone + Integer + Signed&gt; Signed for Ratio&lt;T&gt;","synthetic":false,"types":[]}];
implementors["num_traits"] = [];
implementors["ordered_float"] = [{"text":"impl&lt;T:&nbsp;Float + Signed&gt; Signed for NotNan&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()