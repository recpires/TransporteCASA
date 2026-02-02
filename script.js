const transportadores = [
  {
    nome: "Adriano",
    tel: "5511986699811",
    itinerario:
      "Bairro Jardim, Bangu, Santa Maria, Camilópolis, Campestre, Centro, Curuça, Jardim Ana Maria, Jardim Alzira Franco, Jardim Rina, Jardim Santo Alberto, Jardim Sônia Maria, Parque Capuava, Parque Erasmo, Parque João Ramalho, Parque das Nações, Parque Jaçabuta, Santa Terezinha, Vila Alice, Vila Guiomar, Vila Lucinda, Vila Metalúrgica, Vila Príncipe de Gales, Vila Sacadura Cabral, Parque Novo Oratório, Utinga.",
  },
  {
    nome: "Cecília",
    tel: "5511982473985",
    itinerario:
      "Jardim Guarará, Jardim Irene, Vila João Ramalho, Vila Luzita, Vila Lutécia, Vila Suiça, Vila Tibiriçá, Jardim Ipanema, Jardim Santo André, Jardim Silveira, Vila Humaitá, Vila Pires, Jardim Progresso, Vila Linda, Vila Helena, Vila Alzira, Jardim Jamaica, Vila Apiaí.",
  },
  {
    nome: "Dalnei",
    tel: "5511976927307",
    itinerario:
      "Vila Assunção, Ipiranguinha, Vila América, Vila Homero Thon, Vila Humaitá, Vila Pires, Vila Guarani, Jardim Marek, Parque Marajoara, Cidade São Jorge, Centreville, Parque Gerassi, Vila Progresso, Jardim Ipanema, Vila Guaraciaba, Jardim Mirante, Vila Tibiriçá, Vila Lutécia, Vila Suiça, Condomínio Maracanã.",
  },
  {
    nome: "Fernandes",
    tel: "5511911801809",
    itinerario:
      "Vila Helena, Jardim do Estádio, Jardim Cauibi, Paraíso, Vila Gilda, Parque Bandeirantes, Bom Pastor, Vila Floresta, Pinheirinho, Valparaíso, Vila Bastos, Centro.",
  },
  {
    nome: "Mozar",
    tel: "5511942016377",
    itinerario:
      "Centre Ville, Condomínio Maracanã, Jardim Marek, Teles Menezes, Parque Gerassi, Parque Marajoara, Vila América, Vila Cecília Maria, Vila Helena, Vila Homero Thon, Vila Humaitá, Vila Junqueira, Vila Pires, Vila Progresso, Vila Suiça, Vila Vitória, Vila Alzira, Vila Guarani, Vila Guaraciaba, Jardim Ipanema, Jardim Carla, Jardim Silvana, Vila Marina, Jardim Tibiriçá.",
  },
  {
    nome: "Ricardo",
    tel: "5511971327674",
    itinerario:
      "Vila Apiaí, Jardim Alvorada, Vila Bela Vista, Jardim Cristiane, Jardim Monções, Vila Eldízia, Vila Linda, Jardim Las Vegas, Jardim Jamaica, Jardim Milena, Jardim Oriental, Jardim Primavera, Paraíso, Jardim Progresso, Jardim Pilar, Jardim Stella.",
  },
  {
    nome: "Roseli",
    tel: "5511982936062",
    itinerario:
      "Vila Assunção, Vila Eldízia, Jardim Cristiane, Jardim Milena, Jardim Las Vegas, Jardim Alvorada, Vila Linda, Vila Helena, Vila Vitória, Jd. Progresso, Vila Junqueira, Jardim Estádio, Jardim Telles de Menezes, Vila Luzita, Jardim Santa Cristina, Jardim Guarará, Jardim Aclimação, Cata Preta, Sítio dos Vianas, Jardim Irene, Vila João Ramalho, Vila Rica, Jardim Santo André.",
  },
];

transportadores.sort((a, b) => a.nome.localeCompare(b.nome));

const container = document.getElementById("lista-transportadores");
const detalhe = document.getElementById("detalhes");

function mostrar(index, el) {
  document
    .querySelectorAll(".card-transportador")
    .forEach((c) => c.classList.remove("selecionado"));
  el.classList.add("selecionado");
  const t = transportadores[index];
  detalhe.innerHTML = `
        <div style="animation: fadeIn 0.4s ease forwards;">
            <h2 style="color: var(--primary-blue);"><i class="fas fa-route"></i> Itinerário: ${t.nome}</h2>
            <div class="itinerario-card"><p>${t.itinerario}</p></div>
            <a href="https://wa.me/${t.tel}" target="_blank" class="btn-whatsapp-large"><i class="fab fa-whatsapp"></i> Iniciar Conversa</a>
        </div>`;
}

transportadores.forEach((t, i) => {
  const d = document.createElement("div");
  d.className = "card-transportador";
  d.innerHTML = `<span>${t.nome}</span> <i class="fab fa-whatsapp" style="color:#25d366"></i>`;
  d.onclick = () => mostrar(i, d);
  container.appendChild(d);
});
