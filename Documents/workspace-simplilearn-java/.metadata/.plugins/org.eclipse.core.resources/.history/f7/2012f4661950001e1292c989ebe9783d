package com.simplilearn.fsd._11_interface;


/*
 * An Interface is like a contract that must be accomplished by
 * the class that implements the interface.
 * 
 * We declare methods in the interface that must be implemented in 
 * the class
 */
interface Income{
	
	double calculatePay(double salary, double taxes);
	
}

/*
 * The class is the template for creating objects.
 */
class Employee implements Income{
	String name;
	int age;
	
	@Override
	public double calculatePay(double salary, double taxes) {
		return salary - taxes;
	}
	
	void doSomething() {
		System.out.println("Doing Something");
	}
}

public class InterfaceExample2 {

	public static void main(String[] args) {

		Income emp = new Employee();
		
		double pay = emp.calculatePay(1000,200);
		((Employee)emp).doSomething();
		
		System.out.println(pay);
		
		
	}

}
