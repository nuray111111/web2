document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('2024-11-29T19:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining >= 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        } else {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = "<h2>Время истекло!</h2>";
        }
    }

    const interval = setInterval(updateCountdown, 1000);
    document.getElementById('setDate').addEventListener('click', () => {
        const newDate = new Date(document.getElementById('datePicker').value).getTime();
        if (newDate) {
            targetDate = newDate;
        }
    });
    updateCountdown();
});
