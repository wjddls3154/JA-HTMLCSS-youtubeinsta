// 9. dark mode

// Element
// querySelector 안에 클래스를 넣어주면, 그 클래스를 가진 요소를 반환한다.
const toggleThemeBtn = document.querySelector('.header__theme-button');

// themeKey 가 dark 이면 다크모드 추가, light 이면 다크모드 제거
document.onload = setInitialTheme(localStorage.getItem('theme'));
function setInitialTheme(themeKey) {
  if (themeKey === 'dark') {
    document.documentElement.classList.add('darkTheme');
  } else {
    document.documentElement.classList.remove('darkTheme');
  }
}

// Toggle theme button 클릭 했을 때, 함수를 호출한다.
toggleThemeBtn.addEventListener('click', () => {
  // Toggle root class
  document.documentElement.classList.toggle('darkTheme');

  // 클래스에 darkTheme이 포함이 되어 있을 때는, 키 값 theme와 value 값 dark를 LocalStorage 에 저장, 그 외는 키 값 theme와 value 값 light 을 저장.
  if (document.documentElement.classList.contains('darkTheme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
