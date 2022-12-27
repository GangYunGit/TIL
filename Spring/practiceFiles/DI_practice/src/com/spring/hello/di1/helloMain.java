package com.spring.hello.di1;

public class helloMain {
	public static void main(String[] args) {
//		HelloMessageKor kor = new HelloMessageKor();
		HelloMessageEng kor = new HelloMessageEng();
		String greet = kor.helloEng("이강윤");
		System.out.println(greet);
	}
}
