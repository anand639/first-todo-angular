// Importing core functionalities from Angular's core and platform-browser packages.
// NgModule is the core decorator for Angular modules,
// BrowserModule is needed to run the app in a web browser,
// FormsModule is used for building forms and binding data.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// AppComponent is the root component of the application,
// and TaskListComponent is a custom component for the task list.
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
//  The declarations array contains a list of components, directives, and pipes that belong to this module.
@NgModule({
  // AppComponent and TaskListComponent are declared here, making them part of the AppModule.
  declarations: [AppComponent, TaskListComponent],
  imports: [BrowserModule, FormsModule],
  // The providers array is used to declare services that this module contributes to the global collection of services;
  // they become accessible in all parts of the app. It's empty here, indicating no services are provided at the module level.
  providers: [],
  // The bootstrap array tells Angular which component(s) to use as the entry point for the application.
  // Here, AppComponent is bootstrapped, meaning Angular will load this component at application launch and insert it into the index.html host web page.
  bootstrap: [AppComponent],
})
export class AppModule {}
