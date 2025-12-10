const sidebarToggle = document.querySelector(".toggle-btn");
const toggleIcon = document.querySelector("#icon");
sidebarToggle.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("active");
  toggleIcon.classList.toggle("bx-chevrons-right");
  toggleIcon.classList.toggle("bx-chevrons-left");
});

//chart
new Chart(document.getElementById("bar-chart-grouped"), {
  type: "bar",
  data: {
    labels: ["1900", "1950", "1999", "2050"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#3ecd7eff",
        data: [133, 221, 783, 2478],
      },
      {
        label: "Expense",
        backgroundColor: "#8e5ea2",
        data: [408, 547, 675, 734],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Population growth (millions)",
    },
  },
});
