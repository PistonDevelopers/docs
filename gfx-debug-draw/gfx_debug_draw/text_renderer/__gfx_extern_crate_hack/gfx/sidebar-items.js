initSidebarItems({"type":[["ColorValue",""],["Depth",""],["InstanceCount",""],["Layer",""],["Level",""],["Stencil",""],["SubmitInfo",""],["VertexCount",""]],"struct":[["Attribute","Describes a single attribute of a vertex buffer, including its type, name, etc."],["Buffer","Type-safe buffer handle"],["BufferInfo","An information block that is immutable and associated with each buffer"],["Canvas","A canvas with everything you need to draw on it."],["ClearData","How to clear a frame."],["DrawState","An assembly of states that affect regular draw calls"],["Frame","A complete `Frame`, which is the result of rendering."],["FrameBuffer","Frame Buffer Handle"],["Graphics","A convenient wrapper suitable for single-threaded operation."],["IndexBuffer","Type-safe index buffer handle"],["Mask","/// Output mask, used for blitting and clearing"],["Mesh","Describes geometry to render."],["Mirror","/// Mirroring flags, used for blitting"],["ParamStorage","Temporary parameter storage, used for shader activation."],["Program","Program Handle"],["ProgramInfo","Metadata about a program."],["RawBuffer","Raw (untyped) Buffer Handle"],["Rect","A screen space rectangle"],["Renderer","Renderer front-end"],["Sampler","Sampler Handle"],["Shader","Shader Handle"],["ShaderSource","A type storing shader source for different graphics APIs and versions."],["Slice","Description of a subset of `Mesh` data to render."],["Surface","Surface Handle"],["Texture","Texture Handle"]],"constant":[["COLOR",""],["COLOR0",""],["COLOR1",""],["COLOR2",""],["COLOR3",""],["DEPTH",""],["MIRROR_X",""],["MIRROR_Y",""],["STENCIL",""]],"enum":[["BlendPreset","Blend function presets for ease of use."],["BufferRole","Role of the memory buffer. GLES doesn't chaning bind points for buffers."],["BufferUsage","A hint as to how this buffer will be used."],["DrawError","Draw-time error, showing inconsistencies in draw parameters and data"],["Error","Describes kinds of errors that may occur in the mesh linking"],["Gamma","Type of the gamma transformation for framebuffer writes."],["Plane","A single buffer that can be bound to a render target."],["PrimitiveType","Describes what geometric primitives are created from vertex data."],["ProgramError","Program linking error"],["SliceKind","Source of vertex ordering for a slice"],["UniformValue","A value that can be uploaded to the device as a uniform."]],"mod":[["attrib","Vertex attribute types."],["batch","Batches Batches are structures containing all the data required for the draw call, except for the target frame. Here we define the `Batch` trait as well as `RefBatch` and `OwnedBatch` implementations."],["device","Graphics device. Not meant for direct use."],["render","High-level, platform independent, bindless rendering API."],["shade","Shaders Shader parameter handling."],["state","Fixed-function hardware state."],["tex","Texture creation and modification."],["traits","public re-exported traits"]],"fn":[["as_byte_slice","Treat a given slice as `&[u8]` for the given function call"]],"trait":[["CommandBuffer","An interface of the abstract command buffer. It collects commands in an efficient API-specific manner, to be ready for execution on the device."],["Device","An interface for performing draw calls using a specific graphics API"],["Factory",""],["Output","A generic rendering output, consisting of multiple planes."],["Resources","Resources pertaining to a specific API."],["ToSlice","Helper methods for cleanly getting the slice of a type."],["VertexFormat","A trait implemented automatically for user vertex structure by `#[vertex_format] attribute"],["Window","Generic output window."]]});