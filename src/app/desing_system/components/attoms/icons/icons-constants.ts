import { Directive, Input } from "@angular/core";

@Directive()
export abstract class IconsConstants {
    @Input() color?: string;
}