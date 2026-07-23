const questions = [
  {
    category: "TU DÍA A DÍA",
    text: "¿Qué esperas principalmente de tu próximo dispositivo?",
    answers: [
      { text: "Una pantalla amplia para hacer de todo", scores: { fold: 3, ultra: 2 } },
      { text: "Diseño compacto, ligero y con personalidad", scores: { flip: 4 } },
      { text: "Acceso a información sin mirar el teléfono", scores: { glasses: 4 } },
      { text: "Salud, actividad y conexión desde la muñeca", scores: { watch: 4 } }
    ]
  },
  {
    category: "TU RITMO",
    text: "En un día ocupado, ¿qué situación se parece más a ti?",
    answers: [
      { text: "Trabajo con varias apps al mismo tiempo", scores: { ultra: 4, fold: 2 } },
      { text: "Combino trabajo, series y redes sociales", scores: { fold: 4, flip: 1 } },
      { text: "Quiero resolver todo con rapidez y estilo", scores: { flip: 3, glasses: 1 } },
      { text: "Estoy en movimiento y reviso mis métricas", scores: { watch: 4 } }
    ]
  },
  {
    category: "TU MOMENTO WOW",
    text: "¿Qué experiencia tecnológica te emociona más?",
    answers: [
      { text: "Convertir mi teléfono en una gran pantalla", scores: { fold: 4, ultra: 2 } },
      { text: "Llevar la productividad al máximo nivel", scores: { ultra: 4 } },
      { text: "Usar un dispositivo que también sea un accesorio", scores: { flip: 4, watch: 1 } },
      { text: "Probar una categoría completamente nueva", scores: { glasses: 4 } }
    ]
  },
  {
    category: "TU CONTENIDO",
    text: "¿Cómo disfrutas más tu tiempo libre?",
    answers: [
      { text: "Películas, series y videojuegos en pantalla grande", scores: { fold: 4, ultra: 2 } },
      { text: "Crear, editar y compartir contenido", scores: { ultra: 4, flip: 2 } },
      { text: "Salir, tomar fotos y llevar poco peso", scores: { flip: 4 } },
      { text: "Entrenar, caminar y superar mis marcas", scores: { watch: 4 } }
    ]
  },
  {
    category: "TU PERSONALIDAD",
    text: "Elige la frase que mejor te representa.",
    answers: [
      { text: "La productividad es mi superpoder", scores: { ultra: 4, fold: 1 } },
      { text: "Quiero una experiencia que se transforme conmigo", scores: { fold: 4 } },
      { text: "El diseño también habla de quién soy", scores: { flip: 4 } },
      { text: "Siempre quiero probar primero el futuro", scores: { glasses: 4, watch: 1 } }
    ]
  },
  {
    category: "TU ELECCIÓN FINAL",
    text: "Solo puedes llevar uno durante un viaje. ¿Cuál escoges?",
    answers: [
      { text: "El más versátil para entretenimiento y tareas", scores: { fold: 4 } },
      { text: "El más potente para trabajar sin límites", scores: { ultra: 4 } },
      { text: "El más compacto y llamativo", scores: { flip: 4 } },
      { text: "El que me mantenga conectado sin usar las manos", scores: { glasses: 3, watch: 3 } }
    ]
  }
];

const results = {
  fold: {
    name: "Galaxy Z Fold8",
    icon: "▣",
    tagline: "Tu mundo se abre en grande.",
    description:
      "Buscas versatilidad, entretenimiento inmersivo y una experiencia capaz de transformarse contigo. Te gusta tener una pantalla amplia sin renunciar a la movilidad.",
    traits: ["Versátil", "Inmersivo", "Multitarea"]
  },
  ultra: {
    name: "Galaxy Z Fold8 Ultra",
    icon: "▥",
    tagline: "La productividad es tu superpoder.",
    description:
      "Quieres llevar el trabajo, la creación y la multitarea al máximo. Tu Galaxy ideal debe sentirse como una estación de productividad que cabe en tus manos.",
    traits: ["Productivo", "Potente", "Creador"]
  },
  flip: {
    name: "Galaxy Z Flip8",
    icon: "◇",
    tagline: "El diseño también habla de ti.",
    description:
      "Valoras un dispositivo compacto, expresivo y fácil de llevar. La tecnología debe adaptarse a tu estilo, no al revés.",
    traits: ["Compacto", "Expresivo", "Ágil"]
  },
  glasses: {
    name: "Galaxy Glasses",
    icon: "∞",
    tagline: "El futuro debe sentirse natural.",
    description:
      "Te emociona descubrir nuevas formas de interactuar con la tecnología. Buscas información y asistencia sin perder de vista lo que ocurre a tu alrededor.",
    traits: ["Pionero", "Curioso", "Manos libres"]
  },
  watch: {
    name: "Galaxy Watch",
    icon: "◉",
    tagline: "Tu bienestar siempre va contigo.",
    description:
      "Tu prioridad es mantenerte activo, conectado y atento a tu salud. Prefieres respuestas rápidas y datos útiles directamente desde tu muñeca.",
    traits: ["Activo", "Conectado", "Bienestar"]
  }
};

const screens = {
  start: document.querySelector("#start-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen")
};

const state = {
  current: 0,
  answers: Array(questions.length).fill(null)
};

const $ = (selector) => document.querySelector(selector);

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[state.current];
  $("#question-category").textContent = question.category;
  $("#question-text").textContent = question.text;
  $("#progress-label").textContent = `Pregunta ${state.current + 1} de ${questions.length}`;
  const percent = Math.round(((state.current + 1) / questions.length) * 100);
  $("#progress-percent").textContent = `${percent}%`;
  $("#progress-bar").style.width = `${percent}%`;

  const answers = $("#answers");
  answers.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    if (state.answers[state.current] === index) button.classList.add("selected");
    button.innerHTML = `
      <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
      <span>${answer.text}</span>
    `;
    button.addEventListener("click", () => {
      state.answers[state.current] = index;
      renderQuestion();
      $("#next-btn").disabled = false;
    });
    answers.appendChild(button);
  });

  $("#back-btn").style.visibility = state.current === 0 ? "hidden" : "visible";
  $("#next-btn").disabled = state.answers[state.current] === null;
  $("#next-btn").textContent =
    state.current === questions.length - 1 ? "Ver mi resultado →" : "Siguiente →";
}

function calculateResult() {
  const score = { fold: 0, ultra: 0, flip: 0, glasses: 0, watch: 0 };

  state.answers.forEach((answerIndex, questionIndex) => {
    const scoring = questions[questionIndex].answers[answerIndex].scores;
    Object.entries(scoring).forEach(([key, value]) => {
      score[key] += value;
    });
  });

  const priority = ["fold", "ultra", "flip", "glasses", "watch"];
  return priority.sort((a, b) => score[b] - score[a])[0];
}

function renderResult() {
  const key = calculateResult();
  const result = results[key];

  $("#result-name").textContent = result.name;
  $("#result-icon").textContent = result.icon;
  $("#result-tagline").textContent = result.tagline;
  $("#result-description").textContent = result.description;
  $("#result-traits").innerHTML = result.traits
    .map((trait) => `<span>${trait}</span>`)
    .join("");
  $("#result-badge").textContent = `RESULTADO · ${key.toUpperCase()}`;

  $("#result-card").dataset.result = key;
  $("#share-status").textContent = "";
  showScreen("result");
}

$("#start-btn").addEventListener("click", () => {
  showScreen("quiz");
  renderQuestion();
});

$("#next-btn").addEventListener("click", () => {
  if (state.answers[state.current] === null) return;

  if (state.current < questions.length - 1) {
    state.current += 1;
    renderQuestion();
  } else {
    renderResult();
  }
});

$("#back-btn").addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});

$("#restart-btn").addEventListener("click", () => {
  state.current = 0;
  state.answers = Array(questions.length).fill(null);
  showScreen("start");
});

$("#share-btn").addEventListener("click", async () => {
  const resultName = $("#result-name").textContent;
  const text = `Mi Galaxy ideal es ${resultName}. Descubre el tuyo en Galaxy Insider.`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: "Mi Galaxy ideal",
        text,
        url: window.location.href
      });
      $("#share-status").textContent = "¡Resultado compartido!";
    } else {
      $("#share-status").textContent =
        "Haz una captura de pantalla para compartir tu resultado.";
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      $("#share-status").textContent =
        "Haz una captura de pantalla para compartir tu resultado.";
    }
  }
});
