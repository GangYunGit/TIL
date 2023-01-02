package com.spring.hello.di4;

public class HelloMessageKor implements HelloMessage{

	public HelloMessageKor() {
		System.out.println("HelloMessageKor 객체 만들었어");
	}
	
	@Override
	public String hello(String name) {
		return "안녕 " + name;
	}
}
