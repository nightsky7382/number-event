const numberBalls = document.querySelectorAll('.number-ball');
const startButton = document.getElementById('startButton');
let lottoNumbers = [];
let isAnimating = false;

// 로또 번호 생성 함수
function generateLottoNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers.sort((a, b) => a - b); // 오름차순 정렬
}

// 애니메이션 시작 함수
function startAnimation() {
  if (isAnimating) return;
  isAnimating = true;
  lottoNumbers = generateLottoNumbers();
  numberBalls.forEach(ball => {
      ball.classList.add('spinning');
      ball.textContent = ''; // 번호 초기화
  });

  let count = 0;
  const interval = setInterval(() => {
    numberBalls.forEach((ball, index) => {
        if (index < count) {
            ball.textContent = lottoNumbers[index];
            ball.classList.remove('spinning'); // 애니메이션 종료
        } else {
             ball.textContent = Math.floor(Math.random() * 45) + 1; // 임의의 번호 표시
        }
    });
    count++;
    if (count > 6) {
      clearInterval(interval);
      isAnimating = false;
    }
  }, 300); // 0.3초마다 번호 변경
}

startButton.addEventListener('click', startAnimation);
