# 💒 Nicole & Luis — Sitio Web de Matrimonio

Landing page de matrimonio construida con **Next.js 14 + Tailwind CSS**.

---

## 🚀 Instalación y uso local

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev

# 3. Abrir en el navegador
http://localhost:3000
```

---

## 📁 Estructura de carpetas

```
/
├── app/
│   ├── globals.css       # Estilos globales + fuentes Google
│   ├── layout.js         # Root layout + metadata SEO
│   └── page.js           # Página principal (compone secciones)
├── components/
│   ├── Hero.js           # Portada con nombres y CTA
│   ├── MusicPlayer.js    # Botón flotante play/pause
│   ├── Countdown.js      # Cuenta regresiva en tiempo real
│   ├── Message.js        # Texto de invitación
│   ├── PhotoHero.js      # Foto principal novios
│   ├── Parents.js        # Padres de la novia y novio
│   ├── Padrinos.js       # Sección padrinos (editable)
│   ├── TheDay.js         # Fecha, hora y lugar
│   ├── Itinerary.js      # Timeline del día
│   ├── DressCode.js      # Código de vestimenta
│   ├── GiftTable.js      # Mesa de regalos (placeholder)
│   ├── RSVP.js           # Formulario confirmación
│   ├── NoKids.js         # Aviso solo adultos
│   ├── Closing.js        # Cierre + versículo + contacto
│   └── SectionWrapper.js # HOC animación scroll
├── public/
│   ├── images/           # Fotos (agregar aquí)
│   └── music/            # Archivo MP3 (agregar aquí)
```

---

## ✏️ Placeholders editables

### 🎵 Música
Coloca el archivo MP3 en:
```
/public/music/cancion.mp3
```
Ya está referenciado en `MusicPlayer.js`.

### 📸 Foto de novios
Coloca la foto en `/public/images/novios.jpg` y edita `PhotoHero.js`:
```jsx
// Reemplaza el div placeholder por:
import Image from 'next/image'
<Image src="/images/novios.jpg" fill alt="Nicole y Luis" className="object-cover" />
```

### 💍 Padrinos
Edita el array en `components/Padrinos.js`:
```js
const padrinos = [
  { rol: 'Padrino de honor', nombre: 'Nombre Real' },
  // ...
]
```

### 🎁 Mesa de regalos
En `components/GiftTable.js`, reemplaza el botón disabled:
```jsx
<a href="[LINK_MESA_REGALOS]" target="_blank" className="...">
  Ver mesa de regalos
</a>
```

### 📞 Contacto (WhatsApp + Email)
En `components/Closing.js`, edita las líneas:
```
href="https://wa.me/56XXXXXXXXX"   → número chileno real (ej: 56912345678)
href="mailto:correo@ejemplo.com"   → email real
```

---

## 🌐 Subir a GitHub

```bash
# Desde la carpeta del proyecto
git init
git add .
git commit -m "feat: sitio matrimonio Nicole & Luis"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

---

## ▲ Desplegar en Vercel

### Opción 1 — Desde el navegador (recomendado)
1. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
2. Haz clic en **"Add New Project"**
3. Importa el repositorio
4. Vercel detecta Next.js automáticamente — haz clic en **Deploy**
5. ¡Listo! Obtienes una URL pública como `nicole-luis.vercel.app`

### Opción 2 — CLI
```bash
npm i -g vercel
vercel
```

---

## 🎨 Paleta de colores

| Color | Hex | Uso |
|-------|-----|-----|
| Fucsia | `#C93A8B` | Principal / acentos |
| Coral | `#F26A4B` | Secundario / gradientes |
| Marfil | `#F8F4EE` | Fondo principal |
| Verde | `#3E5B3A` | Texto apoyo / hojas |
| Dorado | `#D8A928` | Detalles premium |

---

## 📝 Notas

- El RSVP aún **no tiene backend**. Para conectarlo más adelante: Supabase o Resend.
- El formulario muestra mensaje de éxito simulado.
- La música **no se reproduce automáticamente** (requiere interacción del usuario).
