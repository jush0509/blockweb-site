function toggleDarkMode() {
    // 1. body 태그를 가져옵니다.
    const body = document.body;

    // 2. dark-mode 클래스를 토글(있으면 빼고, 없으면 넣기)합니다.
    body.classList.toggle("dark-mode");

    // 3. 버튼의 텍스트도 모드에 따라 바꿔줍니다.
    const btn = document.getElementById("mode-toggle");
    
    if (body.classList.contains("dark-mode")) {
        btn.innerText = "☀️ 라이트 모드 보기";
        console.log("현재 모드: 다크모드");
    } else {
        btn.innerText = "🌙 다크 모드 보기";
        console.log("현재 모드: 라이트모드");
    }
}