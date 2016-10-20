(function() {var implementors = {};
implementors["gfx_graphics"] = ["impl&lt;'a, R, C&gt; <a class='trait' href='graphics/graphics/trait.Graphics.html' title='graphics::graphics::Graphics'>Graphics</a> for <a class='struct' href='gfx_graphics/struct.GfxGraphics.html' title='gfx_graphics::GfxGraphics'>GfxGraphics</a>&lt;'a, R, C&gt; <span class='where'>where R: <a class='trait' href='gfx_core/trait.Resources.html' title='gfx_core::Resources'>Resources</a>, C: <a class='trait' href='gfx_core/draw/trait.CommandBuffer.html' title='gfx_core::draw::CommandBuffer'>CommandBuffer</a>&lt;R&gt;, R::Buffer: 'a, R::Shader: 'a, R::Program: 'a, R::Texture: 'a, R::Sampler: 'a</span>",];implementors["piston_window"] = ["impl&lt;'a, R, C&gt; <a class='trait' href='graphics/graphics/trait.Graphics.html' title='graphics::graphics::Graphics'>Graphics</a> for <a class='struct' href='gfx_graphics/back_end/struct.GfxGraphics.html' title='gfx_graphics::back_end::GfxGraphics'>GfxGraphics</a>&lt;'a, R, C&gt; <span class='where'>where C: <a class='trait' href='gfx_core/draw/trait.CommandBuffer.html' title='gfx_core::draw::CommandBuffer'>CommandBuffer</a>&lt;R&gt;, R: <a class='trait' href='gfx_core/trait.Resources.html' title='gfx_core::Resources'>Resources</a>, R::<a class='trait' href='gfx_core/trait.Resources.html' title='gfx_core::Resources'>Buffer</a>: 'a, R::<a class='trait' href='gfx_core/trait.Resources.html' title='gfx_core::Resources'>Shader</a>: 'a, R::<a class='trait' href='gfx_core/trait.Resources.html' title='gfx_core::Resources'>Program</a>: 'a, R::<a class='trait' href='gfx_core/trait.Resources.html' title='gfx_core::Resources'>Texture</a>: 'a, R::<a class='trait' href='gfx_core/trait.Resources.html' title='gfx_core::Resources'>Sampler</a>: 'a</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
