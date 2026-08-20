# 블로그 운영 시작 페이지

간단한 링크 모음 시작 페이지입니다. 네이버 블로그, 애드포스트, 쇼핑 커넥트, 캡컷, 네이버 클립, 레뷰, 강남맛집 등을 한 번에 접근할 수 있게 구성했습니다.

## 폴더 구조

```text
blog-start-page/
├─ index.html
├─ style.css
├─ script.js
├─ README.md
└─ .gitignore
```

## 바로가기 수정 방법

`script.js` 파일의 `shortcutLinks` 배열에서 순서를 바꾸거나 새 항목을 추가하면 됩니다.

```js
const shortcutLinks = [
  {
    name: '네이버 블로그',
    subtitle: '게시글 작성 / 관리',
    url: 'https://blog.naver.com/',
    icon: 'N',
    className: 'blog'
  }
];
```

- 순서 변경: 배열의 순서를 바꾸면 카드 표시 순서가 바뀝니다.
- 추가: 배열에 객체를 하나 더 추가하면 카드가 새로 생깁니다.
- 수정: `name`, `subtitle`, `url`, `icon` 값을 바꾸면 됩니다.

## GitHub Pages 배포 단계

### 1) 저장소 이름 추천

다음처럼 짧고 의미 있게 만들면 좋습니다.

- `blog-start-page`
- `blog-quick-access`
- `blog-ops-dashboard`

### 2) Git 명령어

```bash
git init
git add .
git commit -m "초기 시작 페이지 제작"
git branch -M main
git remote add origin https://github.com/본인아이디/blog-start-page.git
git push -u origin main
```

### 3) GitHub Pages 설정

1. GitHub 저장소로 이동
2. `Settings` → `Pages`
3. `Build and deployment`에서 `Deploy from a branch` 선택
4. Branch: `main`
5. Folder: `/root`
6. 저장

### 4) 배포 주소 확인

배포가 완료되면 다음 주소 형식으로 접속할 수 있습니다.

```text
https://본인아이디.github.io/blog-start-page/
```

예시:

```text
https://seunghyeok.github.io/blog-start-page/
```

## 로컬 미리보기

```bash
python3 -m http.server 8000
```

그다음 브라우저에서 다음 주소로 접속합니다.

```text
http://localhost:8000
```
