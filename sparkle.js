(() => {
    const SPARKS = ["✦", "✧", "✵", "·"];
    const COLORS = ["#fc6e20", "#ffc23d", "#efe6de"];
    let last = 0;

    document.addEventListener("mousemove", (e) => {
        const now = Date.now();
        if (now - last < 35) return;
        last = now;

        const s = document.createElement("span");
        s.className = "spark";
        s.textContent = SPARKS[Math.floor(Math.random() * SPARKS.length)];
        s.style.left = e.clientX + "px";
        s.style.top = e.clientY + "px";
        s.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        s.style.fontSize = (10 + Math.random() * 8) + "px";
        s.style.setProperty("--dx", (Math.random() * 30 - 15) + "px");
        s.style.setProperty("--rot", (Math.random() * 360) + "deg");
        document.body.appendChild(s);

        setTimeout(() => s.remove(), 900);
    });
})();