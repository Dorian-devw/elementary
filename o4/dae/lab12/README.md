# 🧠 Pokédex Interactiva

Una **Pokédex moderna e interactiva** desarrollada con **React + Vite** y **TailwindCSS**, que consume la [PokéAPI](https://pokeapi.co/) para mostrar información de los Pokémon de forma dinámica, ordenada y visualmente atractiva.

![Vista previa de la Pokédex](./src/assets/preview.png)

---

## 🚀 Características principales

✅ **Búsqueda en tiempo real** — Filtra Pokémon mientras escribes  
✅ **Orden inteligente** —  
   - Por defecto: orden numérico (#id)  
   - Al escribir: orden alfabético  
   - Clic en el logo: vuelve al orden numérico  
✅ **Filtros avanzados** — Por tipo y por altura mínima/máxima  
✅ **Estadísticas visuales** — Barras animadas de HP, Ataque, Defensa y Velocidad  
✅ **Interfaz moderna** — Fondo con degradado tipo Pokédex, glassmorphism y efectos animados  
✅ **Conversión de unidades** — Altura en metros y peso en kilogramos  

---

## 🛠️ Tecnologías utilizadas

- ⚛️ [React](https://react.dev/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [TailwindCSS](https://tailwindcss.com/)
- 🌐 [PokéAPI](https://pokeapi.co/)
- 💡 JavaScript (ES6+)

---

## 📦 Instalación y uso

1. **Clona este repositorio**

   ```bash
   git clone https://github.com/dorian-devw/pokedex-interactiva.git
   cd pokedex-interactiva
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. Abre tu navegador en  
   👉 [http://localhost:5173](http://localhost:5173)

---

## 🧩 Estructura del proyecto

```
poke-lab12/
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  ├─ assets/
│  │  ├─ pokedex-logo.png
│  │  └─ preview.png
│  ├─ components/
│  │  ├─ SearchBar.jsx
│  │  ├─ PokemonList.jsx
│  │  └─ PokemonCard.jsx
│  └─ utils/
│     └─ api.js
```

---

## 🧠 Detalles técnicos

- La app obtiene los datos desde `https://pokeapi.co/api/v2/pokemon`
- La **altura** se convierte de decímetros a **metros (m)**  
- El **peso** se convierte de hectogramos a **kilogramos (kg)**
- Los **colores de tipo** se generan dinámicamente según el tipo principal
- Se usa `useDebounce` para optimizar la búsqueda en tiempo real
- TailwindCSS incluye colores personalizados:
  ```js
  pokeRed: "#ef5350",
  pokeYellow: "#ffcb05",
  pokeBlue: "#3b4cca",
  ```

---

## 🌈 Capturas recomendadas

Coloca una imagen en `src/assets/preview.png` con tu mejor captura,  
por ejemplo mostrando los primeros Pokémon con el logo visible.

```markdown
![Pokédex Interactiva](./src/assets/preview.png)
```

---

## 💡 Posibles mejoras futuras

- 🔊 Efectos de sonido al hacer clic o buscar  
- 🌙 Modo oscuro con animación invertida del degradado  
- 📱 Mejor adaptación a pantallas móviles pequeñas  
- 🧭 Detalles individuales por Pokémon (página dinámica)  
- 💾 Guardado de favoritos en localStorage  

---

## 👨‍💻 Autor

Desarrollado con ❤️ por **Dorian Sinca**  
📍 Perú — Estudiante de Diseño y Desarrollo de Software en **TECSUP**

Si te gustó este proyecto, no olvides dejar ⭐ en el repositorio :)

---

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**.  
Eres libre de usarlo, modificarlo y compartirlo citando la fuente.

---
