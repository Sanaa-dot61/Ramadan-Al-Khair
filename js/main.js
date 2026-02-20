const names = [
    "سناء محمد",
    "زينب حسن",
    "مريم إبراهيم",
    "منار فيض",
    "هاجر طراف",
    "مريم محمد",
    "روان شريف",
    "فاطمة أسامة",
    "سلمي محمد",
    "أنداء حمادة",
    "أسماء قطب",
    "بسملة أسامة",
    "بسملة عزت",
    "دهب صلاح",
    "دينا عادل",
    "إيناس غانم",
    "دعاء حامد",
    "جهاد عزت",
    "مريم أحمد",
    "ميار أسامة",
    "منة الحسيني",
    "منة حسام",
    "أبرار أشرف",
    "أمنية علاء",
    "رحمة صبرة",
    "رنيم خالد",
    "سهيلة سعيد",
    "سهيلة ياسر",
    "سندس جمال",
    "زينب محمد",
    "أميرة مستغاضي",
];
const btn = document.getElementById("spinBtn");
const result = document.getElementById("result");
btn.addEventListener("click", () => {
    result.innerHTML = `
        <div class="loading">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        </div>
    `;
    setTimeout(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        result.innerHTML = randomName;
        result.classList.add("fade");
    }, 2000);
});