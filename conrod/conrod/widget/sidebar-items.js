initSidebarItems({"mod":[["button",""],["canvas",""],["drag",""],["drop_down_list",""],["envelope_editor",""],["label",""],["matrix",""],["number_dialer",""],["scroll",""],["slider",""],["split",""],["tabs",""],["text_box",""],["toggle",""],["xy_pad",""]],"struct":[["CommonBuilder","A struct containing builder data common to all Widget types. This type allows us to do a blanket impl of Positionable and Sizeable for T: Widget."],["DrawArgs","Arguments for the `Widget::draw` method in a struct to simplify the method signature."],["State","Represents the unique cached state of a widget."],["UiCell","A wrapper around a `Ui` that only exposes the functionality necessary for the `Widget::update` method. Its primary role is to allow for widget designers to compose their own unique `Widget`s from other `Widget`s by calling the `Widget::set` method within their own `Widget`'s update method. It also provides methods for accessing the `Ui`'s `Theme`, `GlyphCache` and `UserInput` via immutable reference."],["UpdateArgs","Arguments for the `Widget::update` method in a struct to simplify the method signature."]],"trait":[["Widget","A trait to be implemented by all Widget types."]]});