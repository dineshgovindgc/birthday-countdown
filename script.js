let timer;

function startCountdown() {
    clearInterval(timer);
    const inputDate = document.getElementById("birthday").value;

    if (!inputDate) {
        alert("Please select your birthday!");
        return;
    }

    const now = new Date();
    let birthday = new Date(inputDate);
    birthday.setFullYear(now.getFullYear());

    if (birthday < now) {
        birthday.setFullYear(now.getFullYear() + 1);
    }

    timer = setInterval(() => {
        const currentTime = new Date().getTime();
        const diff = birthday.getTime() - currentTime;

        if (diff <= 0) {
            clearInterval(timer);
            document.getElementById("daysLeft").innerText = "🎂 Happy Birthday! 🎉";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        document.getElementById("daysLeft").innerText = ` Only ${days} days left for your birthday!`;

    }, 1000);
}
