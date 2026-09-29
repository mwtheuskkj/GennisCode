const courses = [
  {
    id: "python",
    title: "Python — 40h (Vídeo & Playlist)",
    meta: "PY · PYTHON",
    category: "programacao",
    source: "YouTuber: Curso em Vídeo",
    icon: '<i class="fa-brands fa-python"></i>',
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
    description: "Aprenda os fundamentos necessários para começar a desenvolver aplicações web interativas com JavaScript.",
    topics: ["Variáveis e tipos", "Operadores e condições", "Loops e funções", "DOM e interação com páginas"],
    url: "https://www.cursoemvideo.com/curso/javascript/"
  },
  {
    id: "html",
    title: "HTML5 — 40h",
    meta: "<> · HTML",
    category: "web",
    source: "Site: Curso em Vídeo",
    icon: '<i class="fa-brands fa-html5"></i>',
    description: "Aprenda a estruturar páginas e aplicações web utilizando HTML5, da estrutura inicial aos principais elementos.",
    topics: ["Estrutura de documentos HTML", "Textos, links e imagens", "Listas, tabelas e formulários", "Semântica e organização"],
    url: "https://www.cursoemvideo.com/curso/html5/"
  },
  {
    id: "css",
    title: "CSS3 — 12h (Vídeo & Playlist)",
    meta: "# · CSS",
    category: "web",
    source: "YouTuber: Otávio Miranda",
    icon: '<i class="fa-brands fa-css3-alt"></i>',
    description: "Aprenda a estilizar interfaces, páginas e aplicações web, entendendo cores, espaçamento, posicionamento e responsividade.",
    topics: ["Seletores e propriedades", "Cores, fontes e espaçamento", "Box model e posicionamento", "Layouts e responsividade"],
    url: "https://www.youtube.com/watch?v=bCFTv8a59PE&list=PLbIBj8vQhvm00J3f3rD33tRuNLem8EgEA"
  },
  {
    id: "database",
    title: "Banco de Dados — 1h30 (Vídeo Completo)",
    meta: "DB · BANCO DE DADOS",
    category: "dados",
    source: "YouTuber: Stack Mobile",
    icon: '<i class="fa-solid fa-database"></i>',
    description: "Aprenda conceitos fundamentais de bancos de dados, SQL, tabelas e relacionamentos para construir uma base sólida em dados.",
    topics: ["Conceitos de banco de dados", "Tabelas e relacionamentos", "Introdução a SQL", "Consultas e organização dos dados"],
    url: "https://www.youtube.com/watch?v=9cAKQWodpvM&t=684s"
  },
  {
    id: "suporte",
    title: "Fundamentos de TI — 07h",
    meta: "IT · SUPORTE DE TI",
    category: "suporte",
    source: "Instituição: Fundação Bradesco",
    icon: '<i class="fa-solid fa-screwdriver-wrench"></i>',
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
  modalTopics: document.getElementById("modalTopics"),
  modalSource: document.getElementById("modalSource"),
  modalAccess: document.getElementById("modalAccess"),
  modalClose: document.getElementById("modalClose"),
  modalClose2: document.getElementById("modalClose2")
};

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

  els.modalIcon.innerHTML = course.icon;
  els.modalTag.textContent = course.meta;
  els.modalTitle.textContent = course.title;
  els.modalDescription.textContent = course.description;
  els.modalSource.textContent = course.source;
  els.modalTopics.innerHTML = course.topics.map(topic => `<li>${topic}</li>`).join("");
  els.modalAccess.href = course.url;
  // Restaura os elementos do modal que são ocultados nos modais informativos.
  els.modalAccess.style.display = "";
  els.modalClose2.textContent = "Fechar";
  els.modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  els.modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function openInfoModal(title, message) {
  els.modalIcon.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
  els.modalTag.textContent = "GENNISCODE";
  els.modalTitle.textContent = title;
  els.modalDescription.textContent = message;
  els.modalSource.textContent = "GennisCode";
  els.modalTopics.innerHTML = "<li>Estamos trabalhando para disponibilizar essa funcionalidade.</li><li>Em breve teremos mais informações por aqui.</li>";
  els.modalAccess.style.display = "none";
  els.modalClose2.textContent = "OK";
  els.modal.hidden = false;
  document.body.classList.add("modal-open");
}

function resetInfoModal() {
  els.modalAccess.style.display = "";
  els.modalClose2.textContent = "Fechar";
}

function showCommunity() {
  resetInfoModal();
  openInfoModal(
    "Comunidade em breve",
    "O sistema de comunidade da GennisCode ainda está em desenvolvimento. Estamos preparando um espaço para você compartilhar projetos, conquistas, dúvidas e experiências com outras pessoas da tecnologia."
  );
}

function showHelp() {
  resetInfoModal();
  openInfoModal(
    "Suporte ao usuário",
    "Ainda estamos trabalhando na área de suporte ao usuário. Em breve teremos um canal dedicado para dúvidas, sugestões e problemas relacionados à plataforma."
  );
}

function showAbout() {
  resetInfoModal();
  openInfoModal(
    "Sobre a GennisCode",
    "A GennisCode nasceu com a proposta de reunir, em um só lugar, caminhos gratuitos de aprendizado em programação, dados, web e suporte de TI, facilitando o início da jornada de quem quer entrar na tecnologia."
  );
}

function showTerms() {
  resetInfoModal();
  openInfoModal(
    "Termos de uso",
    "A GennisCode organiza e direciona usuários para conteúdos gratuitos publicados por plataformas parceiras ou fontes externas. Os conteúdos, regras e disponibilidade dos cursos pertencem aos respectivos provedores. Sempre confira as condições no site de destino."
  );
}

function showPrivacy() {
  resetInfoModal();
  openInfoModal(
    "Política de privacidade",
    "Esta versão do protótipo não exige cadastro para navegar pelos cursos. O campo de pesquisa e os filtros funcionam localmente no navegador. Antes de uma versão de produção, a política deverá ser revisada conforme os dados e serviços que forem efetivamente utilizados."
  );
}

function showContact() {
  resetInfoModal();
  openInfoModal(
    "Contato",
    "Os canais oficiais da GennisCode serão divulgados conforme o projeto avançar. Por enquanto, utilize os links das redes sociais disponíveis no rodapé."
  );
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("genniscode-theme", theme);
  const isLight = theme === "light";
  els.themeIcon.className = isLight ? "fa-solid fa-sun" : "fa-solid fa-moon";
  els.theme.setAttribute("aria-label", isLight ? "Ativar modo escuro" : "Ativar modo claro");
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

els.theme.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

els.mobileMenu.addEventListener("click", () => {
  els.nav.classList.toggle("open");
});

els.modalClose.addEventListener("click", closeModal);
els.modalClose2.addEventListener("click", closeModal);
els.modal.addEventListener("click", event => {
  if (event.target === els.modal) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !els.modal.hidden) closeModal();
});

document.getElementById("communityBtn").addEventListener("click", showCommunity);
document.getElementById("heroCommunityBtn").addEventListener("click", showCommunity);
document.getElementById("communityBannerBtn").addEventListener("click", showCommunity);
document.getElementById("helpBtn").addEventListener("click", showHelp);
document.getElementById("footerHelpBtn").addEventListener("click", showHelp);
document.getElementById("aboutBtn").addEventListener("click", showAbout);
document.getElementById("termsBtn").addEventListener("click", showTerms);
document.getElementById("privacyBtn").addEventListener("click", showPrivacy);
document.getElementById("contactBtn").addEventListener("click", showContact);

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => els.nav.classList.remove("open"));
});

renderCourses();
