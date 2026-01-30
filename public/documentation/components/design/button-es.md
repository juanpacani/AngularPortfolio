# Button (`cat-button`)

El componente `Button` es un botón versátil con soporte para iconos, múltiples variantes y tamaños.

### Importación

```typescript
import { Button } from 'catarina';
```

### Uso básico

```typescript
import { Component } from '@angular/core';
import { Button } from 'catarina';

@Component({
  selector: 'app-example',
  imports: [Button],
  template: `
    <cat-button>Click me</cat-button>
  `
})
export class ExampleComponent {}
```

### Propiedades (Inputs)

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'contrast' \| 'outline' \| 'ghost'` | `'primary'` | Estilo visual del botón |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del botón |
| `disabled` | `boolean` | `false` | Deshabilita el botón |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Tipo de botón HTML |
| `iconLeft` | `string?` | `undefined` | Nombre del icono a mostrar a la izquierda |
| `iconCenter` | `string?` | `undefined` | Nombre del icono a mostrar en el centro |
| `iconRight` | `string?` | `undefined` | Nombre del icono a mostrar a la derecha |
| `customClass` | `string` | `''` | Clase CSS personalizada |

### Eventos (Outputs)

| Evento | Tipo | Descripción |
|--------|------|-------------|
| `clicked` | `EventEmitter<MouseEvent>` | Se emite cuando se hace clic en el botón (solo si no está deshabilitado) |

### Variantes

- **`primary`**: Botón principal con color de acento
- **`secondary`**: Botón secundario con estilo más sutil
- **`contrast`**: Botón con alto contraste
- **`outline`**: Botón con borde y fondo transparente
- **`ghost`**: Botón completamente transparente, solo muestra el texto/icono

### Tamaños

- **`sm`**: Pequeño (iconos de 16px)
- **`md`**: Mediano (iconos de 20px) - por defecto
- **`lg`**: Grande (iconos de 24px)

### Ejemplos

#### Variantes

<example name="button-variants"></example>

#### Tamaños

<example name="button-sizes"></example>

#### Con Iconos

<example name="button-icons"></example>

#### Estados

<example name="button-states"></example>

#### Eventos de Click

<example name="button-events"></example>

#### Botón de tipo submit

```typescript
<cat-button type="submit" variant="primary">
  Enviar formulario
</cat-button>
```

#### Botón con clase personalizada

```typescript
<cat-button customClass="my-custom-button" variant="primary">
  Personalizado
</cat-button>
```

```scss
cat-button[data-button-class="my-custom-button"] {
  ::ng-deep {
    > button {
      border-radius: 50px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }
}
```

### Notas

- Los iconos se cargan mediante el `ICON_PROVIDER` configurado
- El tamaño de los iconos se ajusta automáticamente según el `size` del botón
- El evento `clicked` no se emite si el botón está `disabled`
- El componente expone `data-button-class` como atributo para estilos personalizados
