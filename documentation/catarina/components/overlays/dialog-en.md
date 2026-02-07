# Dialog (`cat-dialog`)

The `Dialog` component displays a draggable modal dialog box.

> **⚠️ Requirement**: This component requires `@angular/cdk@^20.2.14` as a dependency. If you use `Dialog` or `Drawer`, install CDK:
> ```bash
> npm install @angular/cdk@^20.2.14
> ```

### Import

```typescript
import { Dialog } from 'catarina';
```

### Basic usage

```typescript
import { Component } from '@angular/core';
import { Dialog } from 'catarina';

@Component({
  selector: 'app-example',
  imports: [Dialog],
  template: `
    <cat-dialog *ngIf="showDialog" (closs)="showDialog = false">
      <h2>Dialog Title</h2>
      <p>Dialog content</p>
    </cat-dialog>
  `
})
export class ExampleComponent {
  showDialog = true;
}
```

### Properties (Inputs)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'surface' \| 'outlined' \| 'elevated'` | `'surface'` | Visual style of the dialog |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Dialog size |
| `customClass` | `string` | `''` | Custom CSS class |

### Events (Outputs)

| Event | Type | Description |
|-------|------|-------------|
| `closs` | `EventEmitter<boolean>` | Emitted when the dialog is closed (always emits `false`) |

### Features

- **Draggable**: The dialog includes the `CDrag` directive to make it draggable
- **Escape to close**: Automatically closes when pressing the `Escape` key
- **Dark background**: Shows a semi-transparent dark background that also closes the dialog on click
- **CDK Overlay**: Uses Angular CDK Overlay for automatic z-index, scroll, and accessibility management
- **Scroll blocking**: The body scroll is automatically blocked when the dialog is open
- **Better accessibility**: Automatic support for focus trap and multiple overlays management

### Examples

#### Dialog Variants

<example name="dialog-variants"></example>

#### Basic dialog

```typescript
<cat-dialog *ngIf="showDialog" (closs)="showDialog = false">
  <h2>My Dialog</h2>
  <p>Content here</p>
</cat-dialog>
```

#### Dialog with variant

```typescript
<cat-dialog 
  *ngIf="showDialog" 
  variant="elevated" 
  size="lg"
  (closs)="showDialog = false">
  <h2>Elevated Dialog</h2>
  <p>With shadow and large size</p>
</cat-dialog>
```

#### Dialog with custom class

```typescript
<cat-dialog 
  *ngIf="showDialog" 
  customClass="my-dialog"
  (closs)="showDialog = false">
  <h2>Custom Dialog</h2>
  <p>With custom styles</p>
</cat-dialog>
```

### Notes

- The dialog must be controlled with `*ngIf` or similar to show/hide it
- The component uses CDK Overlay for rendering outside the main DOM flow
- Z-index and stacking context are automatically managed by CDK
- The body scroll is automatically blocked when the dialog is open
- The dialog is draggable by default thanks to the `CDrag` directive
- **Version**: Since version 20.3.3, the component uses CDK Overlay instead of manual fixed positioning