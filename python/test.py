class Person:
    counts = 0

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def call_name(self):
        return f'대전 2반 {self.name} 입니다!'

    @staticmethod
    def hello():
        return '안녕하세요!'


class Student(Person):
    @staticmethod
    def call_name(self):
        return f'대전 2반 {self.name} 입니다'


person1 = Person("김성준", 25)
student1 = Student("박승재", 25)
print(student1.call_name("김진호"))
