# 2022. 07. 15.
## Git 명령어 사용시 주의할 점
- git init 명령은 항상 최상위 폴더에서 **한 번만** 할 것!
  - Submodule이라는 개념이 있긴 하나 쓸 일이 극히 적음.
- VScode를 열 때에는 작업 중인 폴더 내에서만 열기!
- Github내에서도 파일 수정이 가능하나, 항상 **로컬 폴더에서 먼저 수정** 하는 것이 좋음!
## README.md와 .gitignore
- README.md 파일
  - 사람들이 나의 깃허브를 열었을 때 보게 되는 소개글
- .gitignore 파일
  - 숨겨진 파일이라 (.)으로 시작함
  - 버전에 포함시키지 않고 무시하겠다는 의미
  - .gitignore파일 내에 무시하고 싶은 파일 명을 추가하면 그 파일에 gitignore가 적용됨
  - **보안이 중요한 파일을 Git에 올리지 않기 위해 사용**
  - **굳이 올리지 않아도 되는 파일에 사용**
  - **.gitignore가 생성되기 이전에 만든 파일은 무시가 안되므로 항상 프로젝트 시작시 먼저 만들어야 함!**
- README.md와 .gitignore는 항상 프로젝트 시작 처음에 만드는 것이 좋음
- gitignore 자동 생성 사이트 : https://www.toptal.com/developers/gitignore/
## Git명령어
- git clone : 다운로드 (모든 파일을 한번에 받기)
  - git clone의 과정
    1. 폴더 생성
    2. git init
    3. git remote add
    4. 버전, 파일 생성
  - git clone명령을 이용한 파일 다운로드 방법
    1. 폴더를 만들고 싶은 곳에서 마우스 우클릭 -> Git Bash here
       - Git Bash로 여는 이유 : 최상위 폴더를 만들고 클론 명령 수행시 폴더가 중첩되어 다운이 받아짐
    2. 터미널 창에 git clone [깃허브 주소]
- git pull : 업데이트 (최신 버전파일만 받기)
  - 다른 사용자가 push한 최신 버전을 git pull명령을 통해 다운 받을 수 있음
  - 비정상적인 흐름 해결하기
    - 서로 다른 컴퓨터에서 git push 명령으로 인해 버전이 충돌했다면 VScode 상에서 버전을 선택할 수 있음
    - 버전을 수정(충돌한 버전 중 택1 혹은 새로운 버전으로 교체)한 후 git push가능
- commit 작성시 규칙에 맞춰서 쓰면 좋다!
  - 참고자료 : https://meetup.toast.com/posts/106
## Python 
- VScode상에서 python extension 다운로드를 받아 python 코드를 실행시킬 수 있다.
- 레인보우 브라켓 : 괄호 색을 다르게 만들어줌
- API
  - 두 소프트웨어를 연결해주는 인터페이스
  - **요청**과 **응답**의 구조