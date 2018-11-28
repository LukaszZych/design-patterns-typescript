// 1. Main interfaceinterface Chocolate {  displayColor();}// 2. First classclass WhiteChocolate implements Chocolate {  displayColor() {    console.log('White color!');  }}// 3. Second classclass DarkChocolate implements Chocolate {  displayColor() {    console.log('Dark color!');  }}// 4. Main factoryabstract class ChocolateFactory {  abstract getAChocolate(): Chocolate;}// 5. Factory of the first classclass WhiteChocolateFactory extends ChocolateFactory {  getAChocolate(): Chocolate {    return new WhiteChocolate();  }}// 6. Factory of the second classclass DarkChocolateFactory extends ChocolateFactory {  getAChocolate(): Chocolate {    return new DarkChocolate();  }}// How to use:const chocolateFactory: ChocolateFactory = new WhiteChocolateFactory();const whiteChocolate: Chocolate = chocolateFactory.getAChocolate();whiteChocolate.displayColor();