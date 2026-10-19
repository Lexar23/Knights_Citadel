# Builds de jefes (JSON)

Cada jefe tiene su archivo `<id>.json`. Para cambiar la build de una galleta en un
jefe, edita su entrada en `team`. Al guardar, la página se actualiza sola en `pnpm dev`;
si algo está mal escrito, el build muestra un error indicando el archivo y el campo.

Para agregar un jefe nuevo: crea su JSON e impórtalo en `src/Data/Bosses.ts`.

## Estructura

```jsonc
{
  "id": "living-abyss",            // también es la URL: /jefes/living-abyss
  "name": "The Living Abyss",
  "siglas": "LLA",
  "url": "/jefes/living-abyss",
  "img": "/Assets/enemies/LLA.webp",
  "listImg": "/Assets/enemies/silhouette/LLA.webp",   // opcional, solo en /jefes
  "background": "/Assets/backgrounds/bossBackgrounds/ADR_bg.webp",
  "treasures": ["red", "pergamino", "speed"],   // T1, T2, T3
  "treasureNote": "texto opcional",
  "team": [                         // C1 … C5
    {
      "cookieId": "BBP",            // id de src/Data/cookies.ts
      "focus": "Daño de Monstruos", // opcional
      "notes": ["nota de la galleta"],
      "builds": [                   // 1 o más builds (aparecen como pestañas)
        {
          "name": "Build 1",        // opcional
          "biscuit": "4 Daño Eléctrico",
          "tart": "apple",          // opcional; si falta se usa el primer topping
          "setLabel": "X2/2/2",     // opcional; si falta se calcula
          "toppings": [             // deben sumar 5
            { "type": "apple", "count": 1 },
            { "type": "raspberry", "count": 2 },
            { "type": "caramel", "count": 2 }
          ],
          "stats": [
            { "label": "ATK SPD", "value": "33.1%", "key": true },
            { "label": "Crit", "value": "34%", "note": "opcional" }
          ],
          "notes": ["nota de esta build"]
        }
      ]
    }
  ],
  "notes": ["Notas importantes…"],
  "timing": ["Paso 1…", "Paso 2…"],
  "credit": { "author": "Camera04", "contacts": [{ "label": "Discord", "value": "@Camera04_" }], "note": "…" }
}
```

## Valores válidos

- **Toppings / tarta:** `raspberry` (ATK), `chocolate` (CD), `apple` (Crit), `caramel` (ATK SPD),
  `almond` (DMR), `peanut` (HP), `candy` (Amp Buff), `kiwi` (Debuff Res), `hazelnut`, `walnut` (DEF).
- **Tesoros:** `red` (Silbato Carmesí), `silbato` (Silbato Azul), `pergamino`, `reloj` (Reloj Común), `speed` (Reloj Azul).
- **Galletas:** cualquier id de `src/Data/cookies.ts` (ej. `CF`, `MC`, `WA`, `MB`, `PJ`…).
- `"key": true` marca un stat como objetivo clave.

## Imágenes de galletas

No se escriben en el JSON: se buscan por el id de la galleta (`cookieId`) con el nombre
`<ID>_Cookie.webp` (solo formato WEBP), cambiando solo la carpeta:

| Carpeta | Uso |
|---|---|
| `public/Assets/cookies/Heads/` | Selector C1–C5 (1ª opción) |
| `public/Assets/cookies/illustration/` | Imagen de la build (1ª opción) y selector (3ª) |
| `public/Assets/cookies/` | Selector (2ª opción) y build (2ª opción) |

- **Selector C1–C5:** cabeza → raíz → ilustración.
- **Build:** ilustración → raíz.
- Si no hay ninguna, se muestran las iniciales de la galleta.
