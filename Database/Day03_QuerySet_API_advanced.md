# 2022. 10. 11. 

# QuerySet API Advanced

## CRUD 기본

> 모든 user 레코드 조회

```python
User.objects.all()
```

> user 레코드 생성

```python
User.objects.create(
  first_name='길동',
  last_name='홍',
  age=10,
  ...
)
```

> 101번 user 레코드 조회

```python
User.objects.get(pk=101)
```

> 101번 user의 레코드의 last_name을 '김'으로 수정

```python
user = User.objects.get(pk=101)
user.last_name = '김'
user.save()

# 확인
user.last_name
```

> 101번 user 레코드 삭제

```python
user = User.objects.get(pk=101)
user.delete()
```

> 전체 인원수 조회

```python
# 1
User.objects.count()

# 2
len(User.objects.all())
```
> `.count()`

- QuerySet과 일치하는 데이터베이스의 개체 수를 나타내는 정수를 반환

- .all()을 사용하지 않아도 됨

---

## Sorting data

> `order_by()`

- `.order_by(*fields)`

- QuerySet의 정렬을 재정의

- `기본적으로 오름차순`으로 정렬하며 `필드명에 '-'(하이픈)을 작성하면 내림차순`

- 인자로 `?`를 입력하면 `랜덤으로 정렬`

> `values()`

- `.values(*fields, **expressions)`

- 모델 인스턴스가 아닌 딕셔너리 요소들을 가진 QuerySet을 반환

- 필드를 지정하면 각 딕셔너리에는 지정한 필드에 대한 key와 value만을 출력

- 필드를 지정하지 않으면 각 딕셔너리에는 모든 필드에 대한 key와 value를 출력

> 이름, 나이, 계좌 잔고를 나이가 어린순으로, 같은 나이라면 계좌 잔고가 많은 순으로 정렬해서 조회하기

```python
User.objects.order_by('age', '-balance').values('first_name', 'age', 'balance')
```

---

## Filterting data

> 중복없이 모든 지역 조회하기

```python
User.objects.distinct().values('country')
```

> 이름과 지역 중복없이 지역 순으로 오름차순 정렬하여 모든 이름과 지역 조회하기

```python
User.objects.distinct().values('first_name', 'country').order_by('country')
```

> 나이가 30인 사람들의 이름 조회

```python
User.objects.filter(age=30).values('first_name')
```

> Field lookups

- SQL WHERE 절의 상세한 조건을 지정하는 방법

- QuerySet 메서드 filter(), exclude() 및 get()에 대한 키워드 인자로 사용됨

- 필드명 뒤에 "double-underscore"이후 작성

```python
field__lokuptype=value
```

> 나이가 30살 이상이고 계좌 잔고가 50만원 초과인 사람들의 이름, 나이, 계좌 잔고 조회하기

```python
User.objects.filter(age__gte=30, balance__gt=50000).values('first_name', 'age', 'balance')

# gte : greater than equal(크거나 같은)
# gt : greater than(초과)
```

> 이름에 '호'가 포함되는 사람들의 이름 조회

```python
User.objects.filter(first_name__contains='호').values('first_name', 'last_name')
```

> 핸드폰 번호가 011로 시작하는 사람들의 이름과 핸드폰 번호 조회

- SQL에서의 '%'와일드 카드와 같고 underscore와는 별도로 정규 표현식을 사용해야 함

```python
User.objects.filter(phone__startswith='011-').values('first_name', 'phone')

# endswith은 ~~로 끝나는 필드 조회
```

> 경기도 혹은 강원도에 살지 않는 사람들의 이름과 지역 조회

```python
User.objects.exclude(country__in=['경기도', '강원도']).values('first_name', 'country')

# exclude(**kwargs) : 주어진 매개변수와 일치하지 않는 객체를 포함하는 QuerySet 반환
```

> `Q` object

- 기본적으로 filter()와 같은 메서드의 키워드 인자는 AND statement를 따름

- 더 복잡한 쿼리를 실행해야하는 경우가 있다면 `Q 객체`가 필요 ex) OR statement의 경우

```pyhon
from django.db.models import Q

Q(question__startswith='What')
```

- '&' 및 '|'를 사용하여 Q 객체를 결합할 수 있음

```python
Q(question__startswith='Who') | Q(question__startswith='What')
```

- 조회를 하면서 여러 Q 객체를 제공할 수 있음

```python
Articles.objects.get(
    Q(title__startswith='Who'),
    Q(created_at=date(2005, 5, 2)) | Q(created_at=date(2005, 5, 6))
```

---

## Aggregation(Grouping data)

> `aggregate()`

- 전체 queryset에 대한 값을 계산

- 특정 필드 전체의 합(Sum), 평균(Avg), 개수(Count), Max, Min 등

- 딕셔너리를 반환
  
> 나이가 30살 이상인 사람들의 평균 나이 조회하기

```python
from django.db.models import Avg

User.objects.filter(age__gte=30).aggregate(Avg('age'))

=> {'age__avg': 37.659090909091}
```
```python
# 딕셔너리 key 이름 수정 가능
User.objects.filter(age__gte=30).aggregate(avg_val=Avg('age'))

=> {'age_val': 37.659090909091}
```

> `annotate()`

- 쿼리의 각 항목에 대한 요약 값을 계산

- SQL의 `GROUP BY`에 해당

> 각 지역별로 몇 명씩 살고 있는지 조회하기

```python
from django.db.models import Count

User.objects.values('country').annotate(Count('country'))

=> <QuerySet [{'county': '강원도', 'country__count': 14}, {'county': '경기도', 'country__count': 9}, {'county': '경상남도', 'country__count': 9},...]>
```

```python
# aggregate와 마찬가지로 key값 변경 가능

User.objects.values('country').annotate(num_of_country=Count('country'))

=> <QuerySet [{'county': '강원도', 'num_of_country': 14}, {'county': '경기도', 'num_of_country': 9}, {'county': '경상남도', 'num_of_country': 9},...]>
```

