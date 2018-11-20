import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsItemComponent } from './skills-item/skills-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SkillsItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
