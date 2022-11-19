// 기본 DOM
const $input = document.querySelector(".input");
const $result = document.querySelector(".result");

// 1. 희망 분야 입력 시 영어는 입력되지 않게 하기
const $inpField = $input.querySelector("#inpField");
$inpField.addEventListener("input", function (e) {
    setTimeout(() => {
        this.value = this.value.replace(/[A-Za-z]/gi, "");
    }, 400);
});

// 2. submit시 새로고침 되지 않게 하기
// 3. 로딩페이지 구현, 자동 스크롤 되게
// 4. 모달창 띄우기
// 5. url 복사하기
// 6. 모달창 닫기
