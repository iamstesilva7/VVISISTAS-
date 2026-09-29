const GROUPS = {
  "André Chicale": `015 Barra Carrefour | 023 Barra Guanabara | 030 Niterói | 031 Limeira | 044 Piracicaba | 047 Embú das Artes | 069 Campo Limpo | 080 Baurú | 096 Marília | 098 ES / Vila Velha | 105 Jaú | 112 Park Shop Campo Grande | 123 RJ / Norte Shopping | 133 Araçatuba | 141 Jacarepaguá | 155 Birigui | 163 M' Boi Mirim | 172 Embú das Artes II | 173 Piracicaba Independência | 174 Campo Limpo II | 184 Estrada de Itapecerica | 199 Via Parque Shopping | 373 Copacabana | 379 Limeira II | 380 Parque Olímpico | 383 Botucatu Mall | 408 Botafogo | 409 Presidente Prudente | 414 Marília Esmeralda`,

  "Diego Koch": `001 Villa Lobos | 003 Giovanni | 004 Brooklin | 014 Interlar | 017 Marginal Pinheiros | 024 P&F Washington Luís | 032 Sabará | 037 Atlântica | 054 DF / Taquari | 055 DF / Casa Park | 056 Assaí Interlagos | 070 DF / Asa Norte | 076 DF / Plaza | 121 Portal do Morumbi | 158 DF / Gama | 159 Goiânia T63 | 160 DF / Planaltina | 168 Teotônio Vilela | 185 Carrefour Nações | 187 Goiânia Decathlon | 188 DF / Pistão Sul | 194 Brasília Venâncio | 364 MP / Águas Claras | 365 MP / Goiânia | 375 Candangolândia | 381 SIA DF | 394 Alto da Boa Vista | 395 DF Águas Claras | 407 Jardim Botânico`,

  "Ricardo Etagaki": `009 S. B. C / Jurubatuba | 019 São Caetano | 026 Praia Grande | 046 Frei Gaspar | 051 Sena Madureira | 063 S.B.C / Caminho do Mar | 064 Bragança Paulista | 073 S.B.C / Faria Lima | 077 Santos / Afonso Pena | 078 Santo André / Prestes Maia | 101 Sta Bárbara D'Oeste | 103 Santos Francisco Glicério | 111 São Judas | 113 PA / Belém | 115 Cons. Rod. Alves | 120 Praça da Árvore | 130 Sto André / Pereira Barreto | 138 Praia Grande Ocian | 152 São Vicente | 157 Diadema | 178 Santo André | 190 Americana | 192 George Corbisier | 196 Palmas | 363 MP / Batista Campos | 372 Guarujá | 404 Bragança P. Av. Imigrantes | 405 Santos Conselheiro Nébia | 410 Riviera de São Lourenço | 415 Vila Alpina`,

  "Evelin de Oliveira": `005 Imigrantes | 006 Campinas / Galleria | 010 Center Norte | 016 Campinas / Cambuí | 040 Campinas / Taquaral | 042 Ricardo Jafet | 045 Campinas / Iguatemí | 048 Campinas / Assaí Abolição | 049 Braz Leme | 059 SP Ipiranga | 072 Campinas / Amoreiras | 089 Del Rey | 093 Juiz de Fora | 099 Belvedere | 102 Campinas / Cambuí II | 107 Princesa D'Oeste | 118 BH / N. Sra do Carmo | 127 Uberaba | 128 BH Castelo | 131 Uberlândia | 134 Cachoeirinha | 135 Santana | 182 Minas Shopping | 183 MG / Av. do Contorno | 390 Buritis | 392 BH Andradas | 397 Av. Imirim | 402 Engenheiro Caetano Alvares | 406 Nova Cantareira | 418 Swiss Park Mall`,

  "Fabiano Pazini": `012 Guarulhos | 039 Atibaia | 050 Guarulhos / Centro | 053 Pompéia | 071 Recife | 085 Fortaleza Iguatemi | 104 Ermano Marchetti | 108 Atibaia II | 116 Fortaleza Aldeota | 119 Av. Sumaré | 149 Natal | 153 Fortaleza Reserva Open Mall | 161 CE / Maracanaú | 164 Jaboatão dos Guararapes | 166 Aracajú Shopping | 191 Av Angélica | 193 Av. Jardim Japão | 195 Fortaleza Meireles | 352 MP / Aldeota | 354 Casa Forte | 356 MP / Manaíra Shopping | 357 MP / Washington Soares | 361 MP / Tirol | 362 MP / Fortaleza Eusébio | 374 GRU Timóteo Penteado | 382 Maceió Fernandes Lima | 384 J. P. Epitácio Pessoa | 389 Água Branca Sonda | 401 Guarulhos Sakamoto | 413 João Pessoa Bessa | 416 Juazeiro Open Mall`,

  "José Gilvan": `011 Granja Vianna | 021 Sorocaba / Panorâmico | 029 Carapicuíba | 036 Sorocaba / Itavuvú | 038 Curitiba / Tourinho | 041 Sorocaba / Pannunzio | 057 Londrina Me. Leonia | 058 Londrina Centro | 061 Curitiba / Linha Verde | 065 Tamboré | 075 Ponta Grossa | 084 Maringá | 094 São José dos Pinhais | 097 Osasco / J. Andrade | 132 Cascavel | 142 Park City Sumaré | 146 Paulínia | 150 Raposo Tavares Decathlon | 156 Curitiba Novo Mundo | 167 Ponta Grossa II | 179 Pinhais | 371 Alphaville Rio Negro | 386 CTB Rui Barbosa | 388 CTB Pinheirinho | 391 Cotia | 403 Sorocaba Av. São Paulo | 411 Jandira Mall | 412 Osasco Getúlio Vargas`,

  "Lais Andrioli": `007 Butantã | 008 Alto de Pinheiros | 018 Augusta | 022 Ribeirão / Iguatemí | 025 Teodoro Sampaio | 027 São José do Rio Preto | 028 Cerro Corá | 034 Ribeirão / Maurílio | 052 Rebouças | 074 Jundiaí | 091 Vinhedo | 100 Eldorado | 106 Ribeirão / Pres. Vargas | 110 SJRP Falavina | 129 Shopping Estação Cuiabá | 136 Jundiaí Cica | 139 Valinhos | 140 Barretos | 144 Varzea Grande / MT | 154 Ribeirão / Av. D. Pedro I | 180 Franca | 181 Corifeu | 189 Cuiabá CPA | 198 Indaiatuba | 367 Av. Morumbi | 377 Assaí Anhanguera | 398 Campo Grande MS | 399 Salto`,

  "Lisiane Alves": `043 Porto Alegre / Iguatemi | 062 RS / Canoas | 066 POA / Praia de Belas | 067 POA / Barra Sul | 079 SC / Shopping Continente | 081 POA / Ipiranga | 087 SC / Blumenau | 088 SC / Barreiros | 090 RS / Passo Fundo | 092 Caxias do Sul | 109 Pelotas / RS | 117 POA Moinho de Ventos | 124 Criciúma | 125 Joinville | 126 Blumenau Neumarkt | 143 POA Av Brasil | 148 Florianópolis | 165 POA / Bollogna | 169 SC/ Itajaí | 175 Florianópolis Centro | 186 POA Central Parque | 197 Viamão | 368 POA Assis Brasil | 369 Canoas BR116 | 370 POA Wenceslau Escobar | 396 Novo Hamburgo`,

  "Roseli Teixeira": `002 Osasco | 020 São José dos Campos | 033 Araraquara | 060 Assaí Marginal Tietê | 068 Taubaté | 082 Moóca | 083 Aricanduva | 086 Tatuapé | 095 SJC / Jardim Oriente | 114 Taubaté II | 122 Marechal Tito | 137 Carrão | 145 SJ Nelson D'Ávila | 147 Tutóia | 151 São Carlos | 162 Moema Pássaros | 170 BA / Feira de Santana | 176 Itaquaquecetuba | 350 Jacareí Tenda | 351 Itaquera | 353 MP / Rio Vermelho | 355 Lauro de Freitas | 358 MP / Graça | 360 MP / Salvador Shopping | 376 Cantareira Norte Shopping | 385 Av. São Miguel | 393 Rio das Pedras | 400 Araraquara Savegnago | 417 Caieiras`
};

const REGIONS = Object.keys(GROUPS);

const STORES = Object.entries(GROUPS).flatMap(([regional, list]) =>
  list.split(" | ").map(item => ({
    code: item.slice(0, 3),
    name: item.slice(4),
    regional
  }))
);

const key = "visitas-demo-v1";

const previousNames = {
  Etagaki: "Ricardo Etagaki",
  Evelin: "Evelin de Oliveira",
  Fabiano: "Fabiano Pazini",
  Gilvan: "José Gilvan",
  Lais: "Lais Andrioli",
  Lisiane: "Lisiane Alves",
  Roseli: "Roseli Teixeira"
};

const savedUser = sessionStorage.getItem("visitas-user") || "";

let state = {
  user: previousNames[savedUser] || savedUser,
  tab: "lojas",
  region: "",
  search: "",
  modal: null
};

let visits = load();

function load() {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function save() {
  localStorage.setItem(key, JSON.stringify(visits));
}

function today() {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function dateObj(value) {
  return new Date(value + "T12:00:00");
}

function fmt(value) {
  return dateObj(value).toLocaleDateString("pt-BR");
}

function dayDiff(value) {
  return Math.max(
    0,
    Math.floor((dateObj(today()) - dateObj(value)) / 86400000)
  );
}

function since(value) {
  if (!value) return "Sem visita registrada";

  const days = dayDiff(value);

  if (days === 0) return "Visitada hoje";
  if (days === 1) return "Visitada há 1 dia";
  if (days < 30) return `Visitada há ${days} dias`;

  const months = Math.floor(days / 30);
  return `Visitada há ${months} ${months === 1 ? "mês" : "meses"}`;
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function own(store) {
  return state.user === "diretor" || store.regional === state.user;
}

function stores() {
  return STORES
    .filter(own)
    .filter(store => !state.region || store.regional === state.region)
    .filter(store =>
      `${store.code} ${store.name}`
        .toLocaleLowerCase()
        .includes(state.search.toLocaleLowerCase())
    );
}

function last(store) {
  return visits
    .filter(visit => visit.code === store.code)
    .sort((a, b) => b.date.localeCompare(a.date))[0]?.date;
}

function isoWeekStart() {
  const date = dateObj(today());
  date.setDate(date.getDate() - (date.getDay() + 6) % 7);
  return date.toLocaleDateString("sv-SE");
}

function counts() {
  const current = today();
  const weekStart = isoWeekStart();

  const filtered = visits.filter(visit =>
    STORES.some(store =>
      store.code === visit.code &&
      own(store) &&
      (!state.region || store.regional === state.region)
    )
  );

  return [
    filtered.filter(v => v.date >= weekStart && v.date <= current).length,
    filtered.filter(v => v.date.slice(0, 7) === current.slice(0, 7)).length,
    filtered.filter(v => v.date.slice(0, 4) === current.slice(0, 4)).length,
    stores().filter(store =>
      !last(store) || dayDiff(last(store)) >= 30
    ).length
  ];
}

function renderHistory() {
  const visible = visits
    .filter(visit => {
      const store = STORES.find(item => item.code === visit.code);

      return store &&
        own(store) &&
        (!state.region || store.regional === state.region) &&
        `${store.code} ${store.name}`
          .toLocaleLowerCase()
          .includes(state.search.toLocaleLowerCase());
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  if (!visible.length) {
    return '<div class="empty">Ainda não há visitas registradas para este filtro.</div>';
  }

  return `
    <div class="history">
      ${visible.map(visit => {
        const store = STORES.find(item => item.code === visit.code);

        return `
          <article>
            <strong>${fmt(visit.date)} · ${store.code} — ${esc(store.name)}</strong>
            <div class="muted">
              ${esc(visit.author)}
              ${visit.note ? " · " + esc(visit.note) : ""}
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderModal() {
  const list = STORES.filter(own);

  return `
    <div class="overlay">
      <form class="modal" id="visitForm">
        <h2>Registrar visita</h2>
        <p class="muted">Informe a loja e a data da visita.</p>

        <div class="field">
          <label for="store">Loja</label>
          <select id="store" required>
            ${list.map(store => `
              <option value="${store.code}"
                ${state.modal === store.code ? "selected" : ""}>
                ${store.code} — ${esc(store.name)}
              </option>
            `).join("")}
          </select>
        </div>

        <div class="field">
          <label for="date">Data</label>
          <input id="date" type="date"
            value="${today()}" max="${today()}" required>
        </div>

        <div class="field">
          <label for="note">Observação (opcional)</label>
          <textarea id="note" maxlength="500"
            placeholder="Pontos importantes da visita"></textarea>
        </div>

        <div class="actions">
          <button class="button secondary" type="button" id="cancel">
            Cancelar
          </button>
          <button class="button" type="submit">Salvar visita</button>
        </div>
      </form>
    </div>
  `;
}

function render() {
  const root = document.getElementById("app");

  if (!state.user) {
    root.innerHTML = `
      <div class="login">
        <div class="brand">● Controle de Visitas</div>
        <h1>Controle de Visitas Operacionais</h1>
        <p>Selecione seu perfil para acessar as lojas e registrar visitas.</p>

        <div class="field">
          <label for="profile">Perfil</label>
          <select id="profile">
            <option value="">Selecione</option>
            <option value="diretor">Francisco Amorim</option>
            ${REGIONS.map(region => `
              <option value="${esc(region)}">Regional — ${esc(region)}</option>
            `).join("")}
          </select>
        </div>

        <button class="button" id="enter">Entrar</button>
        <div class="notice">
          Os registros ficam salvos neste navegador.
        </div>
      </div>
    `;

    document.getElementById("enter").onclick = () => {
      const selected = document.getElementById("profile").value;

      if (selected) {
        state.user = selected;
        sessionStorage.setItem("visitas-user", selected);
        render();
      }
    };

    return;
  }

  const totals = counts();
  const visibleStores = stores();

  root.innerHTML = `
    <header>
      <div>
        <strong>● Controle de Visitas</strong>
        <small>
          ${state.user === "diretor"
            ? "Diretor de Operações · Francisco Amorim"
            : "Regional · " + esc(state.user)}
        </small>
      </div>
      <button class="button ghost" id="logout">Sair</button>
    </header>

    <main class="shell">
      <div class="hero">
        <div>
          <span class="muted">
            ${dateObj(today()).toLocaleDateString("pt-BR", {
              month: "long",
              year: "numeric"
            })}
          </span>
          <h1>
            ${state.user === "diretor"
              ? "Visão geral das lojas"
              : "Minhas lojas"}
          </h1>
        </div>
        <button class="button" id="new">+ Registrar visita</button>
      </div>

      <div class="cards">
        ${[
          ["Nesta semana", totals[0]],
          ["Neste mês", totals[1]],
          ["Neste ano", totals[2]],
          ["Há 30+ dias ou nunca", totals[3]]
        ].map(([label, number]) => `
          <div class="card">
            <div class="label">${label}</div>
            <div class="num">${number}</div>
          </div>
        `).join("")}
      </div>

      <div class="tabs">
        <button data-tab="lojas"
          class="${state.tab === "lojas" ? "active" : ""}">
          Lojas
        </button>
        <button data-tab="historico"
          class="${state.tab === "historico" ? "active" : ""}">
          Histórico
        </button>
      </div>

      <div class="toolbar">
        ${state.user === "diretor" ? `
          <select id="region">
            <option value="">Todas as regionais</option>
            ${REGIONS.map(region => `
              <option value="${esc(region)}"
                ${state.region === region ? "selected" : ""}>
                ${esc(region)}
              </option>
            `).join("")}
          </select>
        ` : ""}

        <input id="search" type="search"
          placeholder="Buscar loja ou código"
          value="${esc(state.search)}">
      </div>

      <section class="panel" style="margin-top:16px">
        <div class="panelhead">
          <h2>
            ${state.tab === "lojas"
              ? "Lojas (" + visibleStores.length + ")"
              : "Visitas registradas"}
          </h2>
          <span class="muted">
            ${state.tab === "lojas" ? "Última visita" : "Data e responsável"}
          </span>
        </div>

        ${state.tab === "lojas"
          ? visibleStores.length
            ? visibleStores.map(store => {
                const date = last(store);

                return `
                  <div class="row">
                    <div>
                      <strong>
                        ${store.code} — ${esc(store.name)}
                      </strong>
                      <small>${esc(store.regional)}</small>
                    </div>

                    <div class="meta">
                      ${date ? fmt(date) : "Nenhuma visita"}
                    </div>

                    <div class="status">
                      <span class="tag ${
                        !date ? "none" : dayDiff(date) >= 30 ? "old" : ""
                      }">
                        ${since(date)}
                      </span>
                    </div>

                    <button class="button secondary"
                      data-add="${store.code}">
                      Registrar
                    </button>
                  </div>
                `;
              }).join("")
            : '<div class="empty">Nenhuma loja encontrada.</div>'
          : renderHistory()}
      </section>

      <p class="notice">
        Contagens calculadas com as visitas registradas neste navegador.
      </p>
    </main>

    ${state.modal ? renderModal() : ""}
  `;

  bind();
}

function bind() {
  document.getElementById("logout").onclick = () => {
    state.user = "";
    state.region = "";
    sessionStorage.removeItem("visitas-user");
    render();
  };

  document.getElementById("new").onclick = () => {
    state.modal = "new";
    render();
  };

  document.querySelectorAll("[data-tab]").forEach(button => {
    button.onclick = () => {
      state.tab = button.dataset.tab;
      render();
    };
  });

  document.querySelectorAll("[data-add]").forEach(button => {
    button.onclick = () => {
      state.modal = button.dataset.add;
      render();
    };
  });

  const regionSelect = document.getElementById("region");

  if (regionSelect) {
    regionSelect.onchange = () => {
      state.region = regionSelect.value;
      render();
    };
  }

  document.getElementById("search").oninput = event => {
    const position = event.target.selectionStart;
    state.search = event.target.value;
    render();

    const newInput = document.getElementById("search");
    newInput.focus();
    newInput.setSelectionRange(position, position);
  };

  if (state.modal) {
    document.getElementById("cancel").onclick = () => {
      state.modal = null;
      render();
    };

    document.querySelector(".overlay").onclick = event => {
      if (event.target.classList.contains("overlay")) {
        state.modal = null;
        render();
      }
    };

    document.getElementById("visitForm").onsubmit = event => {
      event.preventDefault();

      const code = document.getElementById("store").value;
      const date = document.getElementById("date").value;
      const note = document.getElementById("note").value.trim();

      if (!date || date > today()) return;

      visits.push({
        code,
        date,
        note,
        author: state.user === "diretor"
          ? "Francisco Amorim"
          : "Regional " + state.user
      });

      save();
      state.modal = null;
      render();
    };
  }
}

render();