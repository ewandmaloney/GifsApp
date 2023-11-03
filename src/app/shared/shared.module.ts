import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSidebarComponent } from './components/shared-sidebar/shared-sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SharedSidebarComponent,
    LazyImageComponent
  ],
  exports: [SharedSidebarComponent,
    LazyImageComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
