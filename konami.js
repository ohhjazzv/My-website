(() => {
    const SEQ = ["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","ArrowUp","ArrowLeft"];
    let i = 0;

    document.addEventListener("keydown", (e) => {
        const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        i = (key === SEQ[i]) ? i + 1 : 0;

        if (i === SEQ.length) {
            i = 0;
            unleashChaos();
        }
    });

    function unleashChaos() {
        document.body.classList.add("konami-unlocked");

        const scroll = document.createElement("div");
        scroll.className = "konami-scroll";
        scroll.innerHTML = `
        <h2>ACHIEVEMENT UNLOCKEDD!!</h2>
        <p>you've found a secret. respect.</p>
        <p class="sub">-jaz</p>
        <button onclick="this.parentElement.remove();document.body.classList.remove('konami-unlocked')">dismiss</button>
        `;
        document.body.appendChild(scroll);

        const rainID = setInterval(() => {
            const drop = document.createElement("span");
            drop.textContent = "✦";
            drop.className = "konami-drop";
            drop.style.left = Math.random() * 100 + "vw";
            drop.style.animationDuration = (2 + Math.random() * 2) + "s";
            document.body.appendChild(drop);
            setTimeout(() => drop.remove(), 4000);
        }, 80);
        setTimeout(() => clearInterval(rainID), 4000);
    }
})();