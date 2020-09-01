import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlideInDirective } from "./slide-in.directive";

@NgModule({
  declarations: [SlideInDirective],
  imports: [CommonModule],
  exports: [SlideInDirective],
})
export class AnimationModule {}
