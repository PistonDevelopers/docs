initSidebarItems({"struct":[["ImageInfo","Describes a subvolume of a texture, which image data can be uploaded into."],["SamplerInfo","Specifies how to sample from a texture."],["SurfaceInfo","Describes the storage of a surface"],["TextureInfo","Describes the storage of a texture."]],"static":[["R8","A single R-component 8-bit normalized format"],["RGBA16F","A standard RGBA 16-bit floating-point format"],["RGBA32F","A standard RGBA 32-bit floating-point format"],["RGBA8","A standard RGBA 8-bit normalized format"]],"type":[["Bits",""],["NumFragments",""],["NumSamples",""]],"enum":[["AaMode","Describes the configuration of samples inside each texel."],["ComparisonMode","Specified how the Comparison operator should be used when sampling"],["Components","Describes the color components of each texel."],["Compression","Codec used to compress image data."],["CubeFace","The face of a cube texture to do an operation on."],["FilterMethod","How to filter the texture when sampling. They correspond to increasing levels of quality, but also cost. They \"layer\" on top of each other: it is not possible to have bilinear filtering without mipmapping, for example."],["Format","Describes the layout of each texel within a surface/texture."],["SurfaceError","Surface creation/update error."],["TextureError","Texture creation/update error."],["TextureKind","Specifies how a given texture may be used. The available texture types are restricted by what Metal exposes, though this could conceivably be extended in the future. Note that a single texture can *only* ever be of one kind. A texture created as `Texture2D` will forever be `Texture2D`."],["WrapMode","Specifies how texture coordinates outside the range `[0, 1]` are handled."]]});