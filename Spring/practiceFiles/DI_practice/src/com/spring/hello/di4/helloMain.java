package com.spring.hello.di4;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class helloMain {
	public static void main(String[] args) {
		System.out.println("프로그램 시작!");
		ApplicationContext context 
		= new ClassPathXmlApplicationContext("com/spring/hello/di4/applicationContext.xml");
		System.out.println("xml 읽기 끝!!");
		HelloMessage hello = (HelloMessage) context.getBean("eng");
		String greet = hello.hello("이강윤");
		System.out.println(greet);
		
		HelloMessage hello2 = (HelloMessage) context.getBean("eng");

		HelloMessage hello3 = (HelloMessage) context.getBean("eng");
		System.out.println(hello + "  " + hello2 + "  " + hello3);
	}
}
