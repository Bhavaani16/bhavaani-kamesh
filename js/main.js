(function () {
  var S = window.SITE;
  var icon = window.icon;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function link(href, label, extra) {
    var ext = /^https?:/i.test(href);
    return (
      '<a href="' + esc(href) + '"' +
      (ext ? ' target="_blank" rel="noopener noreferrer"' : "") +
      (extra || "") + ">" +
      label +
      "</a>"
    );
  }

  var view = document.documentElement.getAttribute("data-view") || "product";
  if (view !== "research" && view !== "product") view = "product";

  var navItems = [
    ["About", "#about", "01"],
    ["Research", "#research", "02"],
    ["Work", "#work", "03"],
    ["Experience", "#experience", "04"],
    ["Writing", "#writing", "05"],
    ["Education", "#education", "06"],
    ["Contact", "#contact", "07"]
  ];

  var app = document.getElementById("app");
  app.innerHTML = render();
  document.body.classList.add("view-" + view);
  bind();

  function lede() {
    return view === "research" ? S.ledes.research : S.ledes.product;
  }

  function render() {
    return (
      renderNav() +
      "<main id=\"main\">" +
      renderHero() +
      renderAbout() +
      renderResearch() +
      renderWork() +
      renderExperience() +
      renderWriting() +
      renderSkills() +
      renderEducation() +
      renderContact() +
      "</main>" +
      renderFooter() +
      '<div class="cursor-ring" id="cursor-ring"></div><div class="cursor-dot" id="cursor-dot"></div>'
    );
  }

  function renderNav() {
    var links = navItems
      .map(function (item) {
        return '<a href="' + item[1] + '">' + esc(item[0]) + "</a>";
      })
      .join("");
    var sheet = navItems
      .map(function (item) {
        return '<a href="' + item[1] + '">' + esc(item[0]) + "<span>" + item[2] + "</span></a>";
      })
      .join("");
    return (
      '<header class="nav">' +
      '<a class="brand" href="#top">' + icon("stamp") + "<span>Bhavaani</span></a>" +
      '<nav class="nav-links" aria-label="Primary">' + links + "</nav>" +
      '<div class="nav-actions">' +
      switchHtml("nav") +
      '<button class="icon-btn" id="theme" type="button" aria-label="Switch color theme">' +
      icon(document.documentElement.getAttribute("data-theme") === "dark" ? "sun" : "moon") +
      "</button>" +
      '<button class="menu-btn" id="menu" type="button" aria-expanded="false" aria-controls="sheet" aria-label="Open the index">' +
      icon("menu") +
      "</button>" +
      "</div></header>" +
      '<nav class="sheet" id="sheet" aria-label="Mobile">' + sheet + switchHtml("sheet") + "</nav>"
    );
  }

  function switchHtml(id) {
    return (
      '<div class="switch" role="group" aria-label="Audience">' +
      '<button type="button" data-view="research" aria-pressed="' + (view === "research") + '">Research</button>' +
      '<button type="button" data-view="product" aria-pressed="' + (view === "product") + '">Product</button>' +
      "</div>"
    );
  }

  function renderHero() {
    return (
      '<section class="hero" id="top">' +
      '<div class="hero-copy">' +
      '<p class="kicker">Slip no. 016 · Long Beach · ' + (view === "research" ? "Research desk" : "Product desk") + "</p>" +
      "<h1>Bhavaani<br><em>Kamesh</em></h1>" +
      '<p class="lede" id="lede">' + esc(lede()) +
      '<span class="underline" aria-hidden="true"><svg viewBox="0 0 200 16" preserveAspectRatio="none"><path d="M2 10 C 40 2, 80 14, 120 8 S 180 12, 198 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span></p>' +
      '<p class="hero-aside">' + esc(S.heroNote) + "</p>" +
      '<div class="hero-links">' +
      link("mailto:" + S.email, icon("mail") + "Email", ' class="chip"') +
      link(S.links.linkedin, icon("linkedin") + "LinkedIn", ' class="chip"') +
      link(S.links.github, icon("github") + "GitHub", ' class="chip"') +
      link(S.links.resume, icon("download") + "Resume", ' class="chip solid"') +
      "</div></div>" +
      '<div class="hero-file">' +
      '<figure class="portrait">' +
      '<img src="' + esc(S.portrait.src) + '" alt="' + esc(S.portrait.alt) + '" width="768" height="1024">' +
      "<figcaption>" + esc(S.portrait.caption) + "</figcaption></figure>" +
      '<aside class="slip" id="slip" aria-label="Routing slip">' +
      '<div class="slip-inner">' +
      '<div class="slip-top"><span>Filed</span><span>Dual clearance</span></div>' +
      '<div class="seal" id="seal"><span>Held<br><b>by a person</b><br>not the model</span></div>' +
      "<h2>Research, then the thing someone uses.</h2>" +
      "<p>M.S. Information Systems at CSU Long Beach. Previously Honeywell Aerospace and Dell. Now researching how electric vehicles should meet a grid that cannot afford a confident mistake.</p>" +
      "</div></aside></div></section>"
    );
  }

  function sectionHead(id, ico, idx, title) {
    var mark = "";
    if ((view === "research" && id === "research") || (view === "product" && id === "work")) mark = " start-here";
    return (
      '<header class="section-head' + mark + '">' +
      icon(ico) +
      "<div><p class=\"idx\">" + idx + "</p><h2>" + title + "</h2></div></header>"
    );
  }

  function renderAbout() {
    var facts = S.facts.map(function (f) {
      return "<div><dt>" + esc(f.k) + "</dt><dd>" + esc(f.v) + "</dd></div>";
    }).join("");
    return (
      '<section class="section" id="about">' +
      sectionHead("about", "about", "01 — About", "A person who reads the model and the room.") +
      '<div class="about-grid"><div class="drop">' +
      S.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
      '</div><dl class="dossier">' + facts + "</dl></div></section>"
    );
  }

  function renderResearch() {
    var qs = S.questions.map(function (q) {
      return (
        '<article class="hypo"><div class="hid">' + esc(q.id) + "</div><div>" +
        "<h3>" + esc(q.q) + "</h3><p class=\"method\">" + esc(q.method) + "</p></div></article>"
      );
    }).join("");
    return (
      '<section class="section" id="research">' +
      sectionHead("research", "research", "02 — Research", "Questions I keep, because the systems keep asking them.") +
      "<p class=\"method\">" + esc(S.researchIntro) + "</p>" +
      '<div class="questions">' + qs + "</div>" +
      "</section>"
    );
  }

  function renderWork() {
    var openId = view === "research" ? "clauseguard" : "edray";
    var studies = S.studies.map(function (st, i) {
      var open = st.id === openId;
      var links = st.links.map(function (l) {
        return link(l.href, icon("external") + esc(l.label));
      }).join("");
      var steps = st.approach.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");
      return (
        '<article class="study' + (open ? " is-open" : "") + '" id="' + st.id + '">' +
        '<button class="study-toggle" type="button" aria-expanded="' + open + '" aria-controls="' + st.id + '-body">' +
        '<span class="study-no">0' + (i + 1) + "</span>" +
        icon(st.icon) +
        "<span><h3>" + esc(st.title) + "</h3>" +
        '<span class="study-meta"><span>' + esc(st.kicker) + "</span><span>" + esc(st.when) + '</span><span class="metric-pill">' + esc(st.metric) + "</span></span></span>" +
        '<span class="chev">' + icon("arrow") + "</span></button>" +
        '<div class="study-body" id="' + st.id + '-body"><div class="study-body-inner"><div class="study-layout">' +
        "<div><h4>Problem</h4><p>" + esc(st.problem) + "</p><h4>Who it's for</h4><p>" + esc(st.context) + "</p><h4>My role</h4><p>" + esc(st.role) + "</p></div>" +
        "<div><h4>Decisions</h4><ul>" + steps + "</ul><h4>What happened</h4><p>" + esc(st.results) + "</p><h4>What I learned</h4><p>" + esc(st.learned) + '</p><div class="linkrow">' + links + "</div></div>" +
        "</div></div></div></article>"
      );
    }).join("");

    var bench = S.bench.map(function (b) {
      var more = b.href ? "<p>" + link(b.href, esc(b.label) + " ?") + "</p>" : "";
      return "<article>" + icon(b.icon) + "<div><h3>" + esc(b.title) + "</h3><p>" + esc(b.text) + "</p>" + more + "</div></article>";
    }).join("");

    return (
      '<section class="section" id="work">' +
      sectionHead("work", "projects", "03 — Work", "Five slips. The rest of the bench is underneath.") +
      '<div class="studies">' + studies + "</div>" +
      '<div class="bench">' + bench + "</div>" +
      "</section>"
    );
  }

  function renderExperience() {
    var roles = S.experience.map(function (r) {
      var note = r.note ? '<p class="note-block">' + esc(r.note) + "</p>" : "";
      var bullets = r.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("");
      return (
        '<article class="role"><div class="when">' + esc(r.when) + "<br>" + esc(r.kind) + "</div>" +
        "<div class=\"role-title\">" + icon(r.icon) +
        "<div><h3>" + esc(r.title) + "</h3><p class=\"org\">" + esc(r.org) + " · " + esc(r.place) + "</p>" +
        note + "<ul>" + bullets + "</ul></div></div></article>"
      );
    }).join("");
    return (
      '<section class="section" id="experience">' +
      sectionHead("experience", "experience", "04 — Experience", "Where the rule met a payroll.") +
      '<div class="roles">' + roles + "</div></section>"
    );
  }

  function renderWriting() {
    var featured = S.writing.filter(function (w) { return w.featured; });
    var rest = S.writing.filter(function (w) { return !w.featured; });
    var lead = featured[0];
    var side = featured.slice(1).map(function (w) {
      return link(w.href,
        icon(w.icon) + "<span><p class=\"date\">" + esc(w.date) + " · " + esc(w.theme) + "</p><h3>" + esc(w.title) + "</h3><p>" + esc(w.take) + "</p></span>",
        ' class="mini-essay"');
    }).join("");
    var more = rest.map(function (w) {
      return link(w.href, '<span class="date">' + esc(w.date) + "</span><span><strong>" + esc(w.title) + "</strong> — " + esc(w.take) + "</span>");
    }).join("");
    return (
      '<section class="section" id="writing">' +
      sectionHead("writing", "writing", "05 — Writing", "Selected from the notebook.") +
      '<div class="writing-wrap"><div>' +
      link(lead.href,
        '<p class="theme">' + esc(lead.theme) + " · " + esc(lead.date) + "</p><h3>" + esc(lead.title) + "</h3><p>" + esc(lead.take) + "</p>",
        ' class="feature-essay"') +
      '</div><div class="stack">' + side + "</div></div>" +
      '<div class="more-writing">' + more + "</div></section>"
    );
  }

  function renderSkills() {
    var drawers = S.skills.map(function (g) {
      var items = g.items.map(function (it) {
        return '<span class="' + esc(it[1]) + '">' + esc(it[0]) + "</span>";
      }).join("");
      return '<section class="drawer"><header>' + icon(g.icon) + "<h3>" + esc(g.name) + "</h3></header><div class=\"sizes\">" + items + "</div></section>";
    }).join("");
    return (
      '<section class="section" id="skills">' +
      sectionHead("skills", "skills", "06 — Skills", "A type case, not a rating.") +
      '<div class="skill-board">' + drawers + "</div>" +
      '<p class="caption">Bigger type is what shows up most often in the work. It is not a score, and it is not a bar chart in disguise.</p></section>'
    );
  }

  function renderEducation() {
    var schools = S.education.map(function (e) {
      var note = e.note ? '<p class="note-block">' + esc(e.note) + "</p>" : "";
      return '<article class="school"><h3>' + esc(e.school) + "</h3><p>" + esc(e.degree) + '</p><p class="when">' + esc(e.when) + "</p><p>" + esc(e.detail) + "</p>" + note + "</article>";
    }).join("");
    var honors = S.honors.map(function (h) {
      return '<div class="honor">' + icon(h.icon) + "<div><strong>" + esc(h.title) + "</strong><div>" + esc(h.detail) + "</div></div></div>";
    }).join("");
    var certs = S.certs.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("");
    var courses = S.coursework.map(esc).join(" · ");
    var acts = S.activities.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");
    return (
      '<section class="section" id="education">' +
      sectionHead("education", "education", "07 — Record", "School, stamps, and one recommendation.") +
      '<div class="edu-layout"><div>' + schools +
      "<h3 style=\"margin-top:1.2rem;font-size:1.4rem\">Coursework on the record</h3><p>" + courses + "</p>" +
      "<ul>" + acts + "</ul></div><div>" +
      '<div class="honors">' + honors + "</div>" +
      "<ul class=\"certs\">" + certs + "</ul>" +
      '<blockquote class="pull">“' + esc(S.quote.text) + "”<footer>" + esc(S.quote.by) + "</footer></blockquote>" +
      "<p class=\"caption\">" + esc(S.recommendationNote) + "</p>" +
      "</div></div></section>"
    );
  }

  function renderContact() {
    return (
      '<section class="section" id="contact">' +
      sectionHead("contact", "contact", "08 — Contact", "The slip is open.") +
      '<div class="contact-grid"><div>' +
      link("mailto:" + S.email, esc(S.email), ' class="big-mail"') +
      '<div class="hero-links" style="margin-top:1.2rem">' +
      link(S.links.linkedin, icon("linkedin") + "LinkedIn", ' class="chip"') +
      link(S.links.github, icon("github") + "GitHub", ' class="chip"') +
      link(S.links.medium, icon("medium") + "Medium", ' class="chip"') +
      link(S.links.resume, icon("download") + "Resume PDF", ' class="chip solid"') +
      "</div>" +
      "</div><div class=\"apply\">" +
      "<article><h3>If you are hiring</h3><p>" + esc(S.applying.product) + "</p></article>" +
      "<article><h3>If you are admitting</h3><p>" + esc(S.applying.research) + "</p></article>" +
      "</div></div></section>"
    );
  }

  function renderFooter() {
    return (
      '<footer class="footer"><div>Filed in Long Beach. The stamp is still wet. Slip no. 016, because that is the GitHub handle and I commit to a bit.</div>' +
      "<div>" + link("icons.html", "Icon drawer") + " · " + link(S.links.resume, "Resume") + "</div></footer>"
    );
  }

  function bind() {
    document.querySelectorAll("[data-view]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setView(btn.getAttribute("data-view"));
      });
    });
    document.getElementById("theme").addEventListener("click", toggleTheme);
    var menu = document.getElementById("menu");
    menu.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      menu.setAttribute("aria-expanded", open ? "true" : "false");
      menu.setAttribute("aria-label", open ? "Close the index" : "Open the index");
      menu.innerHTML = icon(open ? "close" : "menu");
    });
    document.getElementById("sheet").addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        document.body.classList.remove("nav-open");
        menu.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-label", "Open the index");
        menu.innerHTML = icon("menu");
      }
    });
    document.querySelectorAll(".study-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var study = btn.closest(".study");
        var open = study.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
    var links = document.querySelectorAll(".nav-links a");
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          if (a.getAttribute("href") === "#" + en.target.id) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { obs.observe(s); });

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (fine && !reduce) {
      document.body.classList.add("has-cursor");
      var ring = document.getElementById("cursor-ring");
      var dot = document.getElementById("cursor-dot");
      window.addEventListener("pointermove", function (e) {
        ring.style.left = e.clientX + "px";
        ring.style.top = e.clientY + "px";
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";
        var hot = e.target.closest("a, button");
        document.body.classList.toggle("cursor-hot", !!hot);
        var slip = document.getElementById("slip");
        var seal = document.getElementById("seal");
        if (slip && seal) {
          var r = slip.getBoundingClientRect();
          var px = (e.clientX - (r.left + r.width / 2)) / r.width;
          var py = (e.clientY - (r.top + r.height / 2)) / r.height;
          seal.style.transform = "rotate(" + (8 + px * 8) + "deg) translate(" + (px * 6) + "px," + (py * 6) + "px)";
        }
      });
    }
    if (location.hash) {
      var target = document.querySelector(location.hash);
      if (target && target.classList.contains("study")) {
        target.classList.add("is-open");
        var b = target.querySelector(".study-toggle");
        if (b) b.setAttribute("aria-expanded", "true");
      }
    }
  }

  function setView(next) {
    if (next === view) return;
    view = next;
    try { localStorage.setItem("view", view); } catch (e) {}
    document.documentElement.setAttribute("data-view", view);
    document.body.classList.remove("view-research", "view-product");
    document.body.classList.add("view-" + view);
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      document.body.classList.add("is-shuffling");
      setTimeout(function () { document.body.classList.remove("is-shuffling"); }, 460);
    }
    document.querySelectorAll("[data-view]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-view") === view ? "true" : "false");
    });
    var ledeEl = document.getElementById("lede");
    if (ledeEl) {
      var svg = ledeEl.querySelector(".underline");
      ledeEl.firstChild.textContent = lede();
      if (svg) ledeEl.appendChild(svg);
    }
    var kicker = document.querySelector(".kicker");
    if (kicker) kicker.textContent = "Slip no. 016 · Long Beach · " + (view === "research" ? "Research desk" : "Product desk");
    document.querySelectorAll(".section-head").forEach(function (h) { h.classList.remove("start-here"); });
    var start = document.querySelector(view === "research" ? "#research .section-head" : "#work .section-head");
    if (start) start.classList.add("start-here");
    var prefer = view === "research" ? "clauseguard" : "edray";
    document.querySelectorAll(".study").forEach(function (study) {
      var open = study.id === prefer;
      study.classList.toggle("is-open", open);
      var toggle = study.querySelector(".study-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    var live = document.getElementById("live");
    if (live) live.textContent = view === "research" ? "Research view" : "Product view";
  }

  function toggleTheme() {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    document.getElementById("theme").innerHTML = icon(next === "dark" ? "sun" : "moon");
    document.getElementById("theme").setAttribute("aria-label", next === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
})();
