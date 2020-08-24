import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FroalaEditorModule } from 'angular-froala-wysiwyg/editor/editor.module.js';
import 'froala-editor/js/plugins.pkgd.min.js';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FroalaEditorModule.forRoot(), ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
