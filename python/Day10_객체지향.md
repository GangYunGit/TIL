# 2022. 07. 27.

# 객체지향 프로그래밍(OOP)

## 객체 지향

- 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러 개의 독립된 단위, 즉 '객체'들의 모임으로 파악하고자 하는 것이다. 각각의 객체는 메세지를 주고받고, 데이터를 처리할 수 있다. (사전적 의미)

> 객체 지향 프로그래밍이란?

- 컴퓨터 프로그래밍 패러다임(방법론) 중 하나이다.
  
- 프로그램을 `여러 개의 독립된 객체들과 그 객체간의 상호작용으로 파악`하는 프로그래밍 방법

> 객체 지향 프로그래밍

- 과거 절차지향 프로그래밍 : 글로벌 데이터하나에서 함수를 계속 만들어 나가는 방식 => 변경 사항 발생시 수정이 어려움

- 데이터와 기능(메서드) 분리, 추상화된 구조(인터페이스)

> 객체 지향 프로그래미잉 필요한 이유

- 현실 세계 프로그램 설계에 반영`(추상화)` => 복잡한 것은 숨기고, 필요한 것은 드러낸다!

> 객체 지향의 장단점

- 장점

  - 클래스 단위로 모듈화시켜 개발할 수 있으므로 많은 인원이 참여하는 대규모 소프트웨어 개발에 적합

  - 필요한 부분만 수정하기 쉽기 때문에 프로그램의 유지보수가 쉬움

- 단점

  - 다양한 객체들의 상호작용 구조를 만들기 위해 많은 시간과 노력이 필요

  - 실행 속도가 상대적으로 느림

---

## 객체

- 컴퓨터 과학에서 객체 또는 오브젝트(object)는 클래스에서 정의한 것을 토대로 메모리(실제 저장공간)에 할당된 것으로, 프로그램에서 사용되는 데이터 또는 식별자에 의해 참조되는 공간을 의미한다. 변수, 자료구조, 함수 또는 메서드가 될 수 있다. (사전적 의미)

> 객체

- `속성(변수)`과 `행동(함수-메서드)`으로 구성된 모든 것

> 객체와 인스턴스

- 클래스로 만든 객체를 `인스턴스`라고도 함

- 객체와 인스턴스의 차이점? : 특정 타입(클래스)의 객체 = 인스턴스

  - ex) 클래스(가수를 만드는 설계도)와 객체(실제 사례 : 이찬혁)

  - 클래스를 만든다 == 타입을 만든다

- 객체(object)는 특정 타입의 인스턴스(instance)이다.

  - `123, 900, 5`는 모두 `int의 인스턴스`

  - `'hello', 'bye'`는 모두 `string의 인스턴스`

  - `[232, 89, 1], [], ['hi']`는 모두 `list의 인스턴스`

> 객체의 특징

- `타입(type)` : 어떤 `연산자(operator)`와 `조작(method)`이 가능한가?

- `속성(attribute)` : 어떤 `상태(데이터)`를 가지는가?

- `조작법(methond)` : 어떤 `행위(함수)`를 할 수 있는가?

---

# 객체와 클래스 문법

> 기본 문법

- 클래스 정의 : `class MyClass:` => 앞 글자는 무조건 대문자!

- 인스턴스 생성 : `my_instatnce = MyClass()`

- 메서드 호출 : `my_instance.my_method()`

- 속성 : `my_instance.my_attribute`

> 클래스와 인스턴스

- 클래스 : 객체들의 분류 / 설계도(class)

- 인스턴스 : 하나하나의 실체 / 예(instance)

  ```python
  class Person:
      pass

  print(type(Person)) # <class 'type'>

  person1 = Person()

  print(isinstance(person1, Person))  # True
  print(type(person1))  # <class '__main__.Person'>
  ```

> 객체 비교하기

- ==

  - 동등한(equal)

  - 변수가 참조하는 객체의 `내용이 같은` 경우(값은 같지만 주소가 다른 경우) True

  - 두 객체가 같아 보이지만 실제로 동일한 대상을 가리키고 있다고 확인해 준 것은 아님

- is

  - 동일한(identical)

  - 두 변수가 동일한 객체를 가리키는 경우(값, 주소가 모두 같은 경우) True

---

## 속성

- 특정 데이터 타입 / 클래스의 객체들이 가지게 될 상태 / 데이터를 의미

- 클래스 변수 : 모든 객체가 같이 쓸 수 있는 변수

- 인스턴스 변수 : 객체 각자가 쓸 수 있는 변수

  ```python
  class Person:
      blood_color = 'red' # 클래스 변수
      population = 100  # 클래스 변수

      def __init__(self, name):
          self.name = name  # 인스턴스 변수

  person1 = Person('지민')
  print(person1.name) #지민
  ```

> 인스턴스 변수

- 인스턴스가 개인적으로 가지고 있는 속성, 각 인스턴스들의 고유한 변수

- `생성자 메서드(__init__)`에서 `self.<name>`으로 정의(인스턴스의 첫 번째 파라미터는 무조건 self!!)

- 인스턴스가 생성된 이후 `<instance>.<name>으로 접근 및 할당`

  ```python
  class Person:

      def __init__(self, name): # 인스턴스의 첫 번째 파라미터는 무조건 self!!
          self.name = name


  john = Person('john') # 호출할 때에는 (self, name)에서 self를 생략해도 됨!
  print(john.name)  # john
  john.name = 'John Kim'
  print(john.name)  # John Kim
  ```

> 클래스 변수

- 클래스 선언 내부에서 정의

- `<classname>.<name>으로 접근 및 할당`

  ```python
  class Circle():
      pi = 3.14  # 클래스 변수 정의

      def __init__(self, r)
          self.r = r  # 인스턴스 변수

  c1 = Circle(5)
  c2 = Circle(10)

  print(Circle.pi)  # 3.14
  print(c1.pi)  # 3.14   => '인스턴스.변수'로도 접근 가능
  print(c2.pi)  # 3.14

  Circle.pi = 5
  print(Circle.pi)  # 5  
  print(c1.pi)  # 5   => 클래스 변수를 바꾸면 다 같이 바뀐다(공용이니까)
  print(c2.pi)  # 5
  ```

  >> 클래스 변수 활용(사용자 수 계산하기)

  - 인스턴스가 생성 될 때마다 클래스 변수가 늘어나도록 설정

  ```python
  class Person:
      count = 0 # 클래스 변수
      def __init__(self, name): # 인스턴스 변수 설정
          self.name = name
          Person.count += 1

  person1 = Person('아이유')
  person2 = Person('이찬혁')
  
  print(Person.count) # 2
  ```

> 클래스 변수와 인스턴스 변수

- **클래스 변수를 변경할 때는 항상 `클래스.클래스변수` 형식으로만 변경** (용도에 맞게 사용하기!)

- **인스턴스 변수는 `인스턴스.인스턴스변수`** (용도에 맞게 사용하기!)

  ```python
  class Circle():
      pi = 3.14 # 클래스 변수 정의

      def __init__(self, r):
          self.r = r  # 인스턴스 변수

  c1 = Circle(5)
  c2 = Circle(10)
  
  print(Circle.pi)  # 3.14
  print(c1.pi)  # 3.14   => *인스턴스 변수가 클래스 내부에 없다면 자동으로 클래스 변수를 받아옴
  print(c2.pi)  # 3.14

  Circle.pi = 5 # 클래스 변수 변경
  print(Circle.pi)  # 5
  print(c1.pi)  # 5
  print(c2.pi)  # 5

  c2.pi = 5 # 인스턴스 변수 변경
  print(Circle.pi)  # 3.14  (클래스 변수)
  print(c1.pi)  # 3.14  (클래스 변수)
  print(c2.pi)  # 5 (새로운 인스턴스 변수)
  ```

---

## OOP에서의 메서드

- 특정 데이터 타입 / 클래스의 객체에 공통적으로 적용 가능한 행위(클래스 안에 있는 함수!)

> 메서드의 종류

- 인스턴스 메서드 : 인스턴스를 처리

- 클래스 메서드 : 클래스를 처리

- 정적 메서드 : 나머지를 처리

---

## 인스턴스 메서드 (self가 있으면 인스턴스 메서드!)

- 인스턴스 변수를 사용하거나, 인스턴스 변수에 값을 설정하는 메서드

- 클래스 내부에 정의되는 메서드의 기본

- 호출 시, 첫번째 인자로 인스턴스 자기자신`(self)`이 전달됨

- **self??**

  - 파이썬에서 인스턴스 메서드는 호출 시 첫번째 인자로 인스턴스 자신이 전달되게 설계되어 있음

> 생성자(constructor)메서드

- 인스턴스 객체가 생성될 때 자동으로 호출되는 메서드 

  ```python
  class Person:

      def __init__(self)
          print('인스턴스가 생성되었습니다.')
  
  person1 = Person()  # 인스턴스가 생성되었습니다.
  ```
  ```python
  class Person:

      def __init__(self, name)
          print('인스턴스가 생성되었습니다. {name}')
  
  person1 = Person('지민')  # 인스턴스가 생성되었습니다. 지민
  ```
- 인스턴스 변수들의 초기값을 설정

  - 인스턴스 생성

  - __init__메서드 자동 호출

> 매직 메서드

- `Double underscore(__)가 있는 메서드`는 특수한 동작을 위해 만들어진 메서드로, `스페셜 메서드` 혹은 `매직 메서드`라고 불림

- 특정 상황에 자동으로 호출되는 메서드

- 예시 : __str__(self), __len__(self), __repr__(self) 등등

- 소멸자(destructor) 메서드 : 인스턴스 객체가 소멸되기 직전에 호출되는 메서드

--- 

## 클래스 메서드

- 클래스가 사용할 메서드

- @classmethod 데코레이터를 사용하여 정의

- 호출 시, 첫번째 인자로 클래스(cls)가 전달됨

  ```python
  class Person:
      count = 0 # 변수
      def __init__(self, name): # 인스턴스 변수 설정
          self.name = name
          Person.count += 1

      @classmethod
      def number_of_population(cls)
          print(f'인구수는 {cls.count}입니다.')
  
  person1 = Person('아이유')
  person2 = Person('이찬혁')
  print(Person.count)
  ```

> 데코레이터

- 함수를 어떤 함수로 꾸며서 새로운 기능을 부여

- `@데코레이터(함수명)` 형태로 함수 위에 작성

- 순서대로 적용되기 때문에 작성 순서가 중요

> 인스턴스 변수, 클래스 변수 모두 사용하고 싶다면?

- 클래스는 인스턴스 변수 사용이 불가능.

- 인스턴스 메서드는 클래스 변수, 인스턴스 변수 둘 다 사용이 가능! => 인스턴스 메서드 써라

> 스태틱 메서드

- 인스턴스 변수, 클래스 변수를 전혀 다루지 않는 메서드

- 속성을 다루지 않고, 단지 기능(행동)만을 하는 메서드를 정의할 때 사용

- '@staticmethod' 데코레이터를 사용하여 정의

> 인스턴스와 클래스 간의 이름 공간(namespace)

- 인스턴스에서 특정 속성에 접근하면, 인스턴스 -> 클래스 순으로 탐색

  ```python
  # Person 정의
  class Person:
      name = 'unknown'

      def talk(self): 
          print(self.name)

  p1 = Person()
  p1.talk()   # unknown   => p1은 인스턴스 변수가 정의되어 있지 않아 클래스 변수(unknown)가 출력됨

  # p2 인스턴스 변수 설정 전/후
  p2 = Person()
  p2.talk() # unknown   
  p2.name = 'Kim'
  p2.talk() # Kim    => p2의 인스턴스 변수 설정 시 'Kim'이 출력됨

  print(Person.name)  # unknown
  print(p1.name)  # unknown
  print(p2.name)  # Kim   => Person 클래스 갑싱 Kim으로 변경된 것이 아니라 p2 인스턴스의 이름공간에 name이 Kim으로
  ```

---

## 메서드 예시

  ```python
  class MyClasss:

      def method(self):
          return 'instance method', self

      @classmethod
      def classmethod(cls):
          return 'class method', cls

      @staticmethod
      def staticmethod():
          return 'static method'
 

  # 인스턴스 메서드를 호출한 결과
  obj = Myclass()

  print(obj.method()) # ('instance method', <__main__.Myclass object at 0x000002A59D3D5D30>)
  print(MyClass.method(obj))  # ('instance method', <__main__.Myclass object at 0x000002A59D3D5D30>)
  # ↑ self 자리에 obj를 넣고 출력이 가능은 하지만 권장하는 방법은 아님!
 

  # 클래스 자체에서 각 메서드 호출 
  print(Myclass.classmethod())  # ('class method', <class '__main__.Myclass'>)
  print(Myclass.staticmethod()) # static method
  Myclass.method()  # TypeError: method() missing 1 required positional argument: 'self'
  # ↑ 클래스에서 인스턴스 메서드는 호출 불가능!
  

  # 인스턴스 메서드의 클래스와 스태틱 접근
  print(obj.classmethod())  #('class method', <class '__main__.Myclass'>)
  print(Myclass.classmethod())  #('class method', <class '__main__.Myclass'>)
  print(obj.staticmethod()) # static method
  ```

---

# 객체 지향의 핵심 개념

## 객체 지향의 핵심 4가지

- 추상화, 상속, 다형성, 캡슐화

---

## 추상화

- 현실 세계를 프로그램 설계에 반영

  - 복잡한 것은 숨기고, 필요한 것만 들어내기

  - `변수, 함수, 클래스`를 이용하는 이유! => `추상화`

---

## 상속(Extend)

- 두 클래스 사이에서 부모(상위) - 자식(하위) 관계를 정립하는 것

- 클래스는 상속이 가능함. 모든 파이썬 클래스는 object를 상속받음

- 하위 클래스는 상위 클래스에 정의된 속성, 행동, 관계 및 제약 조건을 모두 상속받음

- 부모 클래스의 속성, 메서드가 자식 클래스에 상속되므로, 코드 재사용성이 높아짐

> 상속을 통한 메서드 재사용

  ```python
  class Person:
      def __init__(self, name, age):
          self.name = name
          self.age = age
      
      def talk(self):
          print(f'반갑습니다. {self.name}입니다.')
  
  class Professor(Person):
      def __init__(self, name, age, department):
          self.name = name
          self.age = age
          self.department = department

  class Student(Person):
          self.name = name
          self.age = age
          self.gpa = gpa

  p1 = Professor('박교수', 49, '컴퓨터공학과')
  s1 = Student('김학생', 20, 3.5)

  # 부모 Person 클래스의 talk 메서드를 활용
  p1.talk() # 반갑습니다. 박교수입니다.

  # 부모 Person 클래스의 talk 메서드를 활용
  s1.talk() # 반갑습니다. 김학생입니다.
  ```

> 상속 관련 함수와 메서드

- isinstance(object, classinfo)

  - classinfo의 instance거나 subclass*인 경우 True

  ```python
  class Person:
      pass

  class Professor(Person):
      pass

  class Student(Person):
      pass

  # 인스턴스 생성
  p1 = Professor()
  s1 = Student()

  print(isinstance(p1, Person)) # True
  print(isinstance(p1, Professor)) # True 
  print(isinstance(p1, Student)) # False
  print(isinstance(s1, Person)) # True 
  print(isinstance(s1, Professor)) # False 
  print(isinstance(s1, Student)) # True     
  ```

- issubclass(class, classinfo)

  - class가 classinfo의 subclass면 True

  - classinfo는 클래스 객체의 튜플일 수 있으며, classinfo의 모든 항목을 검사

  ```python
  class Person:
      pass

  class Professor(Person):
      pass

  class Student(Person):
      pass

  # 인스턴스 생성
  p1 = Professor()
  s1 = Student()

  print(issubclass(bool, int))  # True
  print(issubclass(float, int)) # False
  print(issubclass(Professor, Person))  # True  
  print(issubclass(Professor, (Person, student))) # True
  ```

- **super()**

  - 자식클래스에서 부모클래스를 사용하고 싶은 경우
  
> 상속 정리

- 파이썬의 모든 클래스는 object로부터 상속됨

- 부모 클래스의 모든 요소(속성, 메서드)가 상속됨

- `super()`를 통해 부모 클래스의 요소를 호출할 수 있음

- 메서드 오버라이딩을 통해 자식 클래스에서 재정의 가능

- 상속관계에서의 이름공간은 인스턴스, 자식 클래스, 부모 클래스 순으로 탐색

> 다중 상속

- 두 개 이상의 클래스를 상속받는 경우

- 상속받은 모든 클래스의 요소를 활용 가능


  ```python
  class Person:
      def __init__(self, name):
          self.name = name

      def greeting(self):
          return f'안녕, {self.name}'


  class Mom(Person):
      gene = 'XY'

      def swim(self):
          return '엄마가 수영'


  class Dad(Person):
      gene = 'XX'

      def walk(self):
          return '아빠가 걷기'   
  ```

- 중복된 속성이나 메서드가 있는 경우 상속 순서에 의해 결정됨
  
  ```python
  class FirstChild(Dad, Mom):  # <== Dad 클래스를 먼저 상속받음
      def swim(self):
          return '첫째가 수영'

      def cry(self):
          return '첫째가 응애'

  baby1 = FirstChild('아가')
  print(baby1.cry())  # 응애
  print(baby1.swim()) # 첫째가 수영
  print(baby1.walk()) # 아빠가 걷기   <== Dad 클래스 상속
  print(baby1.gene) # XY
  ```

  ```python
  class FirstChild(Mom, Dad):  # <== Mom 클래스를 먼저 상속받음
      def walk(self):
          return '둘째가 걷기'

      def cry(self):
          return '둘째가 응애'

  baby2 = SecondChild('아가')
  print(baby2.cry())  # 응애
  print(baby2.swim()) # 엄마가 수영   <== Mom 클래스 상속
  print(baby2.walk()) # 둘째가 걷기
  print(baby2.gene) # XX
  ```

> mro 메서드 (Method Resolution Order)

- 해당 인스턴스의 클래스가 어떤 부모 클래스를 가지는지 확인하는 메서드

- `기존의 인스턴스 -> 클래스 순`으로 이름 공간을 탐색하는 과정에서 상속 관계에 있으면 `인스턴스 -> 자식 클래스 -> 부모 클래스`로 `확장`

  ```python
  print(FirstChild.mro())
  # <class '__main__.FirstChild'>, <class '__main__.Dad'>, <class '__main__.Mom'>, <class '__main__.Person'>, <class 'object'>
  ```

---

## 다형성(Polymorphism)

- 여러 모양을 뜻하는 그리스어

- 동일한 메서드가 클래스에 따라 다르게 행동할 수 있음을 의미

- 즉, 서로 다른 클래스에 속해있는 객체들이 `동일한 메세지에 대해 다른 방식으로 응답할 수 있`음

> 메서드 오버라이딩

- 상속받은 메서드를 재정의

  - 클래스 상속 시, 부모 클래스에서 정의한 메서드를 `자식 클래스`에서 `변경`

  - 부모 클래스의 메서드 이름과 기본 기능은 그대로 사용하지만, 특정 기능을 바꾸고 싶을 때 사용

  - 상속받은 클래스에서 같은 이름의 메서드로 덮어씀

  - 부모 클래스의 메서드를 실행시키고 싶은 경우 super()를 활용

  ```python
  class Person:
      def __init__(self, name):
          self.name = name

      def talk(self):
          print(f'반갑습니다. {self.name}입니다.')

  # 자식 클래스 - Professor
  class Professor(Person):
      def talk(self):
          print(f'{self.name}일세.')

  # 자식 클래스 - Student
  class Student(Person):
      def talk(self):
          super().talk
          print(f'저는 학생입니다.')

  p1 = Professor('김교수')
  p1.talk() # 김교수일세.

  s1 = Student('이학생')
  s1.talk()
  # 반갑습니다. 이학생입니다/
  # 저는 학생입니다.
  ```

> cf. 오버로딩

- 파이썬의 Asterisk가 지원하는 기능과 같다. 다른언어에는 있는 개념이지만 파이썬에서는 Asterisk를 사용하면 되므로 오버로딩 개념이 없다.

---

## 캡슐화

- 객체의 일부 구현 내용에 대해 외부로부터의 직접적인 액세스를 차단 ex) 주민등록번호

- 파이썬에서는 암묵적으로 존재하지만, 언어적으로는 존재하지 않음

> 접근제어자 종류

- Puvlic Access Modifier, Protected Access Modifier, Private Access Modifier

> Public Member

- 언더바 없이 시작하는 메서드나 속성

- 어디서나 호출이 가능, 하위 클래스 override 허용

- 일반적으로 작성되는 메서드와 속성의 대다수를 차지

> Proteced Member

- 언더바 1개로 시작하는 메서드나 속성

- 암묵적 규칙에 의해 부모 클래스 내부와 자식 클래스에서만 호출 가능

- 하위 클래스 override 허용

> Private Member

- 언더바 2개로 시작하는 메서드나 속성

- 본 클래스 내부에서만 사용이 가능

- 하위클래스 상속 및 호출 불가능(오류)

- 외부 호출 불가능(오류)

> getter 메서드와 setter 메서드

- 변수에 접근할 수 있는 메서드를 별도로 생성

  ```python
  class Person:

    def __init__(self, age):
        self._age = age

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, new_age):
        if new_age <= 19:
            raise ValueError('Too Young For SSAFY')
            return

        self._age = new_age

  p1 = Person(20)
  p1.age = 19
  print(p1.age)   # ValueError: Too Young For SSAFY     
  ```

---

# Error 와 예외처리

> 디버깅

- 잘못된 프로그램을 수정하는 것

- 애러 메세지
  
  - 해당하는 위치를 찾아 메세지를 해결

- 로직 에러

  - 명시적인 에러 메세지 없이 예상과 다른 결과가 나온 경우

---

## 에러(Error)

> 문법 에러(Syntax Error)

- 파이썬이 코드를 읽어 나갈 때(parser) 문제가 발생한 위치를 표현(파일 이름, 줄 번호, ^문자)

- 줄에서 에러가 감지된 가장 앞의 위치를 가리키는 캐럿(^) 기호

- Invalid syntax : 문법오류

  ```python
  while # SyntaxError: invalis syntax
  ```

- assign to literal : 잘못된 할당

  ```python
  5=3 # SyntaxError: cannot assign to literal
  ```

- EOL(End of Line), EOF(End of File) : 괄호를 제대로 닫지 않은 경우

---

## 예외(Exception)

- 실행 도중 예상치 못한 상황을 맞이하면, 프로그램 실행을 멈춤

- 예외는 여러 타입(type)으로 나타나고, 타입이 메세지의 일부로 출력됨

- 모든 내장 예외는 Exception Class를 상속받아 이루어짐

- 사용자 정의 예외 만들기 가능

> ZeroDivisionError : 0으로 나누고자 할 때 발생

  ```python
  a = 10/0  # ZeroDivisionError: division by zero
  ```

> NameError : namespace상에 이름이 없는 경우

  ```python
  print(name_error) # NameError: name 'name_error' is not defined
  ```

> TypeError : argument 누락, 초과, 불일치

  ```python
  1 + '1' # TypeError: unsupported operand type(s) for +: 'int' and 'str'

  round('3.5')  # TypeError: type str doesn't define __round__ method

  divmod()  # TypeError: divmod expected 2 arguments, got 0

  import random
  random.sample() 
  # TypeError: sample() missing 2 required positional arguments: 'population' and 'k'
  ```

> ValueError : 타입은 올바르나 값이 적절하지 않거나 없는 경우

  ```python
  int('3.5')

  range(3).index(6)
  ```

> IndexError : 인덱스가 존재하지 않거나 범위를 벗어나는 경우

  ```python
  empty_list = []
  empty_list[2] 
  # IndexError: list index out of range
  ```

> KeyError

  ```python
  song = {'IU': '좋은날'}
  song['BTS'] # KeyError: 'BTS'
  ```

> ModuleNotFoundError

  ```python
  import saffy  # ModuleNotFoundError: No module named 'saffy'
  ```

> ImportError : Module은 있으나 존재하지 않는 클래스 / 함수를 가져오는 경우

  ```python
  from random import sample
  print(sample(rang(3), 1)) # [1]

  from random import samp
  ```

> KeyboardInterrupt : 임의로 프로그램을 종료하였을 때

> IndentationError : 제어문의 들여쓰기가 적절하지 않은 경우

---

## 예외처리

> try, except 문

- try 문 / except 절을 이용하여 예외 처리를 할 수 있음

- try 문

  - 오류가 발생할 가능성이 있는 코드를 실행

  - 예외가 발생되지 않으면, except 없이 실행 종료

- except 문

  - 예외가 발생하면, except 절이 실행

  - 예외 상황을 처리하는 코드를 받아서 적절한 조치를 취함

> 에러 메세지 처리(as)

- as 키워드를 활용하여 원본 에러 메세지를 사용할 수 있음

  - 예외를 다른 이름에 대입

> 복수의 예외 처리 실습

- 100을 사용자가 입력한 정수로 나누고 출력하는 코드

  ```python
  try:
      num = input('100으로 나눌 값을 입력하시오 : ')
      print(100/int(num))
  except ValueError:
      print('숫자를 넣어주세요.')
  except ZeroDivisionError:
      print('0으로 나눌 수 없습니다.')
  except
      print('알 수 없는 에러가 발생하였습니다.')
  # except문 하나가 실행되면 다음 except문은 실행되지 않으므로, 가장 작은 범주의 예외처리를 먼저 작성할 것!
  ```

> 예외 처리 종합

- try : 코드를 실행

- except : try문에서 예외가 발생 시 실행

- else : try문에서 예외가 발생하지 않으면(에러가 없으면) 실행

- finally : 예외 발생 여부와 관계없이 항상 실행

- *팁 : try문보다는 애초에 if문으로 거르고 가는 것이 더 빠르다