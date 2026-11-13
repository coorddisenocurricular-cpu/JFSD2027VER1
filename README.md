# Jornada de Formación y Superación Docente UVP

Sitio estático para GitHub Pages, catálogo derivado del archivo de trabajo y formulario conectado a Google Apps Script.

## Archivos

- `index.html`: página, agenda, filtros, selección de sesiones, formulario, preguntas frecuentes y contador.
- `catalog.json`: snapshot público de la oferta, el calendario y las opciones de registro del Excel fuente.
- `Code.gs`: endpoint de Apps Script. Guarda inscripciones y devuelve únicamente indicadores agregados.

No publiques el Excel original ni el ZIP de identidad junto con el sitio. El catálogo no contiene nombres ni registros de profesores.

## Conectar el registro

Apps Script escribe en una **hoja de cálculo de Google**, no directamente en un archivo `.xlsx`. Para conservar el libro fuente:

1. Importa `Puebla_JFSD_Ene27_completada.xlsx` a Google Drive y ábrelo/guárdalo como hoja de cálculo de Google.
2. Desde esa hoja, abre **Extensiones → Apps Script** y copia el contenido de `Code.gs` en el editor. Guarda el proyecto.
3. En el editor, ejecuta `authorizeServices` una vez y autoriza el acceso a la hoja y al envío de correo. Se creará la pestaña privada `Inscripciones`.
4. Despliega **Implementar → Nueva implementación → Aplicación web**. Elige ejecutar como tu cuenta. Configura el acceso de acuerdo con las políticas de la UVP; una página pública necesita que el endpoint acepte a sus visitantes.
5. Copia la URL publicada terminada en `/exec` y reemplaza `PEGA_AQUI_URL_WEB_APP` en `index.html` por esa URL.
6. Publica `index.html` y `catalog.json` en GitHub Pages. `Code.gs` puede mantenerse en el repositorio como fuente, pero nunca publiques ni compartas la hoja de cálculo de inscripciones.

Al registrar una persona, Apps Script agrega o actualiza la fila asociada a su clave docente. Valida cupos y horarios bajo un bloqueo para evitar sobreinscripciones, guarda una sola fila por clave y trata de enviar una confirmación por correo. El sitio consulta los totales mediante JSONP y envía el formulario en un iframe; no expone nombres, correos ni claves en el contador público.

La clave docente y el correo son datos declarados por quien llena el formulario; esta integración no autentica la identidad institucional. La coordinación debe definir quién administra la hoja, su retención y el aviso de privacidad institucional antes de abrir el registro. Si el dominio UVP no permite acceso público a Apps Script, se necesitará un endpoint aprobado por TI.

## Datos y criterios del libro

- El catálogo incluye las 66 propuestas de la pestaña `Propuesta`, las 53 sesiones con horario que se encontraron en `Calendarización`, cinco cursos autogestivos y las preguntas frecuentes disponibles.
- Las 12 propuestas restantes se muestran como pendientes de calendarización y no admiten inscripción hasta tener horario/cupo.
- El calendario se presenta del 21 de diciembre de 2026 al 15 de enero de 2027, según los días y semanas del libro.
- `Cupos` declara 2,570 cupos proyectados. La suma de los cupos de sesiones calendarizadas/autogestivas que usa el endpoint es 2,200; las capacidades de propuestas sin horario no se ofrecen para reservar. Por eso el sitio distingue los cupos planeados del Excel de los lugares por sesión.
- Al cambiar fechas, sesiones o cupos, actualiza tanto `catalog.json` como `SESSION_ROWS` en `Code.gs` para que la página y la validación del servidor permanezcan sincronizadas. Para cerrar inscripciones, cambia `REGISTRATION_OPEN` a `false` y vuelve a desplegar una nueva versión de Apps Script.

## Vista previa local

Como el catálogo se carga con `fetch`, sirve la carpeta por HTTP en lugar de abrir `index.html` directamente:

```powershell
cd sitio-jornada
python -m http.server 8000
```

Abre `http://localhost:8000`. Antes de configurar Apps Script, el contador indicará que la conexión está pendiente y el formulario no enviará datos.
