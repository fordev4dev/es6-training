describe('rest parameters', () => {

  it('catch non-specified params', () => {
    function resty(first, second, ...others) {
      return others
    }

    expect(resty().length).toBe(/* YOUR ANSWER */)
    expect(resty(1).length).toBe(/* YOUR ANSWER */)
    expect(resty(1, 2).length).toBe(/* YOUR ANSWER */)
    expect(resty(1, 2, 3).length).toBe(/* YOUR ANSWER */)
    expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length).toBe(/* YOUR ANSWER */)
  })

  it('has a different length than `arguments`', () => {
    function resty(first, second, ...others) {
      return others.length == arguments.length
    }

    expect(resty()).toBe(/* YOUR ANSWER */)
    expect(resty(1)).toBe(/* YOUR ANSWER */)
    expect(resty(1, 2)).toBe(/* YOUR ANSWER */)
    expect(resty(1, 2, 3)).toBe(/* YOUR ANSWER */)
    expect(resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10)).toBe(/* YOUR ANSWER */)
  })

  it('it can default all arguments, optionally', () => {
    // Modify the method signature of `myFunction` to allow for all args to be optional

    function myFunction({name, age, favoriteBand}) {
      expect(name).toBeDefined()
      expect(age).toBeDefined()
      expect(favoriteBand).toBeDefined()
    }

    myFunction({name: 'John', age: 40, favoriteBand: 'The Beatles'})
    myFunction({name: 'John', age: 40})
    myFunction({name: 'John'})
    myFunction({})
    myFunction()
  })

  describe('gimmePairs function', function() {
    // write function `gimmePairs` which accepts dynamic number of parameters
    // and returns an array of all possible pairs

    let gimmePairs;

    beforeEach(function() {
      jasmine.addMatchers(customMatchers);
    })

    it('returns correct results', function() {
      expect(gimmePairs(1)).toEqualJSON([]);
      expect(gimmePairs(1, 2)).toEqualJSON([[1, 2]]);
      expect(gimmePairs(1, 2, 3)).toEqualJSON([[1, 2], [2, 3], [1, 3]]);
      expect(gimmePairs(1, 2, 3, 4)).toEqualJSON([[1, 2], [2, 3], [3, 4], [1, 3], [2, 4], [1, 4]]);
    })
  })
})
