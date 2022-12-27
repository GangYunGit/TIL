package com.spring.hello.di2;

public class HelloMessageEng implements HelloMessage{
	
	@Override
	public String hello(String name) {
		return "Hello " + name;
	}

}
