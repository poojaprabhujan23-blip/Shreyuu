
function enterMission() {
    const frontPage = document.getElementById("frontPage");
    const birthdayPage = document.getElementById("birthdayPage");

    frontPage.style.opacity = "0";

    setTimeout(function() {
        frontPage.style.display = "none";
        birthdayPage.classList.remove("hidden");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 800);
}

function unlock() {
    const question = document.getElementById("openQuestion");

    question.style.display = "flex";
}

function openBirthday() {
    const question = document.getElementById("openQuestion");
    const surprise = document.getElementById("surprise");

    question.style.display = "none";
    surprise.classList.remove("hidden");
    surprise.style.display = "block";

    setTimeout(function() {
        surprise.scrollIntoView({
            behavior: "smooth"
        });
    }, 200);
}

function dontOpen() {
    const message = document.getElementById("noMessage");
    const noButton = document.querySelector(".no-button");

    message.innerHTML = "Are you sure? 🥺<br>There might be something special inside... 👀";

    noButton.innerHTML = "😏 MAYBE";
    noButton.style.transform = "scale(1.05)";
}

function blowCandle() {
    const flame = document.querySelector(".flame");
    const button = document.getElementById("blowButton");
    const surprise = document.getElementById("krishnaSurprise");
    const music = document.getElementById("birthdayMusic");

    flame.style.display = "none";
    button.style.display = "none";

    music.volume = 0.5;

    music.play().catch(function(error) {
        console.log("Audio could not start:", error);
    });

    setTimeout(function() {
        surprise.style.display = "block";

        surprise.scrollIntoView({
            behavior: "smooth"
        });

        createConfetti();
    }, 1000);
}

function finalSurprise() {
    document.getElementById("finalMessage").innerHTML = "🎉 HAPPY BIRTHDAY! YOU ARE AMAZING! 🎉";

    createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");

        confetti.innerHTML = "🎊";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = Math.random() * 15 + 15 + "px";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)"
                },
                {
                    transform: "translateY(110vh) rotate(360deg)"
                }
            ],
            {
                duration: duration * 1000,
                iterations: 1
            }
        );

        setTimeout(function() {
            confetti.remove();
        }, duration * 1000);
    }
}

