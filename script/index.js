const hours = document.getElementById("clock_hour");
const minutes = document.getElementById("clock_minutes");
const seconds = document.getElementById("clock_seconds");
const textHour = document.getElementById("text-hour");
const textMinutes = document.getElementById("text-minutes");
const textAmpm = document.getElementById("text-ampm");
const dateDay = document.getElementById("date-day");
const dateMonth = document.getElementById("date-month");
const dateYear = document.getElementById("date-year");

// set angles and time
const clock = () => {
  let date = new Date();
  let hour = date.getHours() * 30;
  let minute = date.getMinutes() * 6;
  let second = date.getSeconds() * 6;

  hours.style.transform = `rotateZ(${(hour + minute) / 12} deg)`;
  minutes.style.transform = `rotateZ(${minute}deg)`;
  seconds.style.transform = `rotateZ(${second}deg)`;
};

setInterval(clock, 1000);
//set text
function clockText() {
  let date = new Date();
  let hour = date.getHours();
  let ampm;
  let minute = date.getMinutes();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  if (hour >= 12) {
    hour = hour - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  if (hour === 0) {
    hour = 12;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  textHour.innerHTML = `${hour}:`;

  if (minute < 10) {
    minute = `0${minute}`;
  }

  textMinutes.innerHTML = `${minute}`;
  textAmpm.innerHTML = `${ampm}`;

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  dateDay.innerHTML = day;
  dateMonth.innerHTML = `${months[month]}`;
  dateYear.innerHTML = year;
}

setInterval(clockText, 1000);

//set theme changer
const theme_button = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  theme_button.classList.contains(iconTheme) ? "bxs-moon" : "bxs-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  theme_button.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](
    iconTheme
  );
}

theme_button.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  theme_button.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
