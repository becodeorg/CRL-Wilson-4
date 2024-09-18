const OrangeTree = require('./basic_oop.js'); // Update the path based on your file structure

describe('OrangeTree', () => {
  let orangeTree;

  beforeEach(() => {
    orangeTree = new OrangeTree();
  });


  it('should have an age', () => {
    expect(orangeTree).toHaveProperty('age');
    expect(typeof orangeTree.age).toBe('number');
  });

  it('should be 0 years old when created', () => {
    expect(orangeTree.age).toBe(0);
  });

  it('should have a height', () => {
    expect(orangeTree).toHaveProperty('height');
    expect(typeof orangeTree.height).toBe('number');
  });

  it('should measure 0 meters when 0 years old', () => {
    expect(orangeTree.height).toBe(0);
  });

  it('should have fruits', () => {
    expect(orangeTree).toHaveProperty('fruits');
    expect(typeof orangeTree.fruits).toBe('number');
  });

  it('should have 0 fruits when 0 years old', () => {
    expect(orangeTree.fruits).toBe(0);
  });


  it('should have an `oneYearPasses` method to simulate a year passing', () => {
    expect(orangeTree).toHaveProperty('oneYearPasses');
  });

  it('should age each year. After 8 years, it should be 8 years old', () => {
    for (let i = 0; i < 8; i++) {
      orangeTree.oneYearPasses();
    }
    expect(orangeTree.age).toBe(8);
  });

  

  it('should measure 10 meters when 10 years old', () => {
    for (let i = 0; i < 10; i++) {
      orangeTree.oneYearPasses();
    }
    expect(orangeTree.height).toBe(10);
  });

  it('should still measure 10 meters when 20 years old', () => {
    for (let i = 0; i < 20; i++) {
      orangeTree.oneYearPasses();
    }
    expect(orangeTree.height).toBe(10);
  });

  

  for (let i = 1; i <= 5; i++) {
    it(`should not produce fruits at ${i} year${i > 1 ? 's' : ''} old`, () => {
      for (let j = 0; j < i; j++) {
        orangeTree.oneYearPasses();
      }
      expect(orangeTree.fruits).toBe(0);
    });
  }

  for (let i = 6; i <= 9; i++) {
    it(`should produce 100 fruits at ${i} years old`, () => {
      for (let j = 0; j < i; j++) {
        orangeTree.oneYearPasses();
      }
      expect(orangeTree.fruits).toBe(100);
    });
  }

  for (let i = 10; i <= 14; i++) {
    it(`should produce 200 fruits at ${i} years old`, () => {
      for (let j = 0; j < i; j++) {
        orangeTree.oneYearPasses();
      }
      expect(orangeTree.fruits).toBe(200);
    });
  }

  it('should stop producing fruits when reaching 15 years old', () => {
    for (let i = 0; i < 15; i++) {
      orangeTree.oneYearPasses();
    }
    expect(orangeTree.fruits).toBe(0);
  });

  it('should have a `pickAFruit` method to simulate people picking a single fruit from the tree', () => {
    expect(orangeTree).toHaveProperty('pickAFruit');
  });

  it('should let people pick an orange', () => {
    for (let i = 0; i < 10; i++) {
      orangeTree.oneYearPasses();
    }
    orangeTree.pickAFruit();
    expect(orangeTree.fruits).toBe(199);
  });

  it('should not let people pick fruits if there are no fruits remaining', () => {
    for (let i = 0; i < 10; i++) {
      orangeTree.oneYearPasses();
    }
    // There should be 200 fruits
    for (let i = 0; i < 200; i++) {
      orangeTree.pickAFruit();
    }
    // Try to pick one more.
    orangeTree.pickAFruit();
    expect(orangeTree.fruits).toBe(0);
  });

 
});
