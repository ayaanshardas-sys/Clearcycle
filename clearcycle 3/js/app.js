/* ClearCycle — search, category filter and result cards */


/* ---------- 1. does this item match what was typed? ----------
   The query must match the START of a word, so "wire" finds
   "wire" but "ire" does not. This stops wrong partial matches. */

function startsWithWord(text, query) {
  const words = text.toLowerCase().split(/[\s-]+/);
  return words.some(word => word.startsWith(query));
}

function itemMatches(item, query) {
  if (query === "") return true;
  if (startsWithWord(item.name, query)) return true;
  return item.terms.some(term => startsWithWord(term, query));
}


/* ---------- 2. build one result card ---------- */

function buildCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  const tag = document.createElement("span");
  tag.className = item.ewaste ? "tag tag-yes" : "tag tag-no";
  tag.textContent = item.ewaste ? "E-waste: YES" : "Not e-waste";
  card.appendChild(tag);

  const title = document.createElement("h3");
  title.textContent = item.name;
  card.appendChild(title);

  if (item.cpcb) {
    const cat = document.createElement("p");
    cat.className = "src";
    cat.textContent = "Official category: " + item.cpcb;
    card.appendChild(cat);
  }

  const todo = document.createElement("p");
  todo.className = "todo";
  todo.textContent = item.todo;
  card.appendChild(todo);

  /* data wipe reminder, only for things that store data */
  if (item.ewaste && item.resale) {
    const note = document.createElement("p");
    note.className = "note";
    note.textContent = "Before you hand it over, erase your personal data.";
    card.appendChild(note);
  }

  /* Cashify link, only if the item may still be worth money */
  if (item.resale) {
    const link = document.createElement("a");
    link.className = "btn";
    link.href = "https://www.cashify.in";
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Still works? Cashify will take it";
    card.appendChild(link);
  }

  return card;
}


/* ---------- 3. one function for BOTH search and categories ---------- */

function runFilter() {
  const box = document.getElementById("search");
  const results = document.getElementById("results");
  const count = document.getElementById("count");

  const query = box.value.trim().toLowerCase();

  const boxes = document.querySelectorAll(".cats input:checked");
  const chosen = Array.from(boxes).map(b => b.value);

  const matches = ITEMS.filter(item => {
    const okText = itemMatches(item, query);
    const okCat = chosen.length === 0 || chosen.includes(item.category);
    return okText && okCat;
  });

  /* clear the container first, or results pile up on every keystroke */
  results.innerHTML = "";

  if (matches.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.innerHTML =
      "<h3>Can't find your item?</h3>" +
      "<p>Try a simpler word, or contact your society committee " +
      "and they will find out for you.</p>";
    results.appendChild(empty);
    count.textContent = "No items found.";
    return;
  }

  matches.forEach(item => results.appendChild(buildCard(item)));
  count.textContent = matches.length + " item" + (matches.length === 1 ? "" : "s") + " shown.";
}


/* ---------- 4. start the page ---------- */

function startItemsPage() {
  const box = document.getElementById("search");
  if (!box) return;

  box.addEventListener("input", runFilter);
  document.querySelectorAll(".cats input").forEach(cb =>
    cb.addEventListener("change", runFilter)
  );

  /* if someone arrived from the home page search, fill the box in */
  const fromHome = new URLSearchParams(window.location.search).get("q");
  if (fromHome) box.value = fromHome;

  runFilter();
}


/* ---------- 5. shared bits used on more than one page ---------- */

function fillLastUpdated() {
  document.querySelectorAll(".updated").forEach(el => {
    el.textContent = "Information last checked on " + LAST_UPDATED + ".";
  });
}

function fillCollectionDate() {
  const el = document.getElementById("collection-date");
  if (el) el.textContent = COLLECTION.date + " — " + COLLECTION.place;
}

function fillDropPoints() {
  const list = document.getElementById("points");
  if (!list) return;

  DROP_POINTS.forEach((p, i) => {
    const box = document.createElement("article");
    box.className = "point";
    box.innerHTML =
      "<h3>" + (i + 1) + ". " + p.name + "</h3>" +
      "<p class='meta'>" + p.address + "<br>About " + p.distance + " away</p>" +
      "<span class='verified'>MPCB verified</span> " +
      "<span class='meta'>Checked on " + p.checked + "</span>";
    list.appendChild(box);
  });
}

/* home page search, done without a <form> so nothing is ever submitted */
function startHomeSearch() {
  const box = document.getElementById("home-search");
  const go  = document.getElementById("go");
  if (!box || !go) return;

  function send() {
    const q = box.value.trim();
    window.location.href = "items.html" + (q ? "?q=" + encodeURIComponent(q) : "");
  }

  go.addEventListener("click", function (e) { e.preventDefault(); send(); });
  box.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); send(); }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fillCollectionDate();
  fillLastUpdated();
  startHomeSearch();
  fillDropPoints();
  startItemsPage();
});
