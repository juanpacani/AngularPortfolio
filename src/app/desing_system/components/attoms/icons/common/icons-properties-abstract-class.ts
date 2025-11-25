import { Directive, Input } from "@angular/core";

@Directive()
export abstract class iconsPropertiesAbstractClass {
    @Input() color?: string;
}