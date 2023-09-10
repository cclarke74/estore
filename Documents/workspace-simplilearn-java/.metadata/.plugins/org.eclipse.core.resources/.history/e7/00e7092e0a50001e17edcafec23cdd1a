package com.simplilearn.fsd._09_static;

/*
 * Static indicates that a member belongs to the class and not to the
 * object.
 */

class MyClass{
	
	/*
	 * static attributes are shared across all the objects of the class.
	 */
	static int num = 1;  //final makes the variable a constant
	
	//We normally use static combined with final to create constants in Java.
	static final int HELLO = 1;  
	
	static class MyInnerClass{
		
	}
	
	/*
	 * static methods belongs to the class
	 */
	
	static int addNumbers(int a, int b) {
		
		int hello1 = 4;
		/*
		 * The method should be static if the logic inside the method
		 * depends only on the parameters
		 * 
		 * We cannot access non-static members from static methods.
		 */
		//print(a,b);
		return a + b + 1 + hello1;
	}
	
	void print(int a, int b) {
		/*
		 * We can access static members from non-static methods.
		 */
		System.out.println(addNumbers(a,b));
	}
}

public class StaticKeyword {

	public static void main(String[] args) {

		MyClass obj1 = new MyClass();
		obj1.num = 10;
		
		MyClass obj2 = new MyClass();
		obj2.num = 20;
		
		
		int result = MyClass.addNumbers(2,3);
		
		System.out.println(result);
		
		double power = Math.pow(2, 4);
		
		System.out.println(power);
		
	}

}
