const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const x = 2;
    const y = 2;

    //ACT
    const result = functions.multiply(x,y);

    //ASSERT
    expect(result).toBe(4)

  })

  it('should return a negative result when one of the numbers is negative', () => {
    //ARRANGE
    const x = -3;
    const y = 2;

    //ACT
    const result = functions.multiply(x,y);

    //ASSERT
    expect(result).toBe(-6)

  })
});


describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE

    //ACT
    const result = functions.isNull();

    //ASSERT
    expect(result).toBeNull();
  });

  it('should always return null regardless of input', () => {
    //ARRANGE
    const input = 'any input';

    //ACT
    const result = functions.isNull(input);

    //ASSERT
    expect(result).toBeNull();
  });
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
   //ARRANGE
   const argument = true;

   //ACT
   const result = functions.checkTruthy(argument);

   //ASSERT
   expect(result).toBe(true);
  });

  it('should return false when false is passed as argument', () => {
    //ARRANGE
    const argument = false;

    //ACT
    const result = functions.checkTruthy(argument);

    //ASSERT
    expect(result).toBe(false);
  });
})

describe('addLastName function', () => {
  it('should return Pepito Perez when lastName Perez is passed', () => {
    //ARRANGE
    const lastName = 'Perez';

    //ACT
    const result = functions.addLastName(lastName);
  
    //ASSERT
    expect(result).toEqual({
      firstname: 'Pepito', 
      lastname: 'Perez',
    });

  });

})
