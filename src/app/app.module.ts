import { ChildChildComponent } from './main-lifecycle/lifecycle-child/child-child/child-child.component';
import { LifecycleChildComponent } from './main-lifecycle/lifecycle-child/lifecycle-child.component';
import { MainLifecycleComponent } from './main-lifecycle/main-lifecycle.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    ChildChildComponent,
    MainLifecycleComponent,
    AppComponent,
    LifecycleChildComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
