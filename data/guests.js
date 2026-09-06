// ============================================================================
// LISTA DE INVITADOS — ÚNICO ARCHIVO QUE NECESITAS EDITAR
// ============================================================================
// Para agregar una invitación nueva, copia un bloque, cámbiale el "slug"
// (sin espacios ni tildes, se usa en la URL) y completa el nombre de la
// invitación y los nombres de las personas invitadas.
//
// La cantidad de cupos SIEMPRE es la cantidad de nombres en "guests" — no
// hay que declararla aparte, así nunca queda desincronizada.
//
// La URL de cada invitado queda: https://tudominio.com/invitacion/EL-SLUG
//
// Ejemplos (bórralos o edítalos cuando tengas la lista real):
// ============================================================================

const guests = {
  'ivan-sandra': {
    invitationName: 'Iván y Sandra',
    guests: ['Iván Rojas', 'Sandra Pérez'],
  },
  'daniela-joaquin': {
    invitationName: 'Daniela y Joaquín',
    guests: ['Daniela Rojas', 'Joaquín Rojas', 'Gaspar Muñoz', 'Juan Pablo', 'Baltazar Rojas'],
  },
  'monica-alejandro': {
    invitationName: 'Mónica y Alejandro',
    guests: ['Mónica Rojas', 'Alejandro Yuretic', 'Luciana Yuretic'],
  },
  'karla-antonio': {
    invitationName: 'Karla y Antonio',
    guests: ['Karla Salviat', 'Antonio Ortega', 'Martina Rojas', 'Mauricio Rojas'],
  },
  'carolina-victor': {
    invitationName: 'Carolina y Víctor',
    guests: ['Carolina Pérez', 'Víctor Plaza', 'Benjamín Plaza'],
  },
  'ivania-bastian': {
    invitationName: 'Ivania y Bastián',
    guests: ['Ivania Escobedo', 'Bastián Vásquez'],
  },
  'thabata-rodrigo': {
    invitationName: 'Thabata y Rodrigo',
    guests: ['Thabata Rojas', 'Rodrigo Ibarra', 'Josefa Ibarra', 'Francisco Ibarra', 'Mía Ibarra'],
  },
  'claudio-erika': {
    invitationName: 'Claudio y Erika',
    guests: ['Claudio Vásquez', 'Erika Pérez'],
  },
  'claudia-patricio': {
    invitationName: 'Claudia y Patricio',
    guests: ['Claudia Pérez', 'Patricio'],
  },
  'beatriz-francisco': {
    invitationName: 'Beatriz y Francisco',
    guests: ['Beatriz Ortega', 'Francisco Rojas', 'Franco Pérez'],
  },
  'fernando-garabito': {
    invitationName: 'Fernando Garabito',
    guests: ['Fernando Garabito', 'Acompañante'],
  },
  'juan-ana': {
    invitationName: 'Juan y Ana',
    guests: ['Juan Francisco Pérez', 'Ana Cisternas'],
  },
  'angelica-roby': {
    invitationName: 'Angélica y Roby',
    guests: ['Angélica Rojas', 'Roby Gatica'],
  },
  'eliana-raul': {
    invitationName: 'Eliana y Raúl',
    guests: ['Eliana Retamales', 'Raúl Rojas'],
  },
  'berta-rojas': {
    invitationName: 'Berta Rojas',
    guests: ['Berta Rojas', 'Acompañante'],
  },
  'angelica-gustavo': {
    invitationName: 'Angélica y Gustavo',
    guests: ['Angélica Rojas', 'Gustavo López'],
  },
  'jorge-alejandra': {
    invitationName: 'Jorge y Alejandra',
    guests: ['Jorge Rojas', 'Alejandra'],
  },
  'alejandro-nancy': {
    invitationName: 'Alejandro y Nancy',
    guests: ['Alejandro Rojas', 'Nancy Sandoval'],
  },
  'kely-joaquin': {
    invitationName: 'Kely y Joaquín',
    guests: ['Kely Pérez', 'Joaquín Marabolí'],
  },
  'mariajose-mariaignacia': {
    invitationName: 'María José y María Ignacia',
    guests: ['María José Guerrero', 'María Ignacia Guerrero'],
  },
  'ivan-alejandra': {
    invitationName: 'Iván y Alejandra',
    guests: ['Iván López', 'Alejandra Villegas', 'Camila Neira', 'Abigail Gutiérrez', 'Gabriela Solís'],
  },
  'francisca-wilson': {
    invitationName: 'Francisca y Wilson',
    guests: ['Francisca Coñuepan', 'Wilson'],
  },
  'paola-maria': {
    invitationName: 'Paola y María',
    guests: ['Paola Macías', 'María Gajardo', 'Cornelio Macías', 'Armandina Gajardo'],
  },
  'luis-paola': {
    invitationName: 'Luís y Paola',
    guests: ['Luís Ureta', 'Paola Rivera', 'Sophia Ureta'],
  },
  'claudia-cristian': {
    invitationName: 'Claudia y Cristián',
    guests: ['Claudia Macías', 'Cristián Muñoz', 'Fernanda Muñoz'],
  },
  'francisca-joaquin': {
    invitationName: 'Francisca y Joaquín',
    guests: ['Francisca Muñoz', 'Joaquín'],
  },
  'soledad-jose': {
    invitationName: 'Soledad y José',
    guests: ['Soledad Ureta', 'José Vaca'],
  },
  'camilo-camila': {
    invitationName: 'Camilo y Camila',
    guests: ['Camilo Vaca', 'Camila Toro'],
  },
  'tomas-ninoska': {
    invitationName: 'Tomás y Ninoska',
    guests: ['Tomás Vaca', 'Ninoska Urbina', 'Pascale Ureta', 'Amalia Ureta'],
  },
  'marta-cristian': {
    invitationName: 'Marta y Cristián',
    guests: ['Marta Ureta', 'Cristián Órtiz'],
  },
  'javiera-felipe': {
    invitationName: 'Javiera y Felipe',
    guests: ['Javiera Órtiz', 'Felipe Cisternas'],
  },
  'fernanda-matias': {
    invitationName: 'Fernanda y Matías',
    guests: ['Fernanda Órtiz', 'Matías González'],
  },
  'matias-camila': {
    invitationName: 'Matías y Camila',
    guests: ['Matías Manterola', 'Camila'],
  },
  'martin-aracelli': {
    invitationName: 'Martín y Aracelli',
    guests: ['Martín Sanhueza', 'Aracelli Muñoz'],
  },
  'jusef-paola': {
    invitationName: 'Jusef y Paola',
    guests: ['Jusef Quiroz', 'Paola Durán'],
  },
  'leonardo-silvia': {
    invitationName: 'Leonardo y Silvia',
    guests: ['Leonardo Soto', 'Silvia Buscham', 'Abby', 'Martín', 'Jacinta'],
  },
  'harays-facundo': {
    invitationName: 'Harays y Facundo',
    guests: ['Harays Soto', 'Facundo', 'Néstor'],
  },
  'matias-trejo': {
    invitationName: 'Matías',
    guests: ['Matías Trejo'],
  },
  'carlos-vicky': {
    invitationName: 'Carlos y Vicky',
    guests: ['Carlos Ovalle', 'Vicky'],
  },
  'tomas-camila': {
    invitationName: 'Tomás y Camila',
    guests: ['Tomás Carrasco', 'Camila Keupuchur'],
  },
  'marcelo-veronica': {
    invitationName: 'Marcelo y Verónica',
    guests: ['Marcelo Escobar', 'Verónica'],
  },
  'laura-italo': {
    invitationName: 'Laura y Ítalo',
    guests: ['Laura Jofré', 'Ítalo Landucci', 'Colomba Landucci'],
  },
  'loreto-miguel': {
    invitationName: 'Loreto y Miguel',
    guests: ['Loreto', 'Miguel', 'Yasna', 'Yanis'],
  },
  'icha': {
    invitationName: 'Icha',
    guests: ['Icha'],
  },
  'marita': {
    invitationName: 'Marita',
    guests: ['Marita'],
  },
  'carlos': {
    invitationName: 'Carlos',
    guests: ['Carlos', 'Acompañante'],
  },
  'marcos': {
    invitationName: 'Marcos',
    guests: ['Marcos', 'Acompañante'],
  },
  'padres-carlos-orellana': {
    invitationName: 'por confirmar y por confirmar',
    guests: ['Mamá Carlos Orellana', 'Papá Carlos Orellana'],
  },
  'pablo': {
    invitationName: 'Pablo',
    guests: ['Pablo', 'Acompañante'],
  },
  'jenny': {
    invitationName: 'Jenny',
    guests: ['Jenny', 'Hermana Jenny', 'Hija Jenny'],
  },
  'cindy': {
    invitationName: 'Cindy, Cloe y Mariouse',
    guests: ['Cindy', 'Cloe', 'Mariouse'],
  },
}

export default guests

export function getGuestBySlug(slug) {
  if (!slug) return null
  return guests[slug] || null
}

export function getAllSlugs() {
  return Object.keys(guests)
}
