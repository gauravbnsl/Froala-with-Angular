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
      initialized: function (){
        debugger;
        console.log(this);
        let editor = this.froalaOptions["events"];
        // this.el.addEventListener('drop',this.froalaOptions["events"].drop(), true);
        console.log("initialized", editor);
        editor.drop(true);
      },
      'click': function (clickEvent) {
      // Do something here.
      // this is the editor instance.
      debugger;
      console.log(clickEvent);
      },
      'drop': function (dropEvent) {
        // Do something here.
        // this is the editor instance.
        debugger;
        console.log(dropEvent);
      }
    }
  };

  newModel() {
    this.model = {};
  }
  addPlaceholder() {
    console.log(this.model);
  }
  onDrop(event){
    console.log('dropped');
  }
}
