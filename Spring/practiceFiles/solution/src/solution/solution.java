package solution;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		ArrayList<Integer> list = new ArrayList<>();
		
		for(int i = 0; i < N; i++) {
			list.add(sc.nextInt());
		}
		
		int count = 0;
		for(int i = 0; i < N; i++) {
			boolean isPrime = true;
			int compare = list.get(i);
			if(compare == 1) {
				isPrime = false;
			}
			for(int j = 2; j < compare; j++) {
				if (compare % j == 0) {
					isPrime = false;
					break;
				}
			}
			if (isPrime) {
				count++;
			}
		}
		System.out.println(count);
	}
}
