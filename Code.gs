const SHEET_NAME = "Inscripciones";
const REGISTRATION_OPEN = true;
const MIN_COURSES = 3;
const HEADERS = [
  "Fecha de registro", "Folio", "Nombre completo", "Correo", "Plantel",
  "División o área", "Tipo de personal", "Nivel académico", "Nivel de posgrado",
  "Programa(s)", "Antigüedad UVP", "Clave docente o administrativa",
  "Sesiones (IDs JSON)", "Consentimiento de privacidad"
];

const SESSION_ROWS = [
  [
    "D3V-2026-12-21-b1-c3",
    "D3V",
    50,
    "2026-12-21",
    1,
    "Dise\u00f1o de instrumentos de evaluaci\u00f3n en la era digital, innovaci\u00f3n y eficiencia con IA",
    "09:00-12:00",
    "Virtual",
    "ZOOM (no necesitan aula)"
  ],
  [
    "B4V-2026-12-21-b1-c4",
    "B4V",
    50,
    "2026-12-21",
    1,
    "Estrategias de ciberseguridad",
    "09:00-12:00",
    "Virtual",
    ""
  ],
  [
    "PS9P-2026-12-21-b3-c10",
    "PS9P",
    30,
    "2026-12-21",
    3,
    "\u00bfC\u00f3mo ayudar a que el estudiante gestione sus emociones durante la clase desde una perspectiva acad\u00e9mica?",
    "15:00-18:00",
    "Presencial",
    "Aula 6003"
  ],
  [
    "T6P-2026-12-22-b1-c3",
    "T6P",
    30,
    "2026-12-22",
    1,
    "Realidad extendida y simulaci\u00f3n inmersiva en el aula",
    "09:00-12:00",
    "Presencial",
    "Lab. de Comp. 01 Complejo Teocalli"
  ],
  [
    "D1V-2026-12-22-b2-c7",
    "D1V",
    50,
    "2026-12-22",
    2,
    "Momentos Clave: Estructurando la evaluaci\u00f3n en el aula y estrategias de retroalimentaci\u00f3n efectiva",
    "12:00-14:00",
    "Virtual",
    "ZOOM (no necesita aula)"
  ],
  [
    "P11P-2026-12-28-b1-c3",
    "P11P",
    30,
    "2026-12-28",
    1,
    "Empoderamiento y autoridad asertiva en el aula",
    "09:00-12:00",
    "Presencial",
    "Aula 6003"
  ],
  [
    "D2P-2026-12-28-b3-c10",
    "D2P",
    30,
    "2026-12-28",
    3,
    "Pausas activas y t\u00e9cnicas de mindfulness o atenci\u00f3n plena en el aula",
    "15:00-18:00",
    "Presencial",
    "Aula 6003"
  ],
  [
    "P5V-2026-12-29-b2-c7",
    "P5V",
    50,
    "2026-12-29",
    2,
    "Dise\u00f1o de instrumentos inclusivos y retroalimentaci\u00f3n efectiva",
    "12:00-14:00",
    "Virtual",
    "ZOOM (no necesita aula)"
  ],
  [
    "PS10P-2026-12-29-b3-c10",
    "PS10P",
    30,
    "2026-12-29",
    3,
    "Primeros Auxilios Psicol\u00f3gicos y Gesti\u00f3n de Crisis en el Aula",
    "15:00-18:00",
    "Presencial",
    "Aula 6003"
  ],
  [
    "F2V-2027-01-04-b2-c7",
    "F2V",
    50,
    "2027-01-04",
    2,
    "La \u00e9tica del cuidado en la docencia, humanizando la educaci\u00f3n desde la empat\u00eda y la coresponsabilidad",
    "12:00-14:00",
    "Virtual",
    "ZOOM (no necesita aula)"
  ],
  [
    "PS11P-2027-01-04-b3-c10",
    "PS11P",
    30,
    "2027-01-04",
    3,
    "Salud mental y bienestar digital en el docente: ansiedad, atenci\u00f3n y uso de pantallas",
    "15:00-18:00",
    "Presencial",
    "Aula 6003"
  ],
  [
    "P10P-2027-01-04-b3-c11",
    "P10P",
    30,
    "2027-01-04",
    3,
    "Metodolog\u00edas activas en la educaci\u00f3n superior: aprendizaje basado en retos, investigaci\u00f3n y servicio",
    "15:00-18:00",
    "Presencial",
    "Aula 6004"
  ],
  [
    "T2P-2027-01-05-b1-c3",
    "T2P",
    15,
    "2027-01-05",
    1,
    "Introducci\u00f3n a la IA ag\u00e9ntica (AULA MOVIL 6303)",
    "09:00-12:00",
    "Presencial",
    "Aula 6303"
  ],
  [
    "D4P-2027-01-05-b1-c4",
    "D4P",
    30,
    "2027-01-05",
    1,
    "Proyectos formativos y retroalimentaci\u00f3n efectiva",
    "09:00-12:00",
    "Presencial",
    "Aula 6104"
  ],
  [
    "P6P-2027-01-05-b1-c5",
    "P6P",
    20,
    "2027-01-05",
    1,
    "Arte-terapia en el aula: creatividad, expresi\u00f3n y bienestar",
    "09:00-12:00",
    "Presencial",
    "\u00c1gora Teocalli"
  ],
  [
    "F3V-2027-01-05-b2-c7",
    "F3V",
    50,
    "2027-01-05",
    2,
    "Dilemas \u00e9ticos que viven los docentes, dialogos reflexivos para concretar criterios para tomar decisiones",
    "12:00-14:00",
    "Virtual",
    "ZOOM (no necesita aula)"
  ],
  [
    "T1P-2027-01-05-b3-c10",
    "T1P",
    30,
    "2027-01-05",
    3,
    "Tecnolog\u00eda para educar, manejo b\u00e1sico de equipos y proyectores",
    "15:00-18:00",
    "Presencial",
    "Lab. de Comp. 01 Complejo Teocalli"
  ],
  [
    "SO3P-2027-01-05-b3-c11",
    "SO3P",
    30,
    "2027-01-05",
    3,
    "Prevenci\u00f3n del Burnout y Autocuidado: Reflexi\u00f3n entre Pares y Salud Ocupacional Docente",
    "15:00-18:00",
    "Presencial",
    "Aula 6104"
  ],
  [
    "T2P-2027-01-07-b1-c3",
    "T2P",
    15,
    "2027-01-07",
    1,
    "Introducci\u00f3n a la IA ag\u00e9ntica (AULA MOVIL 6303)",
    "09:00-12:00",
    "Presencial",
    "Aula 6303"
  ],
  [
    "D5P-2027-01-07-b1-c4",
    "D5P",
    30,
    "2027-01-07",
    1,
    "Estrategias did\u00e1cticas para motivar al estudiante universitario",
    "09:00-12:00",
    "Presencial",
    "Aula 6104"
  ],
  [
    "P2V-2027-01-07-b1-c5",
    "P2V",
    50,
    "2027-01-07",
    1,
    "Dise\u00f1o Universal del Aprendizaje (DUA).",
    "09:00-12:00",
    "Virtual",
    ""
  ],
  [
    "G1V-2027-01-07-b2-c7",
    "G1V",
    50,
    "2027-01-07",
    2,
    "Protocolos de atenci\u00f3n ante situaciones de g\u00e9nero, violencia o discriminaci\u00f3n de la UVP",
    "12:00-14:00",
    "Virtual",
    ""
  ],
  [
    "E8V-2027-01-07-b3-c10",
    "E8V",
    50,
    "2027-01-07",
    3,
    "Bioinform\u00e1tica aplicada a las ciencias biom\u00e9dicas",
    "15:00-18:00",
    "Virtual",
    "ZOOM (no necesita aula)"
  ],
  [
    "F8P-2027-01-08-b1-c3",
    "F8P",
    30,
    "2027-01-08",
    1,
    "Humanismo y formaci\u00f3n integral: el sentido de educar en la universidad",
    "09:00-12:00",
    "Presencial",
    "Aula 6003"
  ],
  [
    "PS6P-2027-01-08-b1-c5",
    "PS6P",
    30,
    "2027-01-08",
    1,
    "Laboratorio de soluciones: t\u00e9cnicas para manejar conflictos en el aula",
    "09:00-12:00",
    "Presencial",
    "Aula 6004"
  ],
  [
    "T5V-2027-01-08-b2-c7",
    "T5V",
    50,
    "2027-01-08",
    2,
    "Gamificaci\u00f3n en la educaci\u00f3n: recomendaciones para introducirla en el aula",
    "12:00-14:00",
    "Virtual",
    "ZOOM (no necesita aula)"
  ],
  [
    "P3V-2027-01-08-b2-c8",
    "P3V",
    50,
    "2027-01-08",
    2,
    "Retos y posibilidades del DUA en los materiales digitales",
    "12:00-14:00",
    "Virtual",
    ""
  ],
  [
    "T3P-2027-01-08-b3-c10",
    "T3P",
    30,
    "2027-01-08",
    3,
    "Conoce la nueva plataforma UVP Online",
    "15:00-18:00",
    "Presencial",
    "Lab. de Comp. 01 Complejo Teocalli"
  ],
  [
    "SO5P-2027-01-08-b3-c11",
    "SO5P",
    30,
    "2027-01-08",
    3,
    "Prevenci\u00f3n de la discriminaci\u00f3n y promoci\u00f3n de la inclusi\u00f3n en el aula universitaria",
    "15:00-18:00",
    "Presencial",
    "Aula 6104"
  ],
  [
    "E2V-2027-01-08-b3-c12",
    "E2V",
    50,
    "2027-01-08",
    3,
    "Aprende a usar Power BI",
    "15:00-18:00",
    "Virtual",
    "ZOOM"
  ],
  [
    "F6P-2027-01-11-b1-c4",
    "F6P",
    30,
    "2027-01-11",
    1,
    "Repensar la ense\u00f1anza universitaria: hacia experiencias de aprendizaje significativo.",
    "09:00-12:00",
    "Presencial",
    "Aula 6003"
  ],
  [
    "PS4P-2027-01-11-b1-c5",
    "PS4P",
    30,
    "2027-01-11",
    1,
    "Neurociencia del aprendizaje y neuronas espejo: aplicaciones en la ense\u00f1anza universitaria.",
    "09:00-12:00",
    "Presencial",
    "Aula 6004"
  ],
  [
    "T7V-2027-01-11-b2-c7",
    "T7V",
    50,
    "2027-01-11",
    2,
    "Gesti\u00f3n de aulas virtuales y generaci\u00f3n de evidencias online",
    "12:00-14:00",
    "Virtual",
    "ZOOM (no necesita aula)"
  ],
  [
    "SO2V-2027-01-11-b3-c10",
    "SO2V",
    50,
    "2027-01-11",
    3,
    "Pedagog\u00eda de la esperanza, repensando la docencia desde otra mirada.",
    "15:00-18:00",
    "Virtual",
    "ZOOM (no necesita aula)"
  ],
  [
    "E3V-2027-01-11-b3-c11",
    "E3V",
    50,
    "2027-01-11",
    3,
    "Terapias alternativas para especies de grande porte (solicitud de la coordinaci\u00f3n de veterinaria de Tehuac\u00e1n)",
    "15:00-18:00",
    "Virtual",
    ""
  ],
  [
    "PS2V-2027-01-11-b3-c12",
    "PS2V",
    50,
    "2027-01-11",
    3,
    "Estrategias para disminuir las Barreras de Aprendizaje y Participaci\u00f3n en la universidad",
    "15:00-18:00",
    "Virtual",
    ""
  ],
  [
    "T2P-2027-01-12-b1-c3",
    "T2P",
    15,
    "2027-01-12",
    1,
    "Introducci\u00f3n a la IA ag\u00e9ntica (AULA MOVIL 6303)",
    "09:00-12:00",
    "Presencial",
    "Aula 6303"
  ],
  [
    "PS5P-2027-01-12-b1-c4",
    "PS5P",
    30,
    "2027-01-12",
    1,
    "Incognita, \u00bfmi ense\u00f1anza docente es un ejemplo para mis estudiantes?",
    "09:00-12:00",
    "Presencial",
    "Aula 6104"
  ],
  [
    "PS3V-2027-01-12-b1-c5",
    "PS3V",
    50,
    "2027-01-12",
    1,
    "M\u00e1s all\u00e1 de la etiqueta, comprendiendo a las personas neurodivergentes en el aula",
    "09:00-12:00",
    "Virtual",
    "ZOOM (no necesita aula)"
  ],
  [
    "SO1V-2027-01-12-b2-c7",
    "SO1V",
    50,
    "2027-01-12",
    2,
    "Herramientas educativas para tejer la perspectiva de g\u00e9nero en el aula",
    "12:00-14:00",
    "Virtual",
    "ZOOM (no necesita aula)"
  ],
  [
    "T4P-2027-01-12-b3-c10",
    "T4P",
    30,
    "2027-01-12",
    3,
    "Dise\u00f1ar con IA, no con prompts: taller de producci\u00f3n de materiales de clase",
    "15:00-18:00",
    "Presencial",
    "Lab. de Comp. 01 Complejo Teocalli"
  ],
  [
    "P4P-2027-01-12-b3-c11",
    "P4P",
    30,
    "2027-01-12",
    3,
    "Aprendizaje basado en juegos, rol y narrativa: escape rooms, simulaciones y juegos de mesa educativos",
    "15:00-18:00",
    "Presencial",
    "\u00c1gora Teocalli"
  ],
  [
    "T10P-2027-01-14-b1-c3",
    "T10P",
    15,
    "2027-01-14",
    1,
    "Programaci\u00f3n Asistida con IA",
    "09:00-12:00",
    "Presencial",
    "Aula 6303"
  ],
  [
    "P9P-2027-01-14-b1-c4",
    "P9P",
    30,
    "2027-01-14",
    1,
    "Estrategias para la ense\u00f1anza y el aprendizaje en el \u00e1rea de la salud",
    "09:00-12:00",
    "Presencial",
    "Aula 6104"
  ],
  [
    "E8V-2027-01-14-b3-c10",
    "E8V",
    50,
    "2027-01-14",
    3,
    "Bioinform\u00e1tica aplicada a las ciencias biom\u00e9dicas",
    "15:00-18:00",
    "Virtual",
    "ZOOM (no necesita aula)"
  ],
  [
    "P7P-2027-01-14-b3-c11",
    "P7P",
    20,
    "2027-01-14",
    3,
    "Teatro aplicado e improvisaci\u00f3n para la docencia: voz, escucha y presencia",
    "15:00-18:00",
    "Presencial",
    "\u00c1gora Teocalli"
  ],
  [
    "P8P-2027-01-15-b1-c3",
    "P8P",
    30,
    "2027-01-15",
    1,
    "Metodolog\u00edas activas para grupos numerosos",
    "09:00-12:00",
    "Presencial",
    "Aula 6003"
  ],
  [
    "D6P-2027-01-15-b1-c4",
    "D6P",
    30,
    "2027-01-15",
    1,
    "El uso responsable de la IA en estudiantes",
    "09:00-12:00",
    "Presencial",
    "Aula 6004"
  ],
  [
    "G2V-2027-01-15-b2-c7",
    "G2V",
    50,
    "2027-01-15",
    2,
    "Protocolos de seguridad y actuaci\u00f3n ante emergencias de la UVP",
    "12:00-14:00",
    "Virtual",
    "ZOOM (no necesita aula)"
  ],
  [
    "PS8V-2027-01-15-b2-c8",
    "PS8V",
    50,
    "2027-01-15",
    2,
    "Inteligencia emocional y autorregulaci\u00f3n en la pr\u00e1ctica docente",
    "12:00-14:00",
    "Virtual",
    ""
  ],
  [
    "E2V-2027-01-15-b3-c10",
    "E2V",
    50,
    "2027-01-15",
    3,
    "Aprende a usar Power BI",
    "15:00-18:00",
    "Virtual",
    "ZOOM"
  ],
  [
    "TA1P-2027-01-15-b3-c11",
    "TA1P",
    30,
    "2027-01-15",
    3,
    "Genially en Acci\u00f3n micrositios e Im\u00e1genes Interactivas",
    "15:00-18:00",
    "Presencial",
    "Aula 6104"
  ],
  [
    "D7P-2027-01-15-b3-c12",
    "D7P",
    30,
    "2027-01-15",
    3,
    "Enfoque de competencias en el proceso ense\u00f1anza-aprendizaje",
    "15:00-18:00",
    "Presencial",
    "Aula 6105"
  ],
  [
    "B1O-asincrono",
    "B1O",
    50,
    "",
    0,
    "El ABC del Docente Universitario",
    "Autogestivo",
    "Online (plataforma)",
    "Plataforma UVP Online"
  ],
  [
    "B2O-asincrono",
    "B2O",
    50,
    "",
    0,
    "Ser docente UVP",
    "Autogestivo",
    "Online (plataforma)",
    "Plataforma UVP Online"
  ],
  [
    "B3O-asincrono",
    "B3O",
    50,
    "",
    0,
    "Modelo Educativo Tlamatini",
    "Autogestivo",
    "Online (plataforma)",
    "Plataforma UVP Online"
  ],
  [
    "B5O-asincrono",
    "B5O",
    50,
    "",
    0,
    "Construcci\u00f3n de Entornos Virtuales de Aprendizaje en UVP Online",
    "Autogestivo",
    "Online (plataforma)",
    "Plataforma UVP Online"
  ],
  [
    "B6O-asincrono",
    "B6O",
    50,
    "",
    0,
    "Competencias Tecnol\u00f3gicas - Workspaces",
    "Autogestivo",
    "Online (plataforma)",
    "Plataforma UVP Online"
  ]
];

function doGet(e) {
  const callback = e && e.parameter ? String(e.parameter.callback || "") : "";
  if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(callback)) {
    return ContentService.createTextOutput("Callback JSONP inválido.")
      .setMimeType(ContentService.MimeType.TEXT);
  }
  try {
    const data = getPublicStats();
    return ContentService.createTextOutput(callback + "(" + JSON.stringify(data) + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  } catch (error) {
    console.error("No se pudieron consultar las estadísticas: " + error.message);
    return ContentService.createTextOutput(
      callback + "(" + JSON.stringify({ ok: false, message: "Contador no disponible." }) + ");"
    ).setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
}

function doPost(e) {
  let payload = {};
  try {
    if (!e || !e.parameter || !e.parameter.payload) {
      throw new Error("No se recibieron los datos del formulario.");
    }
    payload = JSON.parse(e.parameter.payload);
    const result = saveRegistration(payload);
    return responsePage(result);
  } catch (error) {
    console.error("No se pudo completar la inscripción: " + error.message);
    return responsePage({
      type: "uvp-registration-result",
      requestId: payload.requestId || "",
      ok: false,
      message: error.message || "No fue posible guardar la inscripción."
    });
  }
}

function authorizeServices() {
  getRegistrationSheet();
  MailApp.getRemainingDailyQuota();
}

function responsePage(result) {
  const serialized = JSON.stringify(result).replace(/</g, "\\u003c");
  const html = '<!doctype html><meta charset="utf-8"><script>window.parent.postMessage(' +
    serialized + ', "*");</script>';
  return HtmlService.createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getRegistrationSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error("Vincula este proyecto de Apps Script a la hoja de cálculo de la jornada.");
  }
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  } else {
    const currentHeaders = sheet.getRange(1, 1, 1, HEADERS.length).getDisplayValues()[0];
    if (HEADERS.some((header, index) => currentHeaders[index] !== header)) {
      throw new Error("La fila 1 de la pestaña Inscripciones no coincide con los encabezados esperados.");
    }
  }
  return sheet;
}

function getSessionMap() {
  const map = {};
  SESSION_ROWS.forEach(function (row) {
    map[row[0]] = {
      id: row[0],
      courseId: row[1],
      capacity: Number(row[2]),
      date: row[3],
      block: Number(row[4]),
      title: row[5],
      time: row[6],
      modality: row[7],
      room: row[8]
    };
  });
  return map;
}

function getPublicStats() {
  const sheet = getRegistrationSheet();
  const rows = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getValues()
    : [];
  const sessionMap = getSessionMap();
  const counts = {};
  Object.keys(sessionMap).forEach(function (id) { counts[id] = 0; });
  const registeredKeys = {};
  let totalSelections = 0;

  rows.forEach(function (row) {
    const key = normalizeKey(row[11]);
    if (key) registeredKeys[key] = true;
    const selections = parseSessionIds(row[12]);
    selections.forEach(function (id) {
      if (Object.prototype.hasOwnProperty.call(counts, id)) {
        counts[id] += 1;
        totalSelections += 1;
      }
    });
  });

  const bySession = {};
  let totalCapacity = 0;
  let availableSeats = 0;
  Object.keys(sessionMap).forEach(function (id) {
    const capacity = sessionMap[id].capacity;
    const available = Math.max(0, capacity - counts[id]);
    totalCapacity += capacity;
    availableSeats += available;
    bySession[id] = { inscritos: counts[id], capacidad: capacity, disponibles: available };
  });

  return {
    ok: true,
    totalInscritos: Object.keys(registeredKeys).length,
    totalSelecciones: totalSelections,
    cuposProgramados: totalCapacity,
    cuposDisponibles: availableSeats,
    bySession: bySession
  };
}

function saveRegistration(payload) {
  if (!REGISTRATION_OPEN) throw new Error("El periodo de inscripción está cerrado.");
  if (!payload || typeof payload !== "object") throw new Error("Los datos recibidos no son válidos.");
  if (String(payload.website || "").trim()) throw new Error("No se pudo validar el formulario.");

  const fullName = cleanText(payload.fullName, 120, "nombre");
  const email = cleanText(payload.email, 160, "correo");
  const teacherKey = cleanText(payload.teacherKey, 50, "clave docente");
  const campus = cleanText(payload.campus, 80, "plantel");
  const division = cleanText(payload.division, 120, "división");
  const personType = cleanText(payload.personType, 120, "tipo de personal");
  const academicLevel = cleanText(payload.academicLevel || "No aplica", 100, "nivel académico");
  const postgraduateLevel = cleanText(payload.postgraduateLevel || "No aplica", 100, "nivel de posgrado");
  const experience = cleanText(payload.experience, 60, "antigüedad");
  const programs = Array.isArray(payload.programs) ? payload.programs.map(function (item) {
    return cleanText(item, 120, "programa");
  }).filter(Boolean) : [];
  const requestId = cleanText(payload.requestId, 80, "folio");
  const sessions = Array.isArray(payload.sessions) ? payload.sessions.map(String) : [];

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Escribe un correo electrónico válido.");
  if (!payload.privacyConsent) throw new Error("Debes aceptar el aviso de uso de datos para continuar.");
  if (sessions.length < MIN_COURSES) throw new Error("Elige al menos tres cursos.");
  if (new Set(sessions).size !== sessions.length) throw new Error("Hay sesiones duplicadas en tu selección.");

  const sessionMap = getSessionMap();
  sessions.forEach(function (id) {
    if (!Object.prototype.hasOwnProperty.call(sessionMap, id)) {
      throw new Error("La selección incluye una sesión que no pertenece a la oferta publicada.");
    }
  });
  validateNoOverlaps(sessions, sessionMap);

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sheet = getRegistrationSheet();
    const lastRow = sheet.getLastRow();
    const rows = lastRow > 1 ? sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues() : [];
    const normalizedKey = normalizeKey(teacherKey);
    const matches = [];
    rows.forEach(function (row, index) {
      if (normalizeKey(row[11]) === normalizedKey) matches.push(index);
    });
    if (matches.length > 1) {
      throw new Error("La hoja contiene registros repetidos para esta clave. Contacta a coordinación para revisar tu inscripción.");
    }

    const existingIndex = matches.length ? matches[0] : -1;
    const usage = {};
    sessions.forEach(function (id) { usage[id] = 0; });
    rows.forEach(function (row, index) {
      if (index === existingIndex) return;
      parseSessionIds(row[12]).forEach(function (id) {
        if (Object.prototype.hasOwnProperty.call(usage, id)) usage[id] += 1;
      });
    });
    sessions.forEach(function (id) {
      const session = sessionMap[id];
      if (usage[id] >= session.capacity) {
        throw new Error("El cupo de " + session.title + " ya se completó. Actualiza tu selección.");
      }
    });

    const safePrograms = programs.join(" | ");
    const safeKey = safeCellValue(teacherKey);
    const folio = requestId || Utilities.getUuid();
    const values = [
      new Date(),
      safeCellValue(folio),
      safeCellValue(fullName),
      safeCellValue(email),
      safeCellValue(campus),
      safeCellValue(division),
      safeCellValue(personType),
      safeCellValue(academicLevel),
      safeCellValue(postgraduateLevel),
      safeCellValue(safePrograms),
      safeCellValue(experience),
      safeKey,
      JSON.stringify(sessions),
      "Sí"
    ];
    const targetRow = existingIndex >= 0 ? existingIndex + 2 : lastRow + 1;
    sheet.getRange(targetRow, 1, 1, HEADERS.length).setValues([values]);
    SpreadsheetApp.flush();

    const message = existingIndex >= 0
      ? "Tu inscripción se actualizó correctamente."
      : "Tu inscripción quedó registrada correctamente.";
    let emailMessage = "";
    try {
      sendConfirmation(email, fullName, sessions, sessionMap, existingIndex >= 0);
    } catch (mailError) {
      console.error("La inscripción se guardó, pero el correo de confirmación falló: " + mailError.message);
      emailMessage = " No se pudo enviar el correo de confirmación; contacta a coordinación si lo necesitas.";
    }
    return {
      type: "uvp-registration-result",
      requestId: requestId,
      ok: true,
      message: message + emailMessage
    };
  } finally {
    lock.releaseLock();
  }
}

function validateNoOverlaps(sessionIds, sessionMap) {
  const occupied = {};
  sessionIds.forEach(function (id) {
    const session = sessionMap[id];
    if (!session.date || !session.block) return;
    const slot = session.date + "-b" + session.block;
    if (occupied[slot]) throw new Error("Elegiste dos actividades que coinciden en fecha y horario.");
    occupied[slot] = true;
  });
}

function sendConfirmation(email, fullName, sessionIds, sessionMap, isUpdate) {
  const items = sessionIds.map(function (id) {
    const session = sessionMap[id];
    const date = session.date ? session.date.split("-").reverse().join("/") : "Autogestivo";
    return "<li><strong>" + escapeHtml(session.title) + "</strong> (" + escapeHtml(session.courseId) +
      ") · " + escapeHtml(date) + " · " + escapeHtml(session.time) + " · " +
      escapeHtml(session.modality) + "</li>";
  }).join("");
  const subject = isUpdate ? "Actualización de tu inscripción · Jornada UVP" : "Confirmación de inscripción · Jornada UVP";
  const htmlBody = "<p>Hola " + escapeHtml(fullName) + ":</p><p>" +
    (isUpdate ? "Tu selección se actualizó." : "Tu inscripción quedó registrada.") +
    " Estas son las sesiones seleccionadas:</p><ul>" + items +
    "</ul><p>Para liberar un lugar o resolver dudas, escribe a coord.formaciondocente@uvp.mx.</p>";
  const plainBody = "Hola " + fullName + ":\n\nTu inscripción quedó registrada. Consulta las sesiones y horarios en la página de la Jornada UVP.\n\nDudas: coord.formaciondocente@uvp.mx";
  MailApp.sendEmail({ to: email, subject: subject, body: plainBody, htmlBody: htmlBody });
}

function cleanText(value, maxLength, label) {
  const text = String(value == null ? "" : value).trim();
  if (!text || text.length > maxLength) throw new Error("Revisa el campo " + label + ".");
  return text;
}

function safeCellValue(value) {
  const text = String(value == null ? "" : value).trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function normalizeKey(value) {
  return String(value == null ? "" : value).trim().toUpperCase().replace(/\s+/g, "");
}

function parseSessionIds(value) {
  if (!value) return [];
  const parsed = JSON.parse(String(value));
  if (!Array.isArray(parsed)) throw new Error("La hoja contiene una lista de sesiones inválida.");
  return parsed.map(String);
}

function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
  });
}
