# Drawer (`cat-drawer`)

The `Drawer` component displays a sliding side panel from any side of the screen.

> **⚠️ Requirement**: This component requires `@angular/cdk@^20.2.14` as a dependency. If you use `Dialog` or `Drawer`, install CDK:
> ```bash
> npm install @angular/cdk@^20.2.14
> ```

### Import

```typescript
import { Drawer } from 'catarina';
```

### Basic usage

```typescript
import { Component } from '@angular/core';
import { Drawer } from 'catarina';

@Component({
  selector: 'app-example',
  imports: [Drawer],
  template: `
    <cat-drawer *ngIf="showDrawer" side="left" (closs)="showDrawer = false">
      <h2>Side Panel</h2>
      <p>Drawer content</p>
    </cat-drawer>
  `
})
export class ExampleComponent {
  showDrawer = true;
}
```

### Properties (Inputs)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `side` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` | Side from which the drawer slides |
| `variant` | `'surface' \| 'elevated' \| 'outlined'` | `'surface'` | Visual style of the drawer |
| `customClass` | `string` | `''` | Custom CSS class |

### Events (Outputs)

| Event | Type | Description |
|-------|------|-------------|
| `closs` | `EventEmitter<boolean>` | Emitted when the drawer is closed (always emits `false`) |

### Features

- **Close button**: Includes a close button (`x-mark`) in the top corner
- **Escape to close**: Automatically closes when pressing the `Escape` key
- **Dark background**: Shows a semi-transparent dark background that also closes the drawer on click
- **CDK Overlay**: Uses Angular CDK Overlay for automatic z-index, scroll, and accessibility management
- **Scroll blocking**: The body scroll is automatically blocked when the drawer is open
- **Better accessibility**: Automatic support for focus trap and multiple overlays management
- **Responsive**: The drawer automatically adapts based on screen size and orientation

### Sizes by side

#### Default values

- **`left` / `right`**: 30vw width, 100vh height
- **`top` / `bottom`**: 100vw width, minimum height of 10em

#### Responsive

**Mobile (portrait, max-width: 600px)**:
- **`left` / `right`**: 80vw width
- **`top` / `bottom`**: 70vh height

**Tablet or mobile (landscape, max-width: 1024px)**:
- **`left` / `right`**: 50vw width
- **`top` / `bottom`**: 50vh height

### Examples

#### Drawer Example

<example name="drawer"></example>

#### Drawer from left

```typescript
<cat-drawer *ngIf="showDrawer" side="left" (closs)="showDrawer = false">
  <h2>Side Menu</h2>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</cat-drawer>
```

#### Drawer from right

```typescript
<cat-drawer *ngIf="showDrawer" side="right" variant="elevated" (closs)="showDrawer = false">
  <h2>Settings Panel</h2>
  <p>Options here</p>
</cat-drawer>
```

#### Drawer from top

```typescript
<cat-drawer *ngIf="showDrawer" side="top" (closs)="showDrawer = false">
  <h2>Notifications</h2>
  <ul>
    <li>Notification 1</li>
  </ul>
</cat-drawer>
```

#### Drawer from bottom

```typescript
<cat-drawer *ngIf="showDrawer" side="bottom" variant="outlined" (closs)="showDrawer = false">
  <h2>Quick Actions</h2>
  <button>Action 1</button>
</cat-drawer>
```

### Notes

- The drawer must be controlled with `*ngIf` or similar to show/hide it
- The component uses CDK Overlay for rendering outside the main DOM flow
- Z-index and stacking context are automatically managed by CDK
- The body scroll is automatically blocked when the drawer is open
- The close button is absolutely positioned in the top corner
- **Version**: Since version 20.3.3, the component uses CDK Overlay instead of manual fixed positioning
