# 10000-hour-rule

실행 URL: https://kisvim.github.io/10000-hour-rule/


## 업데이트 및 고민사항
### 영어 입력 받지 않기 [22.11.19]
* 사용자가 희망 분야 입력 시 영어 입력은 공백으로 대체하여 영어 입력을 받지 않고자 했습니다.
* 더 나은 사용자 경험을 위해 setTimeout을 활용하여 사용자 본인이 영어를 입력했으나 사이트에서는 이를 거부한다는 점을 인지할 수 있도록 구현했습니다.

### submit시 페이지 input 요소의 action 방지 [22.11.21]
* '나는 며칠 동안 훈련을 해야 1만 시간이 될까?' 버튼을 클릭하면 페이지가 새로 고침되지 않은 채 원하는 이벤트만 발생시키고자 form 요소에 다음과 같이 처리했습니다.
```js
$input.onsubmit = () => false;
```
* 위 방법으로 처리하면 인풋 창을 채우지 않은 상태에서 제출할 시 다음과 같은 안내 메시지를 보여줍니다.
![스크린샷 2022-11-21 오전 1 11 09](https://user-images.githubusercontent.com/112453419/202913203-b96c949d-c6e2-48a1-9cb0-cce82ed4e51e.png)

* 참고로 아래 방법으로 form 요소의 기본 동작을 중지시키면 위와 같은 안내 메시지를 보여주지 않는 것으로 확인했습니다.
```js
$input.addEventListener("click", event => {
    event.preventDefault();
});
```
![스크린샷 2022-11-21 오전 1 12 21](https://user-images.githubusercontent.com/112453419/202913364-cd462a3f-4a8b-4b43-bc08-ed991f63b336.png)
