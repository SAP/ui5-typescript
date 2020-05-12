/**
 * This is a Beta version of the OpenUI5 TypeScript Signatures.
 * Significant changes may occur in future versions,
 * including potential breaking changes.
 */
// For Library Version: 1.60.14

declare namespace sap {
  namespace ui {
    /**
     * UI5 library: sap.ui.codeeditor.
     */
    namespace codeeditor {
      interface CodeEditorOpts extends sap.ui.core.ControlOpts {
        /**
         * The value displayed in the code editor
         */
        value?: string;

        /**
         * The type of the code in the editor used for syntax highlighting Possible types are: abap, abc, actionscript,
         * ada, apache_conf, applescript, asciidoc, assembly_x86, autohotkey, batchfile, bro, c9search, c_cpp, cirru,
         * clojure, cobol, coffee, coldfusion, csharp, css, curly, d, dart, diff, django, dockerfile, dot, drools,
         * eiffel, ejs, elixir, elm, erlang, forth, fortran, ftl, gcode, gherkin, gitignore, glsl, gobstones, golang,
         * groovy, haml, handlebars, haskell, haskell_cabal, haxe, hjson, html, html_elixir, html_ruby, ini, io,
         * jack, jade, java, javascript, json, jsoniq, jsp, jsx, julia, kotlin, latex, lean, less, liquid, lisp,
         * live_script, livescript, logiql, lsl, lua, luapage, lucene, makefile, markdown, mask, matlab, mavens_mate_log,
         * maze, mel, mips_assembler, mipsassembler, mushcode, mysql, nix, nsis, objectivec, ocaml, pascal, perl,
         * pgsql, php, plain_text, powershell, praat, prolog, properties, protobuf, python, r, razor, rdoc, rhtml,
         * rst, ruby, rust, sass, scad, scala, scheme, scss, sh, sjs, smarty, snippets, soy_template, space, sql,
         * sqlserver, stylus, svg, swift, swig, tcl, tex, text, textile, toml, tsx, twig, typescript, vala, vbscript,
         * velocity, verilog, vhdl, wollok, xml, xquery, yaml
         */
        type?: string;

        /**
         * The width of the code editor
         */
        width?: sap.ui.core.CSSSize;

        /**
         * The height of the code editor. A minimal height of 3rem will be applied in case the height is less than
         * 20px.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Sets whether the code in the editor can be changed by the user
         */
        editable?: boolean;

        /**
         * Sets whether line numbers should be shown
         */
        lineNumbers?: boolean;

        /**
         * Sets whether the code is automatically selected if a value is set
         */
        valueSelection?: boolean;

        /**
         * @SINCE 1.48.1
         *
         * Sets whether the editor height should auto expand to a maximum number of lines. After reaching the maximum
         * number of lines specified, the content of the `CodeEditor` will become scrollable.
         *
         * **Note:** Keep in mind that the auto expand `CodeEditor` behavior requires the `height` property to be
         * set to `auto`.
         */
        maxLines?: number;

        /**
         * Sets the editors color theme Possible values are: default, hcb, hcb_bright, hcb_blue, theme-ambiance,
         * chaos, chrome, clouds, clouds_midnight, cobalt, crimson_editor, dawn, dreamweaver, eclipse, github, gob,
         * gruvbox, idle_fingers, iplastic, katzenmilch, kr_theme, kuroir, merbivore, merbivore_soft, mono_industrial,
         * monokai, pastel_on_dark, solarized_dark, solarized_light, sqlserver, terminal, textmate, tomorrow, tomorrow_night,
         * tomorrow_night_blue, tomorrow_night_bright, tomorrow_night_eighties, twilight, vibrant_ink, xcode
         */
        colorTheme?: string;

        /**
         * Sets whether to show syntax hints the editor. This flag is only available if line numbers are shown.
         */
        syntaxHints?: boolean;

        liveChange?: Function;

        change?: Function;
      }
      /**
       * Allows to visualize source code of various types with syntax highlighting, line numbers in editable and
       * read only mode. Use this controls in scenarios where the user should be able to inspect and edit source
       * code. NOTE: There is a known limitation where CodeEditor won't work within IconTabBar on Internet Explorer.
       * There is a way to achieve the same functionality - an example of IconTabHeader and a CodeEditor can be
       * found in the CodeEditor's samples.
       */
      class CodeEditor extends sap.ui.core.Control {
        /**
         * Constructor for a new CodeEditor.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: CodeEditorOpts
        );

        /**
         * @SINCE 1.52
         *
         * Defines custom completer - object implementing a getCompletions method. The method has two parameters
         * - fnCallback method and context object. Context object provides details about oPos and sPrefix as provided
         * by ACE.
         */
        addCustomCompleter(
          /**
           * Object with getCompletions method
           */
          oCustomCompleter: object
        ): void;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.codeeditor.CodeEditor`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.codeeditor.CodeEditor` itself.
         */
        attachChange(
          /**
           * An application-specific payload object that will be passed to the event handler along with the event
           * object when firing the event
           */
          oData: object,
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.codeeditor.CodeEditor` itself
           */
          oListener?: object
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.codeeditor.CodeEditor`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.codeeditor.CodeEditor` itself.
         */
        attachLiveChange(
          /**
           * An application-specific payload object that will be passed to the event handler along with the event
           * object when firing the event
           */
          oData: object,
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.codeeditor.CodeEditor` itself
           */
          oListener?: object
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.codeeditor.CodeEditor`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.codeeditor.CodeEditor`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachLiveChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Creates a new subclass of class sap.ui.codeeditor.CodeEditor with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
         */
        // @ts-ignore
        static extend(
          /**
           * Name of the class being created
           */
          sClassName: string,
          /**
           * Object literal with information about the class
           */
          oClassInfo?: object,
          /**
           * Constructor function for the metadata object; if not given, it defaults to `sap.ui.core.ElementMetadata`
           */
          FNMetaImpl?: Function
        ): Function;
        /**
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Fires event {@link #event:liveChange liveChange} to attached listeners.
         */
        fireLiveChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Sets the focus to the code editor
         */
        // @ts-ignore
        focus(): sap.ui.codeeditor.CodeEditor;
        /**
         * Gets current value of property {@link #getColorTheme colorTheme}.
         *
         * Sets the editors color theme Possible values are: default, hcb, hcb_bright, hcb_blue, theme-ambiance,
         * chaos, chrome, clouds, clouds_midnight, cobalt, crimson_editor, dawn, dreamweaver, eclipse, github, gob,
         * gruvbox, idle_fingers, iplastic, katzenmilch, kr_theme, kuroir, merbivore, merbivore_soft, mono_industrial,
         * monokai, pastel_on_dark, solarized_dark, solarized_light, sqlserver, terminal, textmate, tomorrow, tomorrow_night,
         * tomorrow_night_blue, tomorrow_night_bright, tomorrow_night_eighties, twilight, vibrant_ink, xcode
         *
         * Default value is `default`.
         */
        getColorTheme(): string;
        /**
         * Returns the current value of the code editor
         */
        getCurrentValue(): string;
        /**
         * Gets current value of property {@link #getEditable editable}.
         *
         * Sets whether the code in the editor can be changed by the user
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * The height of the code editor. A minimal height of 3rem will be applied in case the height is less than
         * 20px.
         *
         * Default value is `100%`.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getLineNumbers lineNumbers}.
         *
         * Sets whether line numbers should be shown
         *
         * Default value is `true`.
         */
        getLineNumbers(): boolean;
        /**
         * @SINCE 1.48.1
         *
         * Gets current value of property {@link #getMaxLines maxLines}.
         *
         * Sets whether the editor height should auto expand to a maximum number of lines. After reaching the maximum
         * number of lines specified, the content of the `CodeEditor` will become scrollable.
         *
         * **Note:** Keep in mind that the auto expand `CodeEditor` behavior requires the `height` property to be
         * set to `auto`.
         *
         * Default value is `0`.
         */
        getMaxLines(): number;
        /**
         * Returns a metadata object for class sap.ui.codeeditor.CodeEditor.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSyntaxHints syntaxHints}.
         *
         * Sets whether to show syntax hints the editor. This flag is only available if line numbers are shown.
         *
         * Default value is `true`.
         */
        getSyntaxHints(): boolean;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * The type of the code in the editor used for syntax highlighting Possible types are: abap, abc, actionscript,
         * ada, apache_conf, applescript, asciidoc, assembly_x86, autohotkey, batchfile, bro, c9search, c_cpp, cirru,
         * clojure, cobol, coffee, coldfusion, csharp, css, curly, d, dart, diff, django, dockerfile, dot, drools,
         * eiffel, ejs, elixir, elm, erlang, forth, fortran, ftl, gcode, gherkin, gitignore, glsl, gobstones, golang,
         * groovy, haml, handlebars, haskell, haskell_cabal, haxe, hjson, html, html_elixir, html_ruby, ini, io,
         * jack, jade, java, javascript, json, jsoniq, jsp, jsx, julia, kotlin, latex, lean, less, liquid, lisp,
         * live_script, livescript, logiql, lsl, lua, luapage, lucene, makefile, markdown, mask, matlab, mavens_mate_log,
         * maze, mel, mips_assembler, mipsassembler, mushcode, mysql, nix, nsis, objectivec, ocaml, pascal, perl,
         * pgsql, php, plain_text, powershell, praat, prolog, properties, protobuf, python, r, razor, rdoc, rhtml,
         * rst, ruby, rust, sass, scad, scala, scheme, scss, sh, sjs, smarty, snippets, soy_template, space, sql,
         * sqlserver, stylus, svg, swift, swig, tcl, tex, text, textile, toml, tsx, twig, typescript, vala, vbscript,
         * velocity, verilog, vhdl, wollok, xml, xquery, yaml
         *
         * Default value is `javascript`.
         */
        getType(): string;
        /**
         * Gets current value of property {@link #getValue value}.
         *
         * The value displayed in the code editor
         *
         * Default value is `empty string`.
         */
        getValue(): string;
        /**
         * Gets current value of property {@link #getValueSelection valueSelection}.
         *
         * Sets whether the code is automatically selected if a value is set
         *
         * Default value is `false`.
         */
        getValueSelection(): boolean;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * The width of the code editor
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * @SINCE 1.54.1
         *
         * Pretty-prints the content of the editor
         */
        prettyPrint(): void;
        /**
         * Sets the color theme of the code editor
         */
        setColorTheme(
          /**
           * See property documentation for accepted values
           */
          sTheme: string
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Sets whether the code editor is editable or not
         */
        setEditable(
          /**
           * true to allow editing, otherwise false
           */
          bValue: boolean
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * The height of the code editor. A minimal height of 3rem will be applied in case the height is less than
         * 20px.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `100%`.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Sets whether line numbers should be shown or not
         */
        setLineNumbers(
          /**
           * true to show line numbers
           */
          bValue: boolean
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * @SINCE 1.48.1
         *
         * Sets `maxLines` property.
         */
        setMaxLines(
          /**
           * Maximum number of lines the editor should display
           */
          iMaxLines: number
        ): void;
        /**
         * Sets whether syntax hints should be shown or not Hints are only visible if `lineNumbers` is set to true.
         */
        setSyntaxHints(
          /**
           * true(default) to show the syntax hints
           */
          bShow: boolean
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Sets the type of the code editors value used for syntax highlighting
         */
        setType(
          /**
           * javascript (default), html, xml, css
           */
          sType: string
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Sets the value of the code editor
         */
        setValue(
          /**
           * the value of the code editor
           */
          sValue: string
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Sets a new value for property {@link #getValueSelection valueSelection}.
         *
         * Sets whether the code is automatically selected if a value is set
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setValueSelection(
          /**
           * New value for property `valueSelection`
           */
          bValueSelection: boolean
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * @SINCE 1.54.1
         *
         * Sets `visible` property.
         */
        // @ts-ignore
        setVisible(
          /**
           * Whether the code editor is visible.
           */
          bVisible: boolean
        ): void;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * The width of the code editor
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `100%`.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.codeeditor.CodeEditor`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.codeeditor.CodeEditor` itself.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.codeeditor.CodeEditor` itself
           */
          oListener?: object
        ): sap.ui.codeeditor.CodeEditor;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.codeeditor.CodeEditor`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.codeeditor.CodeEditor` itself.
         */
        attachLiveChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.codeeditor.CodeEditor` itself
           */
          oListener?: object
        ): sap.ui.codeeditor.CodeEditor;
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/codeeditor/CodeEditor": undefined;
  }
}
