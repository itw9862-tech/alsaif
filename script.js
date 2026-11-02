
const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const date = document.getElementById("date").value;
    const passengers = document.getElementById("passengers").value;

    const message = document.getElementById("searchMessage");

    if (from.toLowerCase() === to.toLowerCase()) {
        message.textContent = "Departure and destination cities must be different.";
        return;
    }

    message.textContent =
        `Search preview: ${from} to ${to}, ${date}, ${passengers} passenger(s). Live bus schedules are not connected yet.`;
});
