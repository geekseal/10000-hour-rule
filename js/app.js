// 기본 DOM
const $input = document.querySelector(".input");
const $result = document.querySelector(".result");
const $inpField = $input.querySelector("#inpField");
const $inpTime = $input.querySelector("#inpTime");
const $resultField = $result.querySelector("#resultField");
const $resultTime = $result.querySelector("#resultTime");
const $modalGo = document.querySelector(".section-modal");

// Buttons
const $btnSubmit = $input.querySelector(".btn-submit");
const $btnGo = $result.querySelector(".btn-go");
const $btnShare = $result.querySelector(".btn-share");
const $btnClose = document.querySelector(".btn-close");

// 1. 희망 분야 입력 시 영어는 입력되지 않게 하기
$inpField.addEventListener("input", function (e) {
    setTimeout(() => {
        this.value = this.value.replace(/[A-Za-z0-9]/gi, "");
    }, 400);
});

// 2. submit시 새로고침 되지 않게 하기
// $input.addEventListener("submit", () => false);
$input.onsubmit = () => false;

// 3. 로딩페이지 생성
const $loadingResult = document.createElement("section");
const $imgLoad = document.createElement("img");
$loadingResult.classList.add("loading-result");
$imgLoad.setAttribute("src", "./images/loading.png");
$imgLoad.classList.add("img-loading");
$loadingResult.appendChild($imgLoad);
document.querySelector(".section-rule").insertBefore($loadingResult, $result);

// 4. 결과값 출력(자동 스크롤 되게)
$btnSubmit.addEventListener("click", loadResult);

function loadResult() {
    if (!$inpField.value || !$inpTime.value) {
        alert("비정상 접근입니다.");
        return;
    } else if (/[A-Za-z0-9]/gi.test($inpField.value)) {
        alert("희망 분야는 한글만 입력해주세요.");
        return;
    } else if ($inpTime.value < 1 || $inpTime.value > 24) {
        alert("하루는 24시간입니다.");
        $inpTime.value = null;
        return;
    }

    $result.style.display = "none";

    let $loadingResult = document.querySelector(".loading-result");
    $loadingResult.style.display = "block";
    $loadingResult.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
        $loadingResult.style.display = "none";
        $resultField.textContent = $inpField.value;
        $resultTime.textContent = getRequiredDays();
        $result.style.display = "block";
    }, 1400);
}

function getRequiredDays() {
    const requiredDays = Math.floor(10000 / $inpTime.value);
    return requiredDays;
}

// 4. 모달창 띄우기, 닫기
$btnGo.addEventListener("click", openModal);
function openModal() {
    $modalGo.style.display = "flex";
}

$btnClose.addEventListener("click", closeModal);
function closeModal() {
    $modalGo.style.display = "none";
}

// 5. url 복사하기
$btnShare.addEventListener("click", copyUrl);
function copyUrl() {
    let url = window.location.href;
    navigator.clipboard
        .writeText(url)
        .then(() => {
            alert("URL이 복사되었습니다.");
        })
        .catch(err => {
            alert("URL이 복사되지 않았습니다. 호환되는 브라우저가 아닙니다.");
            console.log(err);
        });
}
