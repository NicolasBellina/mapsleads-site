const previews = [
  { title: "Recherche dans MapsLeads", file: "recherche", alt: "L’extension présente plusieurs entreprises trouvées à Tours." },
  { title: "Export Excel", file: "export", alt: "Un export MapsLeads avec les colonnes d’identification et d’activité des établissements." },
  { title: "Session d’appels Premium", file: "suivi", alt: "Le tableau répartit les entreprises entre cinq colonnes, de l’appel à passer au rappel." }
];
const steps = document.querySelectorAll(".step");
const shot = document.getElementById("product-shot");
const heading = document.getElementById("screen-title");
for (const button of steps) {
  button.addEventListener("click", () => {
    const preview = previews[Number(button.dataset.step)];
    for (const step of steps) step.setAttribute("aria-pressed", String(step === button));
    heading.textContent = preview.title;
    shot.alt = preview.alt;
    shot.src = "./assets/" + preview.file + ".webp";
  });
}
