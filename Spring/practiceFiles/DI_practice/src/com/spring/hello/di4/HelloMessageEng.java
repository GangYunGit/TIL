package com.spring.hello.di4;

public class HelloMessageEng implements HelloMessage{
	
	public HelloMessageEng() {
		System.out.println("HelloMessageEng 객체 만들었어");
	}
	
	@Override
	public String hello(String name) {
		return "Hello " + name;
	}

}
