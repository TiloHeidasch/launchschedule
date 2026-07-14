import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-about-card",
  standalone: false,
  templateUrl: "./about-card.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./about-card.component.scss"],
})
export class AboutCardComponent {
  @Input() aboutCardDetail: AboutCardDetail;
  constructor(public placeholderService: PlaceholderService) {}
}
export interface AboutCardDetail {
  links?: AboutCardLink[];
  title?: string;
  subtitle?: string;
  content?: string;
  contentMultiLine?: string[];
  imageSrc?: string;
  image?: AboutCardImage;
}
export interface AboutCardImage {
  imageSrc: string;
  title: string;
  subtitle: string;
}
export interface AboutCardLink {
  name: string;
  link: string;
  isExternal: boolean;
}
