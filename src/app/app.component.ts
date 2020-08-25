import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public model: any = {
    details: "empty"
  };
  hide = false;
  public initControls;
  public deleteAll;
  public editor;

  constructor() {
    console.log("Ctor", this.model.details);
  }

  froalaOptions: Object = {
    charCounterCount: false,
    fileUpload: false,
    attribution: false,
    toolbarButtons: [
      [
        "fullscreen",
        "bold",
        "italic",
        "underline",
        "strikeThrough",
        "subscript",
        "superscript"
      ],
      ["fontFamily", "fontSize", "backgroundColor", "textColor"],
      [
        "paragraphFormat",
        "align",
        "formatOL",
        "formatUL",
        "outdent",
        "indent",
        "-",
        "insertImage",
        "embedly",
        "insertTable",
        "insertLink"
      ],
      ["specialCharacters", "insertHR", "clearFormatting"],
      ["print", "spellChecker"],
      ["undo", "redo"],
      ["insertImage"]
    ],
    toolbarSticky: false,
    language: "de",
    fontFamily: {
      "Arial,Helvetica,sans-serif": "Arial",
      "'Courier New',Courier,monospace": "Courier New",
      "Georgia,serif": "Georgia",
      "Impact,Charcoal,sans-serif": "Impact",
      "'Lucida Console',Monaco,monospace": "Lucida Console",
      "Tahoma,Geneva,sans-serif": "Tahoma",
      "'Times New Roman',Times,serif": "Times New Roman",
      "Verdana,Geneva,sans-serif": "Verdana"
    },
    events: {
      contentChanged: () => {
        console.log("contentChanged", this.model.details);
      },
      "element.dropped": function(element) {
        // Do something here.
        // this is the editor instance.
        debugger;
        console.log("works");
      },
      // initialized: () => {
      //   console.log('initialized');
      // },
      click: (clickEvent) => {
        // Do something here.
        // this is the editor instance.
        debugger;
        console.log(this.editor);
        console.log(clickEvent);
        this.editor.markers.insertAtPoint(clickEvent);
        console.log(this.editor);
      },
      drop: function(dropEvent) {
        // Do something here.
        // this is the editor instance.
        debugger;
        console.log(dropEvent);
      }
    }
  };

  publicnewModel() {
    this.model = {};
  }
  onSave(){
    console.log(this.editor.position.getBoundingRect ());
    
  }
  addPlaceholder() {
    console.log(this.model);
  }
  onDrop(event) {
    console.log("dropped");
  }
  public initialize(initControls) {
    debugger;
    this.initControls = initControls;
    this.initControls.initialize();
    this.editor = this.initControls.getEditor();
    // const wait = time => new Promise((resolve) => setTimeout(resolve, time));
    console.log(this.editor, typeof this.editor);
    console.log(
      this.editor.events.$on(
        "drop",
        function(dropEvent) {
          // Focus at the current posisiton.
          this.editor.markers.insertAtPoint(dropEvent.originalEvent);
          var $marker = this.editor.$el.find(".fr-marker");
          this.editor.selection.restore();
          return false;
        },
        true
      )
    );
    // editor.el.addEventListener('drop', this.froalaOptions["events"].drop, true)
    // this.deleteAll = function() {
    // 	this.initControls.getEditor()('html.set', '');
    // };
  }
}
