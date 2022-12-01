// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
       expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello(`Jane`)).toBe('Hello, Jane!');
    });
    it('should return the string "Hello, Alex!"', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex!')
    });
    it('should return the string "Hello, Pat!"', function () {
        expect(sayHello('Pat')).toBe(('Hello, Pat!'))
    });
    it('should return the string "Hello, World!"', function () {
        expect(sayHello(true)).toBe(('Hello, World!'))
    });
    it('should return the string "Hello, World!"', function () {
        expect(sayHello(false)).toBe(('Hello, World!'))
    });
});
describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed the string "5"', function () {
        expect(isFive('5')).toBe(true);
    });
});
describe('isEven', function () {
    it('should be defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed the string "banana"', function () {
        expect(isEven('banana')).toBe(false);
    });
    it('should return true when passed the string "8"', function () {
        expect(isEven('8')).toBe(true);
    });
    it('should return false when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed the boolean true', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed the boolean false', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
});
