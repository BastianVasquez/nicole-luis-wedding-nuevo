/**
 * Google Apps Script — recibe confirmaciones de RSVP desde la web y las
 * escribe en una Google Sheet. Ejecuta bajo la cuenta de Google de quien
 * despliega el script, así que las credenciales de Google NUNCA quedan
 * expuestas en el frontend: la web solo conoce la URL pública de este
 * Web App, no ninguna clave.
 *
 * INSTALACIÓN (ver instrucciones detalladas en el README):
 * 1. Crea una Google Sheet nueva (o usa una existente).
 * 2. Extensiones → Apps Script.
 * 3. Borra el contenido de Code.gs y pega este archivo completo.
 * 4. Implementar → Nueva implementación → tipo "Aplicación web".
 *    - Ejecutar como: Yo (tu cuenta)
 *    - Quién tiene acceso: Cualquier usuario
 * 5. Copia la URL que te entrega (".../exec") y pégala como
 *    NEXT_PUBLIC_APPS_SCRIPT_URL en Vercel (Settings → Environment Variables).
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var resumen = sheet.getSheetByName('Resumen') || sheet.insertSheet('Resumen');
  var detalle = sheet.getSheetByName('Invitados') || sheet.insertSheet('Invitados');

  if (resumen.getLastRow() === 0) {
    resumen.appendRow(['Fecha', 'Slug', 'Invitación', 'Cupos', 'Asistentes confirmados', 'Cantidad', 'Estado', 'Comentarios']);
  }
  if (detalle.getLastRow() === 0) {
    detalle.appendRow(['Fecha', 'Slug', 'Invitación', 'Invitado', 'Asistencia']);
  }

  var data = JSON.parse(e.postData.contents);

  resumen.appendRow([
    data.fecha,
    data.slug,
    data.invitacion,
    data.cupos,
    (data.asistentes || []).join(', '),
    data.cantidadAsistentes,
    data.estado,
    data.comentarios || ''
  ]);

  // Una fila por persona, marcando si esa persona específica asistirá o no,
  // para que sea fácil filtrar en la planilla quién confirmó.
  var cuposTotales = data.cupos;
  var asistentesSet = {};
  (data.asistentes || []).forEach(function (nombre) { asistentesSet[nombre] = true; });

  if (data.todosLosNombres) {
    data.todosLosNombres.forEach(function (nombre) {
      detalle.appendRow([data.fecha, data.slug, data.invitacion, nombre, asistentesSet[nombre] ? 'Sí' : 'No']);
    });
  } else {
    (data.asistentes || []).forEach(function (nombre) {
      detalle.appendRow([data.fecha, data.slug, data.invitacion, nombre, 'Sí']);
    });
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
