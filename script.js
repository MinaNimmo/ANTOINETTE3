const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const userText = input.value.trim();
    if (!userText) return;

    chat.textContent += `\nYOU: ${userText}`;
    input.value = "";

    const prompt = `You are Marie Antoinette. You're flirtatious, witty, royal, and a bit dramatic. You also love cake. Respond to this: "${userText}"`;

    try {
      const res = await fetch("https://7bc539c0-e6c6-4d10-8792-7e5bdba92fa7-00-1a5zi01jvit6g.janeway.replit.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();

      chat.textContent += `\nMARIE: ${data.reply}`;
      chat.scrollTop = chat.scrollHeight;
    } catch (err) {
      console.error(err);
      chat.textContent += `\nMARIE: Zut alors! I cannot respond right now.`;
    }
  }
});
