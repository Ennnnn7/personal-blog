// site-time.js
function siteTime() {
    // 设置博客开始时间
    const startDate = new Date("2026-03-09 22:00:11"); // 改成你博客开始日期
    const now = new Date();

    const diff = now - startDate; // 毫秒差

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const nbsp = "\u00A0"; // 不换行空格
    
    // 显示内容
    const el = document.getElementById("site-running-time");
    if (el) {
        el.innerHTML =
            days + " days " +
            hours.toString().padStart(2,'0') + " hours " +
            minutes.toString().padStart(2,'0') + " minutes " +
            seconds.toString().padStart(2,'0') + " seconds";
    }
}

// 每秒刷新
setInterval(siteTime, 1000);