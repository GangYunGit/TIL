from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import get_object_or_404

from .serializers import BookListSerializer, BookSerializer, CommentSerializer
from .models import Book, Comment


@api_view(['GET', 'POST'])
def book_list(request):
    # Q 1.
    if request.method == 'GET':
        books = Book.objects.all()                          # 작성된 모든 게시글의 정보를 가져옴
        serializer = BookListSerializer(books, many=True)   # serializer로 json형태로 바꿔줌
        return Response(serializer.data)                    # serialize 된 응답을 반환
    # Q 2.
    elif request.method == 'POST':
        serializer = BookSerializer(data=request.data)      # POST 요청에 담긴 정보를 json으로 변환
        if serializer.is_valid(raise_exception=True):       # 유효성 검사
            serializer.save()                               # 유효성 검사 통과시 저장
            return Response(serializer.data, status=status.HTTP_201_CREATED)    # 게시글 생성시 데이터와 201메세지 반환


@api_view(['GET', 'DELETE', 'PUT'])
def book_detail(request, book_pk):
    book = get_object_or_404(Book, pk=book_pk)      # 특정 pk와 일치하는 게시글 검색
    # Q 3.
    if request.method == 'GET':                     # GET 요청일 때만
        serializer = BookSerializer(book)           # serializer로 json형태로 바꿔줌
        return Response(serializer.data)            # 응답을 반환
    # Q 4.
    if request.method == 'DELETE':                  # DELETE 요청일 때
        context = {                                 # context 변수에 딕셔너리 형태로
            'delete': book.pk                       # key는 delete, value는 book의 pk
        }
        book.delete()                               # book 삭제
        return Response(context)                    # context를 json데이터로 반환
    # Q 5.
    if request.method == 'PUT':                     # PUT 요쳥일 때만
        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():                   # 유효성 검사
            serializer.save()                       # 저장
            return Response(serializer.data)        # 반환


@api_view(['GET'])
def comment_list(request):
    # Q 7.
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def comment_create(request, book_pk):
    # Q 8.
    book = get_object_or_404(Book, pk=book_pk)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(book=book)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



@api_view(['GET', 'DELETE'])
def comment_detail(request, comment_pk):
    comment = get_object_or_404(Comment, pk=comment_pk)
    # Q 9.
    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)
    # Q 10.
    if request.method == 'DELETE':
        context = {
            'delete': comment.pk
        }
        comment.delete()
        return Response(context)
