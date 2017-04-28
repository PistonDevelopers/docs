(function() {var implementors = {};
implementors["gfx_texture"] = ["impl&lt;R, C&gt; <a class=\"trait\" href=\"texture/trait.UpdateTexture.html\" title=\"trait texture::UpdateTexture\">UpdateTexture</a>&lt;<a class=\"struct\" href=\"gfx/encoder/struct.Encoder.html\" title=\"struct gfx::encoder::Encoder\">Encoder</a>&lt;R, C&gt;&gt; for <a class=\"struct\" href=\"gfx_texture/struct.Texture.html\" title=\"struct gfx_texture::Texture\">Texture</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"gfx_core/trait.Resources.html\" title=\"trait gfx_core::Resources\">Resources</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"gfx_core/command/trait.Buffer.html\" title=\"trait gfx_core::command::Buffer\">CommandBuffer</a>&lt;R&gt;,&nbsp;</span>",];
implementors["piston_window"] = ["impl&lt;R, C&gt; <a class=\"trait\" href=\"texture/trait.UpdateTexture.html\" title=\"trait texture::UpdateTexture\">UpdateTexture</a>&lt;<a class=\"struct\" href=\"gfx/encoder/struct.Encoder.html\" title=\"struct gfx::encoder::Encoder\">Encoder</a>&lt;R, C&gt;&gt; for <a class=\"struct\" href=\"piston_window/struct.Texture.html\" title=\"struct piston_window::Texture\">Texture</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"gfx_core/command/trait.Buffer.html\" title=\"trait gfx_core::command::Buffer\">Buffer</a>&lt;R&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"gfx_core/trait.Resources.html\" title=\"trait gfx_core::Resources\">Resources</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
