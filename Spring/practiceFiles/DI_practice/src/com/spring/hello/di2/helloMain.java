package com.spring.hello.di2;

public class helloMain {
	public static void main(String[] args) {
//		HelloMessageKor kor = new HelloMessageKor();
		HelloMessage hello = new HelloMessageEng();
		String greet = hello.hello("이강윤");
		System.out.println(greet);
	}
}
