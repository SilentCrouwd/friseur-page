import "./style.css";

const menuButton = document.querySelector('[aria-controls="site-navigation"]');
const navigation = document.querySelector("#site-navigation");

function setMenuOpen(isOpen) {
  navigation.classList.toggle("hidden", !isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Menü schließen" : "Menü öffnen",
  );
}

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  if (
    event.target.closest("a") &&
    window.matchMedia("(max-width: 767px)").matches
  ) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

window.matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
  if (event.matches) setMenuOpen(false);
});

const openingStatus = document.querySelector("#opening-status");
const openingStatusIndicator = document.querySelector(
  "#opening-status-indicator",
);
const openingHours = {
  0: null,
  1: null,
  2: { open: 9, close: 18 },
  3: { open: 9, close: 18 },
  4: { open: 9, close: 18 },
  5: { open: 9, close: 18 },
  6: { open: 9, close: 14 },
};
const weekdayFormatter = new Intl.DateTimeFormat("de-DE", { weekday: "long" });

const todayRow = document.querySelector(
  `[data-weekday="${new Date().getDay()}"]`,
);
todayRow.classList.add("bg-pink-light");
todayRow.setAttribute("aria-current", "date");
todayRow.querySelector(".today-badge").classList.remove("hidden");

function updateOpeningStatus() {
  const now = new Date();
  const todayHours = openingHours[now.getDay()];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const isOpen =
    todayHours !== null &&
    currentMinutes >= todayHours.open * 60 &&
    currentMinutes < todayHours.close * 60;

  if (isOpen) {
    openingStatus.textContent = `Jetzt geöffnet · heute bis ${todayHours.close}:00 Uhr`;
  } else if (todayHours && currentMinutes < todayHours.open * 60) {
    openingStatus.textContent = `Heute ab ${todayHours.open}:00 Uhr geöffnet`;
  } else {
    let daysUntilOpen = 1;
    while (openingHours[(now.getDay() + daysUntilOpen) % 7] === null) {
      daysUntilOpen += 1;
    }

    const nextOpenHours = openingHours[(now.getDay() + daysUntilOpen) % 7];
    if (daysUntilOpen === 1) {
      openingStatus.textContent = `Heute geschlossen · morgen ab ${nextOpenHours.open}:00 Uhr geöffnet`;
    } else {
      const nextOpenDay = new Date(now);
      nextOpenDay.setDate(now.getDate() + daysUntilOpen);
      const weekday = weekdayFormatter.format(nextOpenDay);
      openingStatus.textContent = `Heute geschlossen · wieder ${weekday} ab ${nextOpenHours.open}:00 Uhr geöffnet`;
    }
  }

  openingStatusIndicator.classList.toggle("bg-plum", !isOpen);
  openingStatusIndicator.classList.toggle("bg-emerald-600", isOpen);
}

updateOpeningStatus();
window.setInterval(updateOpeningStatus, 60_000);

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent =
    "Vielen Dank! Der Versand wurde in dieser Demo simuliert; Ihre Angaben wurden nicht übertragen oder gespeichert.";
  formStatus.hidden = false;
  contactForm.reset();
});
