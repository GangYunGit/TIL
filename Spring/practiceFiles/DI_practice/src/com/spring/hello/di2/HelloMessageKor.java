package com.spring.hello.di2;

public class HelloMessageKor implements HelloMessage{

	@Override
	public String hello(String name) {
		return "�ȳ� " + name;
	}
}
