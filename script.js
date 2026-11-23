const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const dateInput = document.querySelector('input[type="date"]');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];
dateInput.min = localToday;

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get("name");
  const service = data.get("service");
  const date = data.get("date");
  const time = data.get("time");
  const message = `Olá! Meu nome é ${name}. Gostaria de agendar ${service} para o dia ${date} às ${time}.`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
});

document.getElementById("year").textContent = new Date().getFullYear();
