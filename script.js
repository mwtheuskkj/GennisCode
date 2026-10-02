const courses = [
  {
    id: "python",
    title: "Python — 40h (Vídeo & Playlist)",
    meta: "PY · PYTHON",
    category: "programacao",
    source: "YouTuber: Curso em Vídeo",
    icon: '<i class="fa-brands fa-python"></i>',
    language: "Python",
    lessons: [
      { title: "Mundo 1 - Python", label: "Fundamentos", url: "https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6" },
      { title: "Mundo 2 - Python", label: "Estruturas de Controle", url: "https://www.youtube.com/watch?v=nJkVHusJp6E&list=PLHz_AreHm4dk_nZHmxxf_J0WRAqy5Czye" },
      { title: "Mundo 3 - Python", label: "Estruturas Compostas", url: "https://www.youtube.com/watch?v=0LB3FSfjvao&list=PLHz_AreHm4dksnH2jVTIVNviIMBVYyFnH" }
    ],
    description: "Comece pela lógica e pelos fundamentos da linguagem Python em uma trilha introdutória, gratuita e pensada para quem está dando os primeiros passos.",
    topics: ["Sintaxe e estrutura básica", "Variáveis, tipos e operadores", "Condicionais e repetição", "Funções e primeiros exercícios"],
    url: "https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0"
  },
  {
    id: "java",
    title: "Java — 40h",
    meta: "JV · JAVA",
    category: "programacao",
    source: "Site: Curso em Vídeo",
    icon: '<i class="fa-brands fa-java"></i>',
    language: "Java",
    lessons: [
      { title: "Módulo 1 - Java", label: "Fundamentos da linguagem", url: "https://www.cursoemvideo.com/curso/java/" },
      { title: "Módulo 2 - Java", label: "Estruturas e lógica", url: "https://www.youtube.com/watch?v=sTX0UEplF54&list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR" },
      { title: "Módulo 3 - Java", label: "Classes e objetos", url: "https://www.youtube.com/watch?v=Ucyx_QPfDng&list=PLHz_AreHm4dkqe2aR0tQK74m8SFe-aGsY&index=2" }
    ],
    description: "Conheça os fundamentos da linguagem Java e comece sua jornada em programação orientada a objetos.",
    topics: ["Sintaxe e variáveis", "Estruturas de decisão e repetição", "Métodos e classes", "Conceitos iniciais de orientação a objetos"],
    url: "https://www.cursoemvideo.com/curso/java/"
  },
  {
    id: "javascript",
    title: "JavaScript — 40h",
    meta: "JS · JAVASCRIPT",
    category: "web",
    source: "Site: Curso em Vídeo",
    icon: '<i class="fa-brands fa-js"></i>',
    language: "JavaScript",
    lessons: [
      { title: "Módulo 1 - JavaScript", label: "Variáveis e tipos", url: "https://www.cursoemvideo.com/curso/javascript/" },
      { title: "Módulo 2 - JavaScript", label: "Condições e repetições", url: "https://www.youtube.com/watch?v=1-w1RfGIov4&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1" },
      { title: "Módulo 3 - JavaScript", label: "Funções e DOM", url: "https://www.youtube.com/watch?v=E4DBTqgxHGM&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T" }
    ],
    description: "Aprenda os fundamentos necessários para começar a desenvolver aplicações web interativas com JavaScript.",
    topics: ["Variáveis e tipos", "Operadores e condições", "Loops e funções", "DOM e interação com páginas"],
    url: "https://www.cursoemvideo.com/curso/javascript/"
  },
  {
    id: "html",
    title: "HTML5 — 40h",
    meta: "<> · HTML",
    category: "web",
    source: "Site: Curso em Vídeo | Programação Web | Serliv",
    icon: '<i class="fa-brands fa-html5"></i>',
    language: "HTML5",
    lessons: [
      { title: "Módulo 1 - HTML5", label: "Estrutura e fundamentos", url: "https://www.cursoemvideo.com/curso/html5/" },
      { title: "Módulo 2 - HTML5 + CSS3", label: "Estilos e organização", url: "https://www.youtube.com/watch?v=sj0p9O85AIg&list=PL2Fdisxwzt_cajoGVWTx44wM6Ht09QJ3A" },
      { title: "Módulo 3 - HTML5", label: "Formulários e recursos", url: "https://www.youtube.com/watch?v=0Pm6ex5HDGY&list=PL1dUY2RYa2RhNhm-QTuNIifVpc59wrpFP" }
    ],
    description: "Aprenda a estruturar páginas e aplicações web utilizando HTML5, da estrutura inicial aos principais elementos.",
    topics: ["Estrutura de documentos HTML", "Textos, links e imagens", "Listas, tabelas e formulários", "Semântica e organização"],
    url: "https://www.cursoemvideo.com/curso/html5/"
  },
  {
    id: "css",
    title: "CSS3 — 12h (Vídeo & Playlist)",
    meta: "# · CSS",
    category: "web",
    source: "YouTuber: Otávio Miranda | Programação Web | Curso em Vídeo",
    icon: '<i class="fa-brands fa-css3-alt"></i>',
    language: "CSS3",
    lessons: [
      { title: "Módulo 1 - CSS3", label: "Seletores e propriedades", url: "https://www.youtube.com/watch?v=bCFTv8a59PE&list=PLbIBj8vQhvm00J3f3rD33tRuNLem8EgEA" },
      { title: "Módulo 2 - CSS3", label: "Layout e posicionamento", url: "https://www.youtube.com/watch?v=HtVRRHoASes&list=PL2Fdisxwzt_f5C7Mv0kg1EAHhy2VJLf1c" },
      { title: "Módulo 3 - CSS3", label: "Responsividade", url: "https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" }
    ],
    description: "Aprenda a estilizar interfaces, páginas e aplicações web, entendendo cores, espaçamento, posicionamento e responsividade.",
    topics: ["Seletores e propriedades", "Cores, fontes e espaçamento", "Box model e posicionamento", "Layouts e responsividade"],
    url: "https://www.youtube.com/watch?v=bCFTv8a59PE&list=PLbIBj8vQhvm00J3f3rD33tRuNLem8EgEA"
  },
  {
    id: "database",
    title: "Banco de Dados — 1h30 (Vídeo Completo)",
    meta: "DB · BANCO DE DADOS",
    category: "dados",
    source: "YouTuber: Stack Mobile | TecEdu4All | Data ICMC",
    icon: '<i class="fa-solid fa-database"></i>',
    language: "Banco de Dados",
    lessons: [
      { title: "Módulo 1 - Banco de Dados", label: "Conceitos fundamentais", url: "https://youtu.be/EguLorp-JYk?si=c7-c14qBZKNbXJaV" },
      { title: "Módulo 2 - Banco de Dados", label: "Tabelas e relacionamentos", url: "https://www.youtube.com/live/vg17Slw-vKM?si=a7YwNXRd7_elUYtr" },
      { title: "Módulo 3 - SQL", label: "Consultas e organização", url: "https://www.youtube.com/watch?v=9cAKQWodpvM&t=684s" }
    ],
    description: "Aprenda conceitos fundamentais de bancos de dados, SQL, tabelas e relacionamentos para construir uma base sólida em dados.",
    topics: ["Conceitos de banco de dados", "Tabelas e relacionamentos", "Introdução a SQL", "Consultas e organização dos dados"],
    url: "https://www.youtube.com/watch?v=9cAKQWodpvM&t=684s"
  },
  {
    id: "suporte",
    title: "Fundamentos de TI — 07h",
    meta: "IT · SUPORTE DE TI",
    category: "suporte",
    source: "Instituição: Fundação Bradesco | Curso em Vídeo",
    icon: '<i class="fa-solid fa-screwdriver-wrench"></i>',
    language: "Fundamentos de TI",
    lessons: [
      { title: "Módulo 1 - Fundamentos de TI", label: "Hardware e software", url: "https://www.ev.org.br/cursos/fundamentos-de-ti-hardware-e-software" },
      { title: "Módulo 2 - Fundamentos de TI", label: "Sistemas e redes", url: "https://www.cursoemvideo.com/curso/hardware/" },
      { title: "Módulo 3 - Fundamentos de TI", label: "https://www.cursoemvideo.com/curso/redes-de-computadores/" }
    ],
    description: "Conheça os fundamentos de Tecnologia da Informação e suporte técnico, incluindo conceitos essenciais de hardware e software.",
    topics: ["Hardware e periféricos", "Software e sistemas operacionais", "Conceitos de redes", "Rotinas e fundamentos de suporte"],
    url: "https://www.ev.org.br/cursos/fundamentos-de-ti-hardware-e-software"
  }
];

const els = {
  grid: document.getElementById("courseGrid"),
  search: document.getElementById("courseSearch"),
  filter: document.getElementById("categoryFilter"),
  count: document.getElementById("courseCount"),
  empty: document.getElementById("emptyState"),
  clear: document.getElementById("clearFilters"),
  theme: document.getElementById("themeToggle"),
  themeIcon: document.getElementById("themeIcon"),
  mobileMenu: document.getElementById("mobileMenu"),
  nav: document.querySelector(".main-nav"),
  modal: document.getElementById("modalBackdrop"),
  modalIcon: document.getElementById("modalIcon"),
  modalTag: document.getElementById("modalTag"),
  modalTitle: document.getElementById("modalTitle"),
  modalDescription: document.getElementById("modalDescription"),
  modalStatus: document.getElementById("modalStatus"),
  modalTopics: document.getElementById("modalTopics"),
  modalSource: document.getElementById("modalSource"),
  modalAccess: document.getElementById("modalAccess"),
  modalClose: document.getElementById("modalClose"),
  modalClose2: document.getElementById("modalClose2"),
  courseView: document.getElementById("courseView"),
  courseBack: document.getElementById("courseBack"),
  courseTheme: document.getElementById("courseThemeToggle"),
  courseThemeIcon: document.getElementById("courseThemeIcon"),
  courseTransition: document.getElementById("courseTransition"),
  courseTransitionIcon: document.getElementById("courseTransitionIcon"),
  courseTransitionTitle: document.getElementById("courseTransitionTitle"),
  coursePageIcon: document.getElementById("coursePageIcon"),
  coursePageMeta: document.getElementById("coursePageMeta"),
  coursePageTitle: document.getElementById("coursePageTitle"),
  coursePageDescription: document.getElementById("coursePageDescription"),
  coursePageTopics: document.getElementById("coursePageTopics"),
  lessonList: document.getElementById("lessonList"),
  coursePageSource: document.getElementById("coursePageSource"),
  reviewToggle: document.getElementById("reviewToggle"),
  reviewForm: document.getElementById("reviewForm"),
  reviewComment: document.getElementById("reviewComment"),
  reviewStatus: document.getElementById("reviewStatus"),
  reviewSummary: document.getElementById("reviewSummary"),
  reviewCancel: document.getElementById("reviewCancel"),
  ratingLabel: document.getElementById("ratingLabel"),
  starRating: document.getElementById("starRating"),
  profileModal: document.getElementById("profileModalBackdrop"),
  profileModalClose: document.getElementById("profileModalClose"),
  profileModalAvatar: document.getElementById("profileModalAvatar"),
  profileModalRole: document.getElementById("profileModalRole"),
  profileModalTitle: document.getElementById("profileModalTitle"),
  profileModalBio: document.getElementById("profileModalBio"),
  profileModalGithub: document.getElementById("profileModalGithub")
};

let activeCourseId = null;
let selectedRating = 0;

function renderCourses(list = courses) {
  els.grid.innerHTML = list.map(course => `
    <article class="course-card">
      <div class="course-icon">${course.icon}</div>
      <div class="course-meta"><span>${course.meta}</span></div>
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <div class="course-bottom">
        <span class="course-source">${course.source}</span>
        <button class="course-link" data-course="${course.id}">
          Acessar curso <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>
    </article>
  `).join("");

  els.count.textContent = `${list.length} ${list.length === 1 ? "curso" : "cursos"} disponíveis`;
  els.empty.hidden = list.length !== 0;

  document.querySelectorAll("[data-course]").forEach(button => {
    button.addEventListener("click", () => openCourse(button.dataset.course));
  });
}

function filterCourses() {
  const query = els.search.value.trim().toLowerCase();
  const category = els.filter.value;

  const filtered = courses.filter(course => {
    const searchable = `${course.title} ${course.meta} ${course.source} ${course.description}`.toLowerCase();
    const matchesQuery = !query || searchable.includes(query);
    const matchesCategory = category === "todos" || course.category === category;
    return matchesQuery && matchesCategory;
  });

  renderCourses(filtered);
}

function openCourse(id) {
  const course = courses.find(item => item.id === id);
  if (!course) return;

  activeCourseId = course.id;
  els.modalIcon.innerHTML = course.icon;
  els.modalStatus.hidden = true;
  els.modalTag.textContent = course.meta;
  els.modalTitle.textContent = course.title;
  els.modalDescription.textContent = course.description;
  els.modalSource.textContent = course.source;
  els.modalTopics.innerHTML = course.topics.map(topic => `<li>${topic}</li>`).join("");
  els.modalAccess.style.display = "";
  els.modalClose2.textContent = "Não";
  els.modal.hidden = false;
  document.body.classList.add("modal-open");
}

function enterCoursePage(id) {
  const course = courses.find(item => item.id === id);
  if (!course) return;

  activeCourseId = course.id;
  closeModal();
  populateCoursePage(course);
  els.courseView.hidden = false;
  els.courseView.classList.remove("page-fade-out");
  els.courseView.classList.add("page-fade-in");
  window.setTimeout(() => els.courseView.classList.remove("page-fade-in"), 650);
  els.courseView.setAttribute("aria-hidden", "false");
  document.querySelector(".site-shell").hidden = true;
  document.body.classList.add("course-open");
  history.pushState({ course: course.id }, "", `#curso/${course.id}`);

  els.courseTransitionIcon.innerHTML = course.icon;
  els.courseTransitionTitle.textContent = course.language || course.title;
  els.courseTransition.hidden = false;
  els.courseTransition.classList.remove("is-visible");
  requestAnimationFrame(() => els.courseTransition.classList.add("is-visible"));
  window.setTimeout(() => {
    els.courseTransition.classList.remove("is-visible");
    window.setTimeout(() => { els.courseTransition.hidden = true; }, 450);
  }, 1100);

  window.scrollTo({ top: 0, behavior: "auto" });
}

function populateCoursePage(course) {
  els.coursePageIcon.innerHTML = course.icon;
  els.coursePageMeta.textContent = course.meta;
  els.coursePageTitle.textContent = course.language || course.title;
  els.coursePageDescription.textContent = course.description;
  els.coursePageTopics.innerHTML = course.topics.map(topic => `<li>${topic}</li>`).join("");
  els.coursePageSource.textContent = course.source;

  const lessons = course.lessons?.length ? course.lessons : [{ title: course.title, label: "Acessar conteúdo", url: course.url }];
  els.lessonList.innerHTML = lessons.map((lesson, index) => `
    <a class="lesson-link" href="${lesson.url}" target="_blank" rel="noopener noreferrer">
      <span class="lesson-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="lesson-copy"><strong>${lesson.title}</strong><small>${lesson.label}</small></span>
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  `).join("");

  selectedRating = 0;
  els.reviewForm.hidden = true;
  els.reviewComment.value = "";
  els.reviewStatus.textContent = "";
  updateStars(0);
  renderReviewSummary(course.id);
}

function leaveCoursePage(useHistory = true) {
  els.courseTransition.classList.remove("is-visible");
  els.courseView.classList.add("page-fade-out");

  window.setTimeout(() => {
    els.courseView.hidden = true;
    els.courseView.setAttribute("aria-hidden", "true");
    els.courseView.classList.remove("page-fade-out");
    document.querySelector(".site-shell").hidden = false;
    document.body.classList.remove("course-open");

    const shell = document.querySelector(".site-shell");
    shell.classList.remove("page-fade-in");
    requestAnimationFrame(() => shell.classList.add("page-fade-in"));
    window.setTimeout(() => shell.classList.remove("page-fade-in"), 650);
  }, 320);

  if (useHistory) history.replaceState(null, "", "#cursos");
  window.scrollTo({ top: 0, behavior: "auto" });
}

function updateStars(rating) {
  selectedRating = rating;
  document.querySelectorAll(".star-button").forEach(star => {
    const value = Number(star.dataset.rating);
    const icon = star.querySelector("i");
    const active = value <= rating;
    icon.className = active ? "fa-solid fa-star" : "fa-regular fa-star";
    star.classList.toggle("active", active);
  });
  els.ratingLabel.textContent = rating ? `${rating} ${rating === 1 ? "estrela selecionada" : "estrelas selecionadas"}` : "Escolha uma nota";
}

function getReviews(courseId) {
  try {
    return JSON.parse(localStorage.getItem(`genniscode-reviews-${courseId}`)) || [];
  } catch {
    return [];
  }
}

function renderReviewSummary(courseId) {
  const reviews = getReviews(courseId);
  if (!reviews.length) {
    els.reviewSummary.innerHTML = `<span><i class="fa-regular fa-comment-dots"></i> Ainda não há avaliações neste navegador.</span>`;
    return;
  }

  const average = reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length;
  const rounded = Math.round(average * 10) / 10;
  els.reviewSummary.innerHTML = `
    <div><strong>${rounded.toFixed(1)}</strong><span class="summary-stars">${"★".repeat(Math.round(average))}${"☆".repeat(5 - Math.round(average))}</span></div>
    <span>${reviews.length} ${reviews.length === 1 ? "avaliação registrada" : "avaliações registradas"}</span>
  `;
}

function saveReview(event) {
  event.preventDefault();
  if (!activeCourseId) return;
  if (!selectedRating) {
    els.reviewStatus.textContent = "Escolha uma nota de 1 a 5 estrelas.";
    return;
  }

  const comment = els.reviewComment.value.trim();
  const reviews = getReviews(activeCourseId);
  reviews.push({ rating: selectedRating, comment, createdAt: new Date().toISOString() });
  localStorage.setItem(`genniscode-reviews-${activeCourseId}`, JSON.stringify(reviews));
  els.reviewStatus.textContent = "Avaliação registrada com sucesso neste navegador.";
  renderReviewSummary(activeCourseId);
  window.setTimeout(() => {
    els.reviewForm.hidden = true;
    els.reviewStatus.textContent = "";
  }, 1200);
}

function closeModal() {
  if (els.modal.hidden || els.modal.dataset.closing === "true") return;
  els.modal.dataset.closing = "true";
  els.modal.classList.add("is-closing");
  window.setTimeout(() => {
    els.modal.hidden = true;
    els.modal.classList.remove("is-closing");
    els.modal.dataset.closing = "false";
    document.body.classList.remove("modal-open");
  }, 220);
}

function openInfoModal(title, message, topics = [
  "Estamos trabalhando para disponibilizar essa funcionalidade.",
  "Em breve teremos mais informações por aqui."
], icon = '<i class="fa-solid fa-circle-info"></i>', statusText = "") {
  els.modal.dataset.closing = "false";
  els.modal.classList.remove("is-closing");
  els.modalIcon.innerHTML = icon;
  els.modalStatus.textContent = statusText;
  els.modalStatus.hidden = !statusText;
  els.modalTag.textContent = "GENNISCODE";
  els.modalTitle.textContent = title;
  els.modalDescription.textContent = message;
  els.modalSource.textContent = "GennisCode";
  els.modalTopics.innerHTML = topics.map(topic => `<li>${topic}</li>`).join("");
  els.modalAccess.style.display = "none";
  els.modalClose2.textContent = "OK";
  els.modal.hidden = false;
  document.body.classList.add("modal-open");
}

function resetInfoModal() {
  els.modalAccess.style.display = "";
  els.modalClose2.textContent = "Fechar";
  els.modalStatus.hidden = true;
  els.modalStatus.textContent = "";
}

function showCommunity() {
  resetInfoModal();
  openInfoModal(
    "Comunidade em breve",
    "O sistema de comunidade da GennisCode ainda está em desenvolvimento. Estamos preparando um espaço para você compartilhar projetos, conquistas, dúvidas e experiências com outras pessoas da tecnologia.",
    [
      "Compartilhe projetos e conquistas.",
      "Troque experiências com outras pessoas da tecnologia.",
      "A comunidade será liberada assim que a estrutura estiver pronta."
    ],
    '<i class="fa-solid fa-people-group"></i>'
  );
}

function showResumeComingSoon() {
  resetInfoModal();
  openInfoModal(
    "Turbine o seu Currículo",
    "Ainda estamos trabalhando nesta página para entregar uma experiência completa, organizada e realmente útil para você fortalecer o seu currículo na área de tecnologia.",
    [
      "Conteúdos e orientações para currículo tech.",
      "Materiais pensados para apoiar sua entrada no mercado de tecnologia."
    ],
    '<i class="fa-solid fa-file-lines"></i>',
    "Em breve"
  );
}

function showHelp() {
  resetInfoModal();
  openInfoModal(
    "Suporte / Ajuda",
    "Ainda estamos trabalhando na área de suporte da GennisCode para oferecer a melhor experiência possível durante o atendimento. Nosso objetivo é criar um espaço simples, rápido e útil para dúvidas, problemas e orientações.",
    [
      "O suporte dedicado está em desenvolvimento.",
      "Em breve teremos um canal próprio para atendimento e orientações.",
      "Enquanto isso, você pode entrar em contato pelo e-mail genniscode@gmail.com."
    ],
    '<i class="fa-solid fa-headset"></i>'
  );
}

function showAbout() {
  resetInfoModal();
  openInfoModal(
    "Sobre nós",
    "A GennisCode é um projeto criado para facilitar o acesso ao aprendizado em tecnologia, reunindo cursos e conteúdos gratuitos de programação, web, dados e suporte de TI em um só lugar. A proposta é reduzir o tempo que o usuário precisa gastar procurando materiais na internet e tornar o primeiro contato com a tecnologia mais simples.",
    [
      "Aprender programação e fundamentos de tecnologia.",
      "Encontrar conteúdos gratuitos organizados por trilhas.",
      "Explorar novos materiais conforme a plataforma evolui.",
      "Receber novas funcionalidades e atualizações ao longo do desenvolvimento."
    ]
  );
}

function showTerms() {
  resetInfoModal();
  openInfoModal(
    "Termos de uso",
    "A GennisCode disponibiliza uma plataforma de organização e direcionamento para vídeos, playlists, cursos e outros conteúdos educacionais gratuitos. O acesso aos conteúdos é oferecido sem custo pela GennisCode, mas alguns materiais são hospedados e disponibilizados por terceiros.",
    [
      "O usuário é responsável por utilizar o conteúdo de forma legal e respeitosa.",
      "A GennisCode não cobra pelo acesso aos conteúdos gratuitos apresentados.",
      "Links, vídeos, playlists e cursos externos podem ser alterados, removidos ou ter regras próprias pelos respectivos provedores.",
      "O conteúdo educacional pertence aos seus respectivos autores e instituições.",
      "A plataforma poderá receber novas funcionalidades, ajustes e atualizações durante seu desenvolvimento."
    ],
    '<i class="fa-solid fa-file-contract"></i>'
  );
}

function showPrivacy() {
  resetInfoModal();
  openInfoModal(
    "Política de privacidade",
    "A GennisCode valoriza a privacidade de seus visitantes. Nesta versão do projeto, a navegação pelos cursos e os filtros funcionam principalmente no próprio navegador, sem exigir cadastro para acessar os conteúdos. O domínio e a identidade do projeto são tratados como GennisCode.",
    [
      "Pesquisas e filtros de cursos podem funcionar localmente no navegador.",
      "Avaliações de cursos são armazenadas localmente neste navegador.",
      "Links externos podem direcionar para plataformas que possuem suas próprias políticas de privacidade.",
      "Novos recursos poderão exigir uma atualização desta política antes de entrarem em produção.",
      "A política deverá ser revisada conforme novos serviços, formulários ou formas de coleta de dados forem implementados."
    ],
    '<i class="fa-solid fa-shield-halved"></i>'
  );
}

function showContact() {
  resetInfoModal();
  openInfoModal(
    "Contato",
    "A área de contato e atendimento da GennisCode ainda está em desenvolvimento. Enquanto trabalhamos nessa parte, você pode enviar uma mensagem pelo nosso e-mail para pedir ajuda, enviar feedbacks, sugerir melhorias ou falar sobre o projeto.",
    [
      "Ajuda e dúvidas sobre a plataforma.",
      "Feedbacks e sugestões de melhoria.",
      "Relatos de problemas encontrados no site.",
      "Assuntos relacionados ao desenvolvimento do projeto."
    ],
    '<i class="fa-solid fa-envelope"></i>'
  );
}

const teamProfiles = {
  matheus: {
    name: "Matheus Pentogennis",
    role: "Fundador",
    bio: "Está na faculdade de Ciência da Computação na Instituição Braz Cubas.",
    github: "https://github.com/mwtheuskkj",
    avatar: "https://github.com/mwtheuskkj.png?size=160"
  },
  gustavo: {
    name: "Gustavo Naves",
    role: "Co-Fundador",
    bio: "Está na faculdade de Análise e Desenvolvimento de Sistemas na Instituição Braz Cubas.",
    github: "https://github.com/Massarubash",
    avatar: "https://github.com/Massarubash.png?size=160"
  },
  joao: {
    name: "João Guimarães",
    role: "Co-Fundador",
    bio: "Está na faculdade de Análise e Desenvolvimento de Sistemas na Instituição Braz Cubas.",
    github: "https://github.com/jaobom006",
    avatar: "https://github.com/jaobom006.png?size=160"
  },
  lucas: {
    name: "Lucas Teles",
    role: "Co-Fundador",
    bio: "Está na faculdade de Ciência da Computação na Instituição Braz Cubas.",
    github: "https://github.com/Luucasy",
    avatar: "https://github.com/Luucasy.png?size=160"
  },
  gabriel: {
    name: "Gabriel Gonçalves",
    role: "Co-Fundador",
    bio: "Está na faculdade de Análise e Desenvolvimento de Sistemas na Instituição Braz Cubas.",
    github: "https://github.com/midasrei68-dev",
    avatar: "https://github.com/midasrei68-dev.png?size=160"
  },
  gabrielgraca: {
    name: "Gabriel da Graça",
    role: "Co-Fundador",
    bio: "Está na faculdade de Análise e Desenvolvimento de Sistemas na Instituição Braz Cubas.",
    github: "https://github.com/CarlinhosDoPaoComMortadela",
    avatar: "https://github.com/CarlinhosDoPaoComMortadela.png?size=160"
  }
};

function openProfile(profileId) {
  const profile = teamProfiles[profileId];
  if (!profile) return;
  els.profileModalAvatar.src = profile.avatar;
  els.profileModalAvatar.alt = `Perfil de ${profile.name}`;
  els.profileModalRole.textContent = profile.role;
  els.profileModalTitle.textContent = profile.name;
  els.profileModalBio.textContent = profile.bio;
  els.profileModalGithub.href = profile.github;
  els.profileModal.hidden = false;
  els.profileModal.classList.remove("is-closing");
  document.body.classList.add("modal-open");
}

function closeProfileModal() {
  if (els.profileModal.hidden || els.profileModal.dataset.closing === "true") return;
  els.profileModal.dataset.closing = "true";
  els.profileModal.classList.add("is-closing");
  window.setTimeout(() => {
    els.profileModal.hidden = true;
    els.profileModal.classList.remove("is-closing");
    els.profileModal.dataset.closing = "false";
    document.body.classList.remove("modal-open");
  }, 220);
}

function preloadTeamAvatars() {
  Object.values(teamProfiles).forEach(profile => {
    const image = new Image();
    image.decoding = "async";
    image.src = profile.avatar;
  });
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("genniscode-theme", theme);
  const isLight = theme === "light";
  els.themeIcon.className = isLight ? "fa-solid fa-sun" : "fa-solid fa-moon";
  els.theme.setAttribute("aria-label", isLight ? "Ativar modo escuro" : "Ativar modo claro");
  if (els.courseThemeIcon) {
    els.courseThemeIcon.className = isLight ? "fa-solid fa-sun" : "fa-solid fa-moon";
    els.courseTheme.setAttribute("aria-label", isLight ? "Ativar modo escuro" : "Ativar modo claro");
  }
}

const savedTheme = localStorage.getItem("genniscode-theme");
setTheme(savedTheme === "light" ? "light" : "dark");

els.search.addEventListener("input", filterCourses);
els.filter.addEventListener("change", filterCourses);
els.clear.addEventListener("click", () => {
  els.search.value = "";
  els.filter.value = "todos";
  filterCourses();
});

function toggleTheme() {
  const current = document.documentElement.dataset.theme || "dark";
  setTheme(current === "dark" ? "light" : "dark");
}

els.theme.addEventListener("click", toggleTheme);
els.courseTheme.addEventListener("click", toggleTheme);

els.mobileMenu.addEventListener("click", () => {
  els.nav.classList.toggle("open");
});

els.modalClose.addEventListener("click", closeModal);
els.modalClose2.addEventListener("click", closeModal);
els.modalAccess.addEventListener("click", () => enterCoursePage(activeCourseId));
els.courseBack.addEventListener("click", () => leaveCoursePage(true));
els.modal.addEventListener("click", event => {
  if (event.target === els.modal) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (!els.profileModal.hidden) {
    closeProfileModal();
    return;
  }
  if (!els.modal.hidden) closeModal();
});

document.getElementById("communityBtn").addEventListener("click", showCommunity);
document.getElementById("resumeTrailBtn").addEventListener("click", showResumeComingSoon);
document.getElementById("heroCommunityBtn").addEventListener("click", showCommunity);
document.getElementById("communityBannerBtn").addEventListener("click", showCommunity);
document.getElementById("helpBtn").addEventListener("click", showHelp);
document.getElementById("footerHelpBtn").addEventListener("click", showHelp);
document.getElementById("aboutBtn").addEventListener("click", showAbout);
document.getElementById("termsBtn").addEventListener("click", showTerms);
document.getElementById("privacyBtn").addEventListener("click", showPrivacy);
document.getElementById("contactBtn").addEventListener("click", showContact);

document.querySelectorAll(".team-card").forEach(card => {
  card.addEventListener("click", () => openProfile(card.dataset.profile));
});

els.profileModalClose.addEventListener("click", closeProfileModal);
els.profileModal.addEventListener("click", event => {
  if (event.target === els.profileModal) closeProfileModal();
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    els.nav.classList.remove("open");
    const shell = document.querySelector(".site-shell");
    shell.classList.remove("page-fade-in");
    requestAnimationFrame(() => shell.classList.add("page-fade-in"));
    window.setTimeout(() => shell.classList.remove("page-fade-in"), 650);
  });
});

els.reviewToggle.addEventListener("click", () => {
  els.reviewForm.hidden = !els.reviewForm.hidden;
  if (!els.reviewForm.hidden) els.reviewComment.focus();
});

els.reviewCancel.addEventListener("click", () => {
  els.reviewForm.hidden = true;
  els.reviewComment.value = "";
  els.reviewStatus.textContent = "";
  updateStars(0);
});

document.querySelectorAll(".star-button").forEach(star => {
  star.addEventListener("click", () => updateStars(Number(star.dataset.rating)));
  star.addEventListener("mouseenter", () => {
    const value = Number(star.dataset.rating);
    document.querySelectorAll(".star-button").forEach(item => {
      item.classList.toggle("preview", Number(item.dataset.rating) <= value);
    });
  });
});
els.starRating.addEventListener("mouseleave", () => {
  document.querySelectorAll(".star-button").forEach(item => item.classList.remove("preview"));
});
els.reviewForm.addEventListener("submit", saveReview);

window.addEventListener("popstate", () => {
  const match = window.location.hash.match(/^#curso\/(.+)$/);
  if (match) {
    const course = courses.find(item => item.id === match[1]);
    if (course) {
      populateCoursePage(course);
      els.courseView.hidden = false;
      els.courseView.setAttribute("aria-hidden", "false");
      document.querySelector(".site-shell").hidden = true;
      document.body.classList.add("course-open");
      els.courseView.classList.remove("page-fade-out");
      els.courseView.classList.add("page-fade-in");
      window.setTimeout(() => els.courseView.classList.remove("page-fade-in"), 650);
      activeCourseId = course.id;
      return;
    }
  }
  if (!els.courseView.hidden) leaveCoursePage(false);
});

renderCourses();
preloadTeamAvatars();

// Permite abrir uma página de curso diretamente por hash sem alterar o projeto para múltiplas páginas HTML.
const initialCourse = window.location.hash.match(/^#curso\/(.+)$/);
if (initialCourse) {
  const course = courses.find(item => item.id === initialCourse[1]);
  if (course) enterCoursePage(course.id);
}

