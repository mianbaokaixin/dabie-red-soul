const officialOverview = "https://www.hnxx.gov.cn/2025/07-29/672623.html";

const sights = {
  museum: {
    symbol: "馆", category: "红色印记", title: "鄂豫皖苏区首府革命博物馆",
    location: "河南省信阳市新县县城首府路片区", query: "鄂豫皖苏区首府革命博物馆 新县",
    summary: "系统了解鄂豫皖革命根据地的发展历程与大别山红色记忆。",
    overview: "博物馆以鄂豫皖苏区革命史为核心。主展馆基本陈列设有序厅和六个展厅，展陈面积约1400平方米，并设有将军人物、刘邓大军千里跃进大别山和新县发展等专题陈列。",
    storyLabel: "革命历史",
    story: "基本陈列以“大别山·红旗不倒”为主题，从风起潮涌、星火燎原、辉煌苏区、浴血坚守到走向胜利，呈现大别山革命斗争的历史脉络及新县在其中的重要地位。",
    highlights: ["大别山革命史基本陈列", "新县籍将军与革命人物事迹", "千里跃进大别山专题内容"],
    source: officialOverview
  },
  cemetery: {
    symbol: "碑", category: "红色印记", title: "鄂豫皖苏区首府烈士陵园",
    location: "新县城南白马山东麓", query: "鄂豫皖苏区首府烈士陵园 新县",
    summary: "在庄严肃穆的纪念空间中缅怀鄂豫皖革命根据地英烈。",
    overview: "陵园依山而建，承担纪念、安葬、陈列和爱国主义教育等功能。公开资料显示，园内珍藏有领导人题词及烈士遗物4500余件，安葬近百位著名烈士和红军首长遗骨。",
    storyLabel: "革命历史",
    story: "陵园纪念鄂豫皖革命根据地13万多名革命烈士，是国内建设时间较早、烈士资料较为齐全的烈士纪念设施之一，集中反映大别山革命斗争的牺牲与传承。",
    highlights: ["革命烈士纪念设施", "烈士遗物与题词陈列", "白马山纪念环境"],
    source: officialOverview
  },
  xu: {
    symbol: "将", category: "红色印记", title: "许世友将军故里",
    location: "新县田铺乡许家洼", query: "许世友将军故里 新县 田铺乡",
    summary: "走进许世友将军出生与归葬之地，了解其革命生涯与家国情怀。",
    overview: "景区位于田铺乡，是许世友将军的出生地和安葬地，现为大别山区重要的爱国主义教育和革命传统教育场所。",
    storyLabel: "人物与革命历程",
    story: "许世友将军长期投身中国革命和国防建设。故里围绕其成长经历、军旅生涯和“忠国孝母”的人生故事展开，形成兼具人物纪念与革命教育意义的参观空间。",
    highlights: ["将军故居与故里环境", "人物生平与革命事迹", "革命传统教育内容"],
    source: officialOverview
  },
  jiancanghe: {
    symbol: "址", category: "红色印记", title: "箭厂河革命旧址群",
    location: "新县箭厂河乡，距县城约13公里", query: "吴焕先故居纪念馆 新县",
    mapLabel: "核心点地图", mapNote: "旧址群分散在箭厂河乡多处，地图链接定位至高德已收录的吴焕先故居纪念馆。",
    summary: "沿乡村旧址了解黄麻起义和鄂豫皖革命根据地早期发展。",
    overview: "旧址群分布于箭厂河乡，包括列宁小学、红田、吴焕先故居、红二十五军司令部旧址和红四方面军后方总医院旧址等多个纪念点。",
    storyLabel: "革命历史",
    story: "箭厂河是黄麻起义和鄂豫皖革命根据地的重要策源地之一。保存下来的旧址共同见证了早期党组织活动、红军建设、群众动员与医疗保障等历史。",
    highlights: ["列宁小学与红田", "吴焕先故居", "红二十五军及红四方面军相关旧址"],
    source: officialOverview
  },
  guojiahe: {
    symbol: "溪", category: "绿水青山", title: "郭家河省级湿地公园",
    location: "新县郭家河乡湾店村", query: "新县郭家河省级湿地公园",
    summary: "沿十里溪流与枫杨林漫步，观察湿地生态并体验户外休闲。",
    overview: "湿地公园与湖北省红安县七里坪镇接壤，枫杨林沿河绵延，拥有天然草坪、溪流湿地和多样鸟类栖息环境，是当地休闲、观景和自然观察点位。",
    storyLabel: "生态保护与文旅利用",
    story: "该湿地生态系统于2021年被河南省林业部门确定为省级湿地公园。当地在保护溪流、枫杨林和鸟类栖息环境的基础上完善步道与休闲空间，逐步形成低干扰的生态游览场景。",
    highlights: ["枫杨林与溪流湿地", "天然草坪", "鸟类及湿地生态观察"],
    source: officialOverview
  },
  huangmaojian: {
    symbol: "峰", category: "绿水青山", title: "黄毛尖星空露营公园",
    location: "新县田铺乡黄毛尖森林公园片区", query: "黄毛尖森林公园 新县",
    mapLabel: "公园地图", mapNote: "星空露营公园位于黄毛尖森林公园片区，地图链接采用高德稳定收录的黄毛尖森林公园。",
    summary: "登高看云海、日出与星空，感受大别山高海拔山地景观。",
    overview: "黄毛尖森林公园位于新县东南部，总面积约3300公顷，主峰海拔约1011.4米，可观云海、日出、杜鹃和樱花，也是山地摄影与户外休闲区域。",
    storyLabel: "生态保护与文旅发展",
    story: "黄毛尖属大别山主峰之一，长期保有较完整的山地生态。近年来当地依托森林公园发展星空观测、露营与摄影等体验，并将生态资源保护与山地文旅结合。",
    highlights: ["高山云海与日出", "星空露营环境", "杜鹃、樱花与风电山景"],
    source: "https://www.hnxx.gov.cn/2024/06-19/156121.html"
  },
  xiangshanhu: {
    symbol: "湖", category: "绿水青山", title: "香山湖国家湿地公园",
    location: "新县香山湖管理区", query: "香山湖国家湿地公园 新县",
    summary: "在湖泊、岛屿与古树群之间观察湿地生态和四季山色。",
    overview: "香山湖湖面与群山相接，湖中分布21座大小岛屿，为鸟类和两栖动物提供栖息环境；周边还有韩山古树群等自然与村落资源。",
    storyLabel: "生态保护与科普发展",
    story: "香山湖由水库景观逐步发展为以湿地保护、科普教育和生态游览为重点的国家湿地公园。公开资料显示，其已获评省级科普教育基地，古树保护也是当地生态治理的重要内容。",
    highlights: ["湖泊与洲岛景观", "湿地动植物观察", "韩山古树群"],
    source: "https://www.hnxx.gov.cn/2025/03-27/478146.html"
  },
  jinlanshan: {
    symbol: "山", category: "绿水青山", title: "金兰山国家森林公园",
    location: "新县金兰山片区", query: "金兰山国家森林公园 新县",
    summary: "游览森林山地、湖泊与道教文化遗存，感受自然和人文交汇。",
    overview: "金兰山又称“经动山”，山下分布金兰湖、龙栖湖等景观，是新县重要的森林生态游览区域。",
    storyLabel: "山岳文化与保护利用",
    story: "金兰山与湖北木兰山并称姊妹山，古光州八景“三山夜月”与其相关。山巅古道观始建于宋代，道教文化与山岳传说构成人文底蕴；今天的保护利用以森林生态为基础。",
    highlights: ["森林与山岳景观", "金兰湖、龙栖湖", "宋代以来的道教文化"],
    source: officialOverview
  },
  tianpu: {
    symbol: "村", category: "古韵文化", title: "田铺大塆",
    location: "新县田铺乡，青龙岭山下", query: "田铺大塆 新县 田铺乡",
    summary: "在青龙岭山下看豫南民居，感受古村落与山水相融的生活景观。",
    overview: "田铺大塆为国家AAA级旅游景区、全国乡村旅游重点村和中国传统村落，村落建筑以土坯墙、斜顶瓦房为主要特色。",
    storyLabel: "村落沿革与发展",
    story: "现存房屋大多始建于民国初期，建筑受到中原文化、楚文化和徽派文化共同影响。近年来村落在保留豫南民居格局的基础上开展传统村落保护和乡村旅游建设。",
    highlights: ["民国初期豫南民居", "土坯墙与斜顶瓦房", "传统村落保护与活化"],
    source: "https://www.hnxx.gov.cn/2023/06-19/156122.html"
  },
  dingliwan: {
    symbol: "丁", category: "古韵文化", title: "丁李湾古村落",
    location: "新县八里畈镇神留桥村", query: "新县丁李湾风景区",
    mapNote: "高德地图收录名称为“新县丁李湾风景区”，与本页所述丁李湾古村落对应。",
    summary: "穿行保存较完整的古村建筑群，观察豫南传统建筑和民俗风貌。",
    overview: "丁李湾是全国乡村旅游重点村、中国传统村落和中国景观村落，也是豫南地区规模较大、保存较为完整的古村落建筑群之一。",
    storyLabel: "村落沿革与发展",
    story: "村落始建于元末明初，已有700多年历史，兴盛于清乾隆时期，闻名于道光年间。今天以传统建筑保护为基础，串联民俗、传统技艺、绿色田园与乡村游览。",
    highlights: ["元末明初村落格局", "豫南古民居建筑群", "民俗与传统技艺"],
    source: officialOverview
  },
  maopu: {
    symbol: "湾", category: "古韵文化", title: "毛铺大湾",
    location: "新县周河乡毛铺村", query: "毛铺大湾 新县",
    summary: "沿汉潢古道探访明清古民居、关寨遗址与传统手工技艺。",
    overview: "毛铺大湾地处大别山腹地，是白露河源头区域，也是中国传统村落、中国景观村落和河南省文物保护单位，现存古民居300余间。",
    storyLabel: "村落沿革与发展",
    story: "汉潢古道贯穿毛铺村，周边保存白云山寨、大福寨、李寨等关寨遗址。村落通过古民居保护和古法榨油、制香、做烟等传统技艺传承，延续古道沿线的生产生活记忆。",
    highlights: ["明清古民居建筑群", "汉潢古道与关寨遗址", "古法榨油、制香、做烟技艺"],
    source: officialOverview
  },
  xihewan: {
    symbol: "河", category: "古韵文化", title: "西河湾古村落",
    location: "新县周河乡西河村", query: "西河古村落景区 新县",
    mapNote: "高德地图收录名称为“西河古村落景区”，与本页所述西河湾古村落对应。",
    summary: "观赏古民居、石刻砖雕和依山临水的传统村落格局。",
    overview: "西河湾是中国传统村落和中国景观村落，背靠狮子山、坐北朝南，现存古民居约142间，部分石刻、砖雕与木雕保存较好。",
    storyLabel: "村落沿革与发展",
    story: "村落始建于元末明初，兴盛于清康熙年间，已有700余年历史。当前保护重点包括传统院落、雕刻工艺和山水田园格局，并以乡村游览带动村落活化。",
    highlights: ["700余年村落历史", "石刻、砖雕与木雕", "山水田园聚落格局"],
    source: officialOverview
  },
  shuirun: {
    symbol: "茶", category: "茶香新县", title: "水润梅花景区",
    location: "新县陈店乡东南部（梅花湾中心区域）", query: "陈店乡 新县",
    mapLabel: "所在乡地图", mapNote: "高德地图暂未收录“水润梅花景区”独立点位。链接仅定位至陈店乡；具体入口请以当地导览标识为准。",
    summary: "环梅花湖漫步，在生态茶园、古树和红色旧址之间体验复合景观。",
    overview: "水润梅花景区为国家AAA级景区，总面积约4.2平方公里，包括梅花湖、生态茶园、采摘园、苗木生态园、环湖步道和千年银杏树等景观。",
    storyLabel: "茶旅转型与乡村振兴",
    story: "陈店乡原名柴山保，是鄂豫皖革命根据地早期重要区域，也是信阳毛尖主产区之一。景区把茶园生产、生态游览与红色文化资源串联起来，形成“茶园观光＋乡村休闲＋红色研学”的融合发展路径。",
    highlights: ["梅花湖与环湖步道", "生态茶园", "柴山保红色文化遗存"],
    source: "https://www.hnxx.gov.cn/2024/06-20/156134.html"
  },
  qilongshan: {
    symbol: "花", category: "茶香新县", title: "七龙山生态园",
    location: "新县八里畈镇", query: "七龙山生态园 新县",
    summary: "在八里畈镇体验春季花景、乡村生态与茶乡周边风光。",
    overview: "七龙山生态园是八里畈镇的生态游览点位，公开文旅报道以春季牡丹花景为主要特色。所在八里畈镇是新县重要产茶乡镇，茶园与乡村景观共同构成周边游览环境。",
    storyLabel: "农旅融合与乡村振兴",
    story: "该点位属于近年来发展的生态农业与乡村旅游场景。八里畈镇依托优质茶园、茶叶加工基础和乡村生态资源，推动茶产业、赏花游与乡村休闲相互带动。公开资料未公布园区始建年代，本页不作推断。",
    highlights: ["春季牡丹花景", "乡村生态环境", "八里畈茶产业背景"],
    source: "https://www.hnxx.gov.cn/2025/04-08/596716.html"
  }
};

const sectionIds = {
  red: ["museum", "cemetery", "xu", "jiancanghe"],
  green: ["guojiahe", "huangmaojian", "xiangshanhu", "jinlanshan"],
  ancient: ["tianpu", "dingliwan", "maopu", "xihewan"],
  tea: ["shuirun", "qilongshan"]
};

const destinationIds = ["museum", "cemetery", "xu", "tianpu", "dingliwan", "maopu", "xihewan", "guojiahe", "huangmaojian", "shuirun"];
const tabMeta = { red: "红色印记", green: "绿水青山", ancient: "古韵文化", tea: "茶香新县" };
const categoryTheme = { "红色印记": "red", "绿水青山": "green", "古韵文化": "ancient", "茶香新县": "tea" };
const routeData = [
  { title: "看红色历史", place: "博物馆与烈士陵园", text: "从革命历史陈列和英烈纪念空间开始，建立对鄂豫皖革命根据地的整体认识。" },
  { title: "访人物故里", place: "许世友将军故里", text: "通过人物故居、生平事迹和故里环境，了解革命者的成长经历与家国情怀。" },
  { title: "逛古村落", place: "田铺大塆、丁李湾等", text: "从建筑格局、古道遗存和传统技艺进入豫南古村，感受中原与荆楚文化交汇。" },
  { title: "赏山水茶香", place: "湿地、森林与生态茶园", text: "沿湖泊、山林与茶园展开生态游览，认识新县的自然环境与茶乡风貌。" }
];

const $ = (selector) => document.querySelector(selector);
const mapUrl = (query) => `https://uri.amap.com/search?keyword=${encodeURIComponent(query)}`;

function detailButton(id, label = "历史与概况") {
  return `<button class="detail-button" data-detail="${id}">${label}</button>`;
}

function renderDestinations() {
  $("#destinationGrid").innerHTML = destinationIds.map((id, index) => {
    const sight = sights[id];
    const theme = categoryTheme[sight.category];
    return `<article class="destination-card theme-${theme}">
      <div class="destination-top"><span class="destination-kind">${sight.category}</span><span class="destination-number">${String(index + 1).padStart(2, "0")}</span></div>
      <h3>${sight.title}</h3>
      <p>${sight.summary}</p>
      <div class="card-actions">
        ${detailButton(id, "深入了解")}
        <a target="_blank" rel="noopener" href="${mapUrl(sight.query)}">${sight.mapLabel || "地图位置"}</a>
      </div>
    </article>`;
  }).join("");
}

function renderRoute(index = 0) {
  const route = routeData[index];
  $("#routeDetail").innerHTML = `<strong>${route.title}</strong> · ${route.place}<br><span>${route.text}</span>`;
  document.querySelectorAll(".route-step").forEach((element, itemIndex) => element.classList.toggle("active", itemIndex === index));
  $(".route-panel .section-index").textContent = `0${index + 1} / 04`;
}

function renderPoints(tab) {
  $("#contentTitle").textContent = tabMeta[tab];
  $("#pointList").innerHTML = sectionIds[tab].map((id) => {
    const sight = sights[id];
    const theme = categoryTheme[sight.category];
    return `<article class="point-card theme-${theme}">
      <div class="point-symbol">${sight.symbol}</div>
      <div class="point-copy">
        <p class="point-category">${sight.category}</p>
        <h3>${sight.title}</h3>
        <p>${sight.summary}</p>
        <p class="point-location">位置：${sight.location}</p>
        <div class="point-meta">
          ${detailButton(id)}
          <a target="_blank" rel="noopener" href="${mapUrl(sight.query)}">${sight.mapLabel || "打开地图"}</a>
        </div>
      </div>
    </article>`;
  }).join("");
}

function openSight(id) {
  const sight = sights[id];
  if (!sight) return;
  $("#dialogCategory").textContent = sight.category;
  $("#dialogTitle").textContent = sight.title;
  $("#dialogLocation").textContent = `位置：${sight.location}`;
  $("#dialogMapNote").textContent = sight.mapNote || "地图链接使用高德收录的同名景点。";
  $("#dialogOverview").textContent = sight.overview;
  $("#dialogStoryTitle").textContent = sight.storyLabel;
  $("#dialogHistory").textContent = sight.story;
  $("#dialogHighlights").innerHTML = sight.highlights.map((item) => `<li>${item}</li>`).join("");
  $("#dialogMap").href = mapUrl(sight.query);
  $("#dialogMap").textContent = sight.mapLabel || "打开地图";
  $("#dialogSource").href = sight.source;
  const dialog = $("#sightDialog");
  dialog.dataset.theme = categoryTheme[sight.category];
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function setTab(tab) {
  document.querySelectorAll(".nav-item").forEach((element) => element.classList.toggle("active", element.dataset.tab === tab));
  if (tab === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    renderPoints("red");
  } else {
    renderPoints(tab);
    $("#contentSection").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

document.addEventListener("click", (event) => {
  const detail = event.target.closest("[data-detail]");
  if (detail) openSight(detail.dataset.detail);
});
document.querySelectorAll("[data-tab]").forEach((element) => element.addEventListener("click", () => setTab(element.dataset.tab)));
document.querySelectorAll("[data-route]").forEach((element) => element.addEventListener("click", () => renderRoute(Number(element.dataset.route))));
$("#dialogClose").addEventListener("click", () => $("#sightDialog").close());
$("#sightDialog").addEventListener("click", (event) => {
  if (event.target === $("#sightDialog")) $("#sightDialog").close();
});
if (new URLSearchParams(location.search).get("source") === "nfc") $("#entryPill").textContent = "NFC进入";
renderRoute(0);
renderPoints("red");
renderDestinations();
