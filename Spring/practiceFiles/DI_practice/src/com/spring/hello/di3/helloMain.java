package com.spring.hello.di3;

public class helloMain {
	public static void main(String[] args) {

		HelloMessage hello = HelloMessageFactory.getHelloMessage("kor");
		String greet = hello.hello("¿Ã∞≠¿±");
		System.out.println(greet);
	}
}
