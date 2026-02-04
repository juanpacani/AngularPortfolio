import { Component } from '@angular/core';
import { Drag } from 'catarina';
import { Translate } from '../../../../../../../core/utilities/translate/translate';

@Component({
  selector: 'app-drag-example',
  imports: [Drag],
  template: `
    <div style="position: relative; width: 100%; height: 300px; border: 2px dashed var(--neutral-color-3); border-radius: 8px; padding: 1rem;">
      <div 
        CDrag 
        style="width: 150px; height: 100px; background: var(--primary-color-2); cursor: grab; display: flex; align-items: center; justify-content: center; border-radius: 8px; user-select: none;">
        Drag
      </div>
    </div>
  `,
  styles: ``
})
export class DragExample {
  static get htmlCode(): string {
    return `<div style="position: relative; width: 100%; height: 300px; border: 2px dashed var(--neutral-color-3); border-radius: 8px; padding: 1rem;">
  <div 
    Drag 
    style="width: 150px; height: 100px; background: var(--primary-color-2); cursor: grab; display: flex; align-items: center; justify-content: center; border-radius: 8px; user-select: none;">
    Arrástrame
  </div>
</div>`;
  }

  static get cssCode(): string {
    return ``;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Drag } from 'catarina';

@Component({
  selector: 'app-drag-example',
  imports: [Drag],
  template: \`
    <div style="position: relative; width: 100%; height: 300px; border: 2px dashed var(--neutral-color-3); border-radius: 8px; padding: 1rem;">
      <div 
        Drag 
        style="width: 150px; height: 100px; background: var(--primary-color-2); cursor: grab; display: flex; align-items: center; justify-content: center; border-radius: 8px; user-select: none;">
        Arrástrame
      </div>
    </div>
  \`,
  styles: \`\`
})
export class DragExample {}`;
  }
}
