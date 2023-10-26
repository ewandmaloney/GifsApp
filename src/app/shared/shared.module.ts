import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSidebarComponent } from './components/shared-sidebar/shared-sidebar.component';



@NgModule({
  declarations: [
    SharedSidebarComponent
  ],
  exports: [SharedSidebarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
