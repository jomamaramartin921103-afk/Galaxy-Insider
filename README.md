# Galaxy Insider Quiz

Mini sitio web móvil para descubrir qué dispositivo Galaxy encaja mejor con cada usuario.

## Archivos

- `index.html`
- `styles.css`
- `script.js`

No requiere instalaciones, servidores ni dependencias externas.

## Publicarlo con GitHub Pages

1. Entra a GitHub e inicia sesión.
2. Crea un repositorio nuevo, por ejemplo: `galaxy-insider`.
3. Marca el repositorio como **Public**.
4. Sube `index.html`, `styles.css` y `script.js` a la raíz del repositorio.
5. Abre **Settings** → **Pages**.
6. En **Build and deployment**, selecciona:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
7. Guarda los cambios.
8. Espera uno o dos minutos. GitHub mostrará una dirección similar a:
   `https://TU-USUARIO.github.io/galaxy-insider/`

Esa dirección es la que debes convertir en código QR.

## Personalización rápida

### Cambiar el nombre del autor
Busca en `index.html`:

`Creado por José Martín Martínez · Samsung Members Star México`

### Cambiar preguntas o puntuaciones
Edita el arreglo `questions` en `script.js`.

Cada respuesta asigna puntos, por ejemplo:

```js
scores: { fold: 4, ultra: 2 }
```

### Cambiar textos de resultados
Edita el objeto `results` en `script.js`.

## Recomendación para el QR

Cuando GitHub Pages esté publicado, copia la URL final y crea un QR con cualquier generador confiable. Antes de colocarlo en la revista, pruébalo desde otro teléfono.
