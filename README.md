# 💒 Nicole & Luis — Sitio Web de Matrimonio

Invitación digital de matrimonio construida con **Next.js 14 + Tailwind CSS**.
Boda: **27 de febrero de 2027**.

---

## 🚀 Instalación y uso local

```bash
npm install
npm run dev
# Abrir http://localhost:3000
```

---

## 📁 Estructura de carpetas

```
/
├── app/
│   ├── page.js                    # Invitación genérica (dominio raíz, sin invitado)
│   ├── invitacion/[slug]/page.js  # Invitación personalizada por invitado
│   ├── layout.js
│   └── globals.css
├── data/
│   └── guests.js                  # ⭐ ÚNICO archivo a editar para agregar invitados
├── components/                    # Todas las secciones de la invitación
├── google-apps-script/
│   └── Code.gs                    # Script para recibir RSVP en Google Sheets
├── public/
│   ├── images/                    # Fotos de los novios
│   └── familia/                   # Fotos de padres/padrinos
```

---

## 👥 Sistema de invitados por link personalizado

Cada invitado recibe un link único, por ejemplo:

```
https://tudominio.com/invitacion/maria-gonzalez
```

Para agregar, editar o quitar invitados, **solo edita `data/guests.js`**.
Los cupos se calculan automáticamente según la cantidad de nombres — no hay
que declararlos por separado.

El dominio raíz (`https://tudominio.com/`) muestra una invitación genérica
sin RSVP habilitado (no sabe a quién pertenece), invitando a usar el link
personal.

---

## 📊 Confirmaciones de asistencia → Google Sheets

Las confirmaciones se envían mediante un **Google Apps Script Web App**, así
que las credenciales de Google nunca quedan expuestas en la web — el
frontend solo conoce la URL pública del Web App.

1. Crea una Google Sheet nueva.
2. Extensiones → Apps Script → pega el contenido de `google-apps-script/Code.gs`.
3. Implementar → Nueva implementación → tipo "Aplicación web" (ejecutar como
   tú, acceso "Cualquier usuario").
4. Copia la URL `.../exec` que te entrega.
5. En Vercel: Settings → Environment Variables → agrega
   `NEXT_PUBLIC_APPS_SCRIPT_URL` con esa URL → Redeploy.

Ver `.env.example` para el nombre exacto de la variable.

---

## 🎨 Paleta de colores

| Color | Hex | Uso |
|-------|-----|-----|
| Midnight Blue | `#273462` | Principal / CTA |
| Smore Blue | `#045490` | Secundario |
| Coastal | `#84B7CE` | Elementos suaves/decorativos |
| Limoncello | `#FFF08C` | Acentos |

---

## 📝 Notas

- No hay reproductor de música (se eliminó por completo).
- No hay botón/enlace de correo (se eliminó por completo).
- La sección "Foto final" usa `/public/images/foto-final.jpg` como
  placeholder — súbela con ese nombre exacto cuando la tengas.
