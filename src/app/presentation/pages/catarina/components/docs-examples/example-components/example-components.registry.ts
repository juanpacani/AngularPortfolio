import { Type } from '@angular/core';
// Button Examples
import { ButtonVariantsExample } from './button/button-variants-example.component';
import { ButtonSizesExample } from './button/button-sizes-example.component';
import { ButtonIconsExample } from './button/button-icons-example.component';
import { ButtonStatesExample } from './button/button-states-example.component';
import { ButtonEventsExample } from './button/button-events-example.component';
// Icon Examples
import { IconBasicExample } from './icon/icon-basic-example.component';
import { IconSizesExample } from './icon/icon-sizes-example.component';
// Card Examples
import { CardVariantsExample } from './card/card-variants-example.component';
import { CardSizesExample } from './card/card-sizes-example.component';
// Accordion Examples
import { AccordionBasicExample } from './accordion/accordion-basic-example.component';
import { AccordionVariantsExample } from './accordion/accordion-variants-example.component';
import { AccordionGroupExample } from './accordion/accordion-group-example.component';
// Input Examples
import { CatInputBasicExample } from './input/cat-input-basic-example.component';
import { CatInputSizesExample } from './input/cat-input-sizes-example.component';
import { SelectInputExample } from './input/select-input-example.component';
import { ColorInputExample } from './input/color-input-example.component';
import { DateInputExample } from './input/date-input-example.component';
import { TimeInputExample } from './input/time-input-example.component';
import { PasswordInputExample } from './input/password-input-example.component';
import { FileInputExample } from './input/file-input-example.component';
import { TextAreaInputExample } from './input/text-area-input-example.component';
import { RangeInputExample } from './input/range-input-example.component';
// Overlay Examples
import { DialogVariantsExample } from './overlay/dialog-variants-example.component';
import { DrawerExample } from './overlay/drawer-example.component';
import { MenuExample } from './overlay/menu-example.component';
// Directive Examples
import { DragExample } from './directive/drag-example.component';

/**
 * Registro de componentes de ejemplo
 * Mapea nombres de ejemplo a sus componentes Type
 */
export const EXAMPLE_COMPONENTS: Map<string, Type<any>> = new Map([
  // Button Examples
  ['button-variants', ButtonVariantsExample],
  ['button-sizes', ButtonSizesExample],
  ['button-icons', ButtonIconsExample],
  ['button-states', ButtonStatesExample],
  ['button-events', ButtonEventsExample],
  // Icon Examples
  ['icon-basic', IconBasicExample],
  ['icon-sizes', IconSizesExample],
  // Card Examples
  ['card-variants', CardVariantsExample],
  ['card-sizes', CardSizesExample],
  // Accordion Examples
  ['accordion-basic', AccordionBasicExample],
  ['accordion-variants', AccordionVariantsExample],
  ['accordion-group', AccordionGroupExample],
  // Input Examples
  ['cat-input-basic', CatInputBasicExample],
  ['cat-input-sizes', CatInputSizesExample],
  ['select-input', SelectInputExample],
  ['color-input', ColorInputExample],
  ['date-input', DateInputExample],
  ['time-input', TimeInputExample],
  ['password-input', PasswordInputExample],
  ['file-input', FileInputExample],
  ['text-area-input', TextAreaInputExample],
  ['range-input', RangeInputExample],
  // Overlay Examples
  ['dialog-variants', DialogVariantsExample],
  ['drawer', DrawerExample],
  ['menu', MenuExample],
  // Directive Examples
  ['drag', DragExample],
]);

/**
 * Obtiene un componente de ejemplo por su nombre
 */
export function getExampleComponent(name: string): Type<any> | undefined {
  return EXAMPLE_COMPONENTS.get(name);
}
