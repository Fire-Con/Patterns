// Define the interface for the strategy
interface PaymentStrategy {
  pay(amount: number): void;
}

// Define the concrete implementations of the strategy
class CreditCardStrategy implements PaymentStrategy {
  constructor(private readonly cardNumber: string, private readonly expirationDate: string, private readonly cvv: string) {}

  pay(amount: number): void {
    console.log(
Paying $${amount} with credit card ${this.cardNumber}
);
    // Perform the payment logic for credit card
  }
}

class PayPalStrategy implements PaymentStrategy {
  constructor(private readonly email: string, private readonly password: string) {}

  pay(amount: number): void {
    console.log(
Paying $${amount} with PayPal account ${this.email}
);
    // Perform the payment logic for PayPal
  }
}

// Define the context that uses the strategy
class PaymentContext {
  constructor(private readonly paymentStrategy: PaymentStrategy) {}

  pay(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

// Usage
const creditCardStrategy = new CreditCardStrategy('1234 5678 9012 3456', '12/23', '123');
const paymentContext = new PaymentContext(creditCardStrategy);
paymentContext.pay(100);

const paypalStrategy = new PayPalStrategy('johndoe@example.com', 'password123');
const paymentContext = new PaymentContext(paypalStrategy);
paymentContext.pay(50);
`
In this example, we define an interface 
PaymentStrategy
 for our strategies to implement. We then define two concrete implementations of the strategy, 
CreditCardStrategy
 and 
PayPalStrategy
. These strategies implement the 
pay
 method defined in the interface.

We then define a 
PaymentContext
 class that takes a 
PaymentStrategy
 instance as a parameter in its constructor. This context class has a 
pay
 method that simply delegates to the strategy instance's 
pay
 method.

Finally, we create instances of our concrete strategies and pass them to the 
PaymentContext` instance to perform payments.
