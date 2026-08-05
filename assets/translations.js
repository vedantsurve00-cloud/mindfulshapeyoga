/* ================================================================
   TRANSLATIONS — Mindful Shapes Yoga
   Covers: nav, hero, section headings, buttons, footer, common UI
   Languages: mr (Marathi), fr (French), es (Spanish)
   English is the HTML source — no separate dict needed.
   ================================================================ */

const TRANSLATIONS = {

  /* ── Navigation ── */
  "nav.home":        { mr: "मुख्यपृष्ठ",          fr: "Accueil",               es: "Inicio" },
  "nav.classes":     { mr: "वर्ग",               fr: "Cours",                 es: "Clases" },
  "nav.training":    { mr: "शिक्षक प्रशिक्षण",    fr: "Formation Enseignant",  es: "Formación Docente" },
  "nav.gurus":       { mr: "गुरू",               fr: "Gurus",                 es: "Gurus" },
  "nav.volunteer":   { mr: "स्वयंसेवक",           fr: "Bénévolat",             es: "Voluntariado" },
  "nav.blog":        { mr: "ब्लॉग",              fr: "Blog",                  es: "Blog" },
  "nav.contact":     { mr: "संपर्क",              fr: "Contact",               es: "Contacto" },

  /* ── Index Hero ── */
  "hero.tag":        { mr: "योग आश्रम व अकादमी — भारत",    fr: "Ashram & Académie de Yoga — BHARAT",     es: "Ashram y Academia de Yoga — BHARAT" },
  "hero.h1":         { mr: "जिथे प्राचीन<br><em>ज्ञान</em> आधुनिक<br>जीवन घडवते.",  fr: "Où l'Ancienne<br><em>Sagesse</em> Façonne<br>la Vie Moderne.",  es: "Donde la Antigua<br><em>Sabiduría</em> Moldea<br>la Vida Moderna." },
  "hero.sub":        { mr: "माइंडफुल शेप्स योगा, <strong style=\"color:rgba(255,248,235,.9)\">अमोघ शिंदे</strong> यांनी स्थापित, पारंपरिक आश्रम-आधारित योग शिक्षण, प्रमाणित शिक्षक प्रशिक्षण आणि परिवर्तनकारी वर्ग — इंग्रजी, मराठी, हिंदी, स्पॅनिश व फ्रेंच मध्ये उपलब्ध.",
                       fr: "Mindful Shapes Yoga, fondé par <strong style=\"color:rgba(255,248,235,.9)\">Amogh Shinde</strong>, propose un enseignement yoga traditionnel d'ashram, une formation certifiée et des cours transformateurs — en anglais, marathi, hindi, espagnol et français.",
                       es: "Mindful Shapes Yoga, fundado por <strong style=\"color:rgba(255,248,235,.9)\">Amogh Shinde</strong>, ofrece educación yoga tradicional de ashram, formación certificada de profesores y clases transformadoras — en inglés, maratí, hindi, español y francés." },
  "hero.btn.explore":    { mr: "अभ्यासक्रम पहा",      fr: "Explorer les Cours",    es: "Explorar Cursos" },
  "hero.btn.teacher":    { mr: "योग शिक्षक व्हा",     fr: "Devenir Prof de Yoga",  es: "Ser Profesor de Yoga" },
  "hero.stat.training":  { mr: "शिक्षक प्रशिक्षण",    fr: "Formation Enseignant",  es: "Formación Docente" },
  "hero.stat.advanced":  { mr: "प्रगत प्रमाणपत्र",    fr: "Certification Avancée", es: "Certificación Avanzada" },
  "hero.stat.flexible":  { mr: "लवचिक शिक्षण",       fr: "Apprentissage Flexible", es: "Aprendizaje Flexible" },
  "hero.stat.languages": { mr: "इंग्रजी, मराठी, हिंदी, स्पॅनिश व फ्रेंच", fr: "Anglais, Marathi, Hindi, Espagnol & Français", es: "Inglés, Maratí, Hindi, Español y Francés" },
  "hero.scroll":         { mr: "स्क्रोल करा",         fr: "Défiler",               es: "Desplazar" },

  /* ── Pillars ── */
  "pillar.ashram.title":     { mr: "आश्रम मूळ",        fr: "Racines d'Ashram",       es: "Raíces de Ashram" },
  "pillar.ashram.desc":      { mr: "पारंपरिक भारतीय योग परंपरेत रुजलेले शिक्षण — केवळ व्यायाम नव्हे, तर संपूर्ण जीवनपद्धती.",
                                fr: "Un enseignement enraciné dans la lignée traditionnelle du yoga indien — pas seulement de l'exercice, mais un mode de vie complet.",
                                es: "Enseñanza arraigada en el linaje tradicional del yoga indio — no solo ejercicio, sino una forma completa de ser." },
  "pillar.mindful.title":    { mr: "सजग अभ्यास",       fr: "Pratique Consciente",     es: "Práctica Consciente" },
  "pillar.mindful.desc":     { mr: "प्रत्येक सत्र जागरूकता, श्वास आणि उपस्थिती विकसित करते — सुरुवातीच्या आसनापासून प्रगत प्राणायामापर्यंत.",
                                fr: "Chaque session cultive la conscience, le souffle et la présence — de l'asana débutant au pranayama avancé.",
                                es: "Cada sesión cultiva la conciencia, la respiración y la presencia — desde asana principiante hasta pranayama avanzado." },
  "pillar.certified.title":  { mr: "प्रमाणित प्रशिक्षण", fr: "Formation Certifiée",    es: "Formación Certificada" },
  "pillar.certified.desc":   { mr: "आंतरराष्ट्रीय मान्यताप्राप्त 200H आणि 500H शिक्षक प्रशिक्षण कार्यक्रम.",
                                fr: "Programmes de formation 200H et 500H reconnus internationalement avec un curriculum rigoureux.",
                                es: "Programas de formación 200H y 500H reconocidos internacionalmente con un currículo riguroso." },
  "pillar.seva.title":       { mr: "सेवा व समुदाय",     fr: "Seva & Communauté",      es: "Seva y Comunidad" },
  "pillar.seva.desc":        { mr: "स्वयंसेवा, सेवा आणि वाढ — वैयक्तिक अभ्यासाच्या पलीकडे सत्संग आणि सामूहिक उपचारांमध्ये योग.",
                                fr: "Bénévolat, service et croissance — le yoga au-delà de la pratique personnelle vers le satsang et la guérison collective.",
                                es: "Voluntariado, servicio y crecimiento — yoga más allá de la práctica personal hacia satsang y sanación colectiva." },

  /* ── Founder Section ── */
  "founder.eyebrow":        { mr: "संस्थापक भेटा",            fr: "Rencontrer le Fondateur",   es: "Conoce al Fundador" },
  "founder.heading":        { mr: "अमोघ शिंदे — जो शिकवतो ते स्वतः जगतो.",
                               fr: "Amogh Shinde — Un Enseignant Qui Vit Ce Qu'il Enseigne.",
                               es: "Amogh Shinde — Un Maestro Que Vive Lo Que Enseña." },
  "founder.connect":        { mr: "अमोघशी संपर्क साधा",       fr: "Contacter Amogh",           es: "Conectar con Amogh" },

  /* ── Courses Section ── */
  "courses.eyebrow":        { mr: "आमचे कार्यक्रम",           fr: "Nos Programmes",            es: "Nuestros Programas" },
  "courses.heading":        { mr: "तुमच्या योग प्रवासासाठी योग्य मार्ग शोधा.",
                               fr: "Trouvez le Bon Chemin pour Votre Voyage Yoga.",
                               es: "Encuentra el Camino Correcto para Tu Viaje de Yoga." },
  "courses.viewall":        { mr: "सर्व वर्ग पहा →",          fr: "Voir Tous les Cours →",     es: "Ver Todas las Clases →" },
  "courses.learnmore":      { mr: "अधिक जाणा →",             fr: "En Savoir Plus →",          es: "Saber Más →" },
  "courses.pricing":        { mr: "किंमत पहा व नावनोंदणी करा →", fr: "Voir les Tarifs & S'inscrire →", es: "Ver Precios e Inscribirse →" },

  /* ── Why Mindful Shapes ── */
  "why.eyebrow":            { mr: "माइंडफुल शेप्स का",        fr: "Pourquoi Mindful Shapes",   es: "Por Qué Mindful Shapes" },
  "why.heading":            { mr: "एक वेगळ्या प्रकारची योग शाळा.",
                               fr: "Une École de Yoga Différente.",
                               es: "Una Escuela de Yoga Diferente." },

  /* ── Accreditation ── */
  "accred.eyebrow":         { mr: "मान्यता",                  fr: "Accrédité Par",             es: "Acreditado Por" },

  /* ── Testimonials ── */
  "testi.eyebrow":          { mr: "विद्यार्थी कथा",            fr: "Témoignages",               es: "Testimonios" },
  "testi.heading":          { mr: "आमच्या विद्यार्थ्यांचे अनुभव.",
                               fr: "Ce Que Disent Nos Élèves.",
                               es: "Lo Que Dicen Nuestros Estudiantes." },

  /* ── Begin Your Journey ── */
  "start.eyebrow":          { mr: "तुमचा प्रवास सुरू करा",     fr: "Commencez Votre Voyage",    es: "Comienza Tu Viaje" },
  "start.heading":          { mr: "सुरुवात करणे तुम्हाला वाटते त्यापेक्षा सोपे आहे.",
                               fr: "Commencer Est Plus Simple Que Vous Ne Pensez.",
                               es: "Empezar Es Más Fácil de Lo Que Piensas." },
  "start.step1.title":      { mr: "कार्यक्रम शोधा",           fr: "Explorer les Programmes",   es: "Explorar Programas" },
  "start.step2.title":      { mr: "तुमचा मार्ग निवडा",        fr: "Choisissez Votre Chemin",   es: "Elige Tu Camino" },
  "start.step3.title":      { mr: "नावनोंदणी करा",            fr: "Inscrivez-vous",            es: "Inscríbete" },
  "start.step4.title":      { mr: "उपस्थित राहा व बदला",     fr: "Venez & Transformez",       es: "Ven y Transfórmate" },

  /* ── Final CTA ── */
  "cta.tag":                { mr: "✧ आज सुरू करा",            fr: "✧ Commencez Aujourd'hui",   es: "✧ Comienza Hoy" },
  "cta.enroll":             { mr: "नावनोंदणी करा",            fr: "S'inscrire",                es: "Inscribirse" },
  "cta.talk":               { mr: "अमोघ सरांशी बोला",         fr: "Parler à Amogh Sir",        es: "Hablar con Amogh Sir" },
  "cta.students":           { mr: "प्रशिक्षित विद्यार्थी",     fr: "Élèves Formés",             es: "Estudiantes Formados" },
  "cta.experience":         { mr: "वर्षांचा अनुभव",           fr: "Années d'Expérience",       es: "Años de Experiencia" },
  "cta.programs":           { mr: "TTC कार्यक्रम",            fr: "Programmes TTC",            es: "Programas TTC" },

  /* ── Footer ── */
  "footer.tagline":         { mr: "योग हा जीवनाचा एक मार्ग आहे", fr: "Le Yoga Est un Mode de Vie", es: "El Yoga Es un Estilo de Vida" },
  "footer.programs":        { mr: "कार्यक्रम",                fr: "Programmes",                es: "Programas" },
  "footer.explore":         { mr: "अन्वेषण करा",              fr: "Explorer",                  es: "Explorar" },
  "footer.quicklinks":      { mr: "द्रुत दुवे",               fr: "Liens Rapides",             es: "Enlaces Rápidos" },
  "footer.regularclass":    { mr: "नियमित वर्ग",              fr: "Cours Réguliers",           es: "Clases Regulares" },
  "footer.ttc":             { mr: "शिक्षक प्रशिक्षण (TTC)",   fr: "Formation Enseignant (TTC)", es: "Formación Docente (TTC)" },
  "footer.pranayama":       { mr: "प्राणायाम कार्यशाळा",      fr: "Atelier Pranayama",         es: "Taller de Pranayama" },
  "footer.blogjournal":     { mr: "ब्लॉग व जर्नल",            fr: "Blog & Journal",            es: "Blog y Diario" },
  "footer.camps":           { mr: "शिबिरे व कार्यशाळा",       fr: "Camps & Ateliers",          es: "Campamentos y Talleres" },
  "footer.ypi":             { mr: "योग प्रोटोकॉल निर्देशक",    fr: "Instructeur Protocole Yoga", es: "Instructor Protocolo Yoga" },
  "footer.volprog":         { mr: "स्वयंसेवक कार्यक्रम",       fr: "Programme Bénévolat",       es: "Programa Voluntariado" },
  "footer.volcert":         { mr: "स्वयंसेवक प्रमाणपत्र",      fr: "Certification Bénévolat",   es: "Certificación Voluntariado" },
  "footer.home":            { mr: "मुख्यपृष्ठ",               fr: "Accueil",                   es: "Inicio" },
  "footer.allclass":        { mr: "सर्व वर्ग",                fr: "Tous les Cours",            es: "Todas las Clases" },
  "footer.meetgurus":       { mr: "गुरुंना भेटा",              fr: "Rencontrer les Gurus",      es: "Conoce a los Gurus" },
  "footer.blog":            { mr: "ब्लॉग",                    fr: "Blog",                      es: "Blog" },
  "footer.contact":         { mr: "संपर्क करा",               fr: "Nous Contacter",            es: "Contáctenos" },
  "footer.copyright":       { mr: "© 2025 माइंडफुल शेप्स योगा. संस्थापक अमोघ शिंदे. सर्व हक्क राखीव.",
                               fr: "© 2025 Mindful Shapes Yoga. Fondé par Amogh Shinde. Tous droits réservés.",
                               es: "© 2025 Mindful Shapes Yoga. Fundado por Amogh Shinde. Todos los derechos reservados." },

  /* ── WhatsApp Strip ── */
  "wa.strip":               { mr: "WhatsApp वर नवीन लेख व अभ्यास टिप्स मिळवा — अमोघ शिंदे: +91 90049 13827",
                               fr: "Recevez de nouveaux articles & conseils sur WhatsApp — Amogh Shinde : +91 90049 13827",
                               es: "Recibe nuevos artículos y consejos en WhatsApp — Amogh Shinde: +91 90049 13827" },

  /* ── Blog Page ── */
  "blog.tag":               { mr: "योग जर्नल",                fr: "Journal de Yoga",           es: "Diario de Yoga" },
  "blog.heading":           { mr: "कथा, अभ्यास टिपा व <em>ज्ञान</em> चटईवरून.",
                               fr: "Histoires, Notes de Pratique & <em>Sagesse</em> du Tapis.",
                               es: "Historias, Notas de Práctica y <em>Sabiduría</em> del Mat." },
  "blog.search":            { mr: "लेख शोधा...",               fr: "Rechercher des articles...", es: "Buscar artículos..." },
  "blog.all":               { mr: "सर्व लेख",                 fr: "Tous les Articles",          es: "Todos los Artículos" },

  /* ── Contact Page ── */
  "contact.eyebrow":        { mr: "संपर्क साधा",              fr: "Nous Contacter",            es: "Contáctenos" },

  /* ── Courses Page ── */
  "courses.page.heading":   { mr: "आमचे सर्व वर्ग व कार्यक्रम", fr: "Tous Nos Cours & Programmes", es: "Todos Nuestros Cursos y Programas" },

  /* ── Meet the Gurus ── */
  "gurus.eyebrow":          { mr: "आमचे गुरू",                fr: "Nos Gurus",                 es: "Nuestros Gurus" },

  /* ── Teacher Training ── */
  "tt.eyebrow":             { mr: "शिक्षक प्रशिक्षण",         fr: "Formation Enseignant",      es: "Formación Docente" },

  /* ── Volunteer ── */
  "vol.eyebrow":            { mr: "स्वयंसेवक कार्यक्रम",      fr: "Programme Bénévolat",       es: "Programa Voluntariado" },

  /* ── Regular Classes ── */
  "rc.eyebrow":             { mr: "नियमित वर्ग",              fr: "Cours Réguliers",           es: "Clases Regulares" },
  "rc.campus":              { mr: "कॅम्पस वर्ग",              fr: "Cours sur Campus",          es: "Clases en Campus" },
  "rc.online":              { mr: "ऑनलाइन वर्ग",              fr: "Cours en Ligne",            es: "Clases en Línea" },

  /* ── Pranayama Workshop ── */
  "prana.eyebrow":          { mr: "प्राणायाम कार्यशाळा",      fr: "Atelier Pranayama",         es: "Taller de Pranayama" },

  /* ── Prenatal Yoga ── */
  "prenatal.eyebrow":       { mr: "गर्भवती योग",              fr: "Yoga Prénatal",             es: "Yoga Prenatal" },

  /* ── Better Living Retreat ── */
  "retreat.eyebrow":        { mr: "बेटर लिव्हिंग रिट्रीट",     fr: "Retraite Mieux-Vivre",      es: "Retiro Vivir Mejor" },

  /* ── Camps & Workshops ── */
  "camps.eyebrow":          { mr: "शिबिरे व कार्यशाळा",       fr: "Camps & Ateliers",          es: "Campamentos y Talleres" },

  /* ── Guru pages ── */
  "guru.amogh.name":        { mr: "गुरू अमोघ शिंदे",          fr: "Guru Amogh Shinde",         es: "Guru Amogh Shinde" },
  "guru.kanika.name":       { mr: "गुरू कनिका कर्माकर",       fr: "Guru Kanika Karmakar",      es: "Guru Kanika Karmakar" },

  /* ── TTC Pages ── */
  "ttc200.heading":         { mr: "200 तास योग शिक्षक प्रशिक्षण", fr: "Formation 200H Professeur de Yoga", es: "Formación 200H Profesor de Yoga" },
  "ttc500.heading":         { mr: "500 तास योग शिक्षक प्रशिक्षण", fr: "Formation 500H Professeur de Yoga", es: "Formación 500H Profesor de Yoga" },

  /* ── Common Buttons ── */
  "btn.enrollnow":          { mr: "आता नावनोंदणी करा",        fr: "S'inscrire Maintenant",     es: "Inscríbete Ahora" },
  "btn.learnmore":          { mr: "अधिक जाणा →",             fr: "En Savoir Plus →",          es: "Saber Más →" },
  "btn.viewschedule":       { mr: "वेळापत्रक पहा",            fr: "Voir l'Horaire",            es: "Ver Horario" },
  "btn.contactus":          { mr: "संपर्क करा",               fr: "Nous Contacter",            es: "Contactez-nous" },
  "btn.readmore":           { mr: "अधिक वाचा",               fr: "Lire la Suite",             es: "Leer Más" },
  "btn.download":           { mr: "डाउनलोड करा",             fr: "Télécharger",               es: "Descargar" },
};

/* ── English originals (stored once so we can revert) ── */
const EN_ORIGINALS = {};

/**
 * Apply a language to all [data-i18n] elements on the page.
 * @param {string} lang  'en' | 'mr' | 'fr' | 'es'
 */
function setLanguage(lang) {
  const html = document.documentElement;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');

    /* Store original English on first encounter */
    if (!EN_ORIGINALS[key]) {
      EN_ORIGINALS[key] = el.innerHTML;
    }

    if (lang === 'en') {
      el.innerHTML = EN_ORIGINALS[key];
    } else if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
      el.innerHTML = TRANSLATIONS[key][lang];
    }
  });

  /* Handle placeholder translations for inputs */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-placeholder');
    if (!EN_ORIGINALS['ph:' + key]) {
      EN_ORIGINALS['ph:' + key] = el.placeholder;
    }
    if (lang === 'en') {
      el.placeholder = EN_ORIGINALS['ph:' + key];
    } else if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
      el.placeholder = TRANSLATIONS[key][lang];
    }
  });

  /* Update the html lang attribute */
  html.setAttribute('lang', lang);

  /* Persist choice */
  try { localStorage.setItem('msy-lang', lang); } catch (e) { /* private mode */ }

  /* Update the switcher button label */
  var codeEl = document.querySelector('.lang-btn-code');
  if (codeEl) {
    var labels = { en: 'EN', mr: 'मर', fr: 'FR', es: 'ES' };
    codeEl.textContent = labels[lang] || 'EN';
  }

  /* Mark active item in dropdown */
  document.querySelectorAll('[data-lang-switcher] [data-lang]').forEach(function (btn) {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });
}

/**
 * Initialize: apply saved language on page load.
 */
function initLanguage() {
  var saved = 'en';
  try { saved = localStorage.getItem('msy-lang') || 'en'; } catch (e) {}
  if (['en', 'mr', 'fr', 'es'].indexOf(saved) === -1) saved = 'en';
  setLanguage(saved);
}

/* Run immediately so text swaps before first paint (script is at end of body) */
initLanguage();
