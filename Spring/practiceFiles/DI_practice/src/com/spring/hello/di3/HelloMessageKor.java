package com.spring.hello.di3;

public class HelloMessageKor implements HelloMessage{

	@Override
	public String hello(String name) {
		return "안녕 " + name;
	}
}
