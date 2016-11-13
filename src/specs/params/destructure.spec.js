describe('Destructuring', () => {

  describe('with Objects', () => {

    it('can be used to pull apart objects', () => {
      // Using destructuring, call `getAddress()` and create a 'city', 'voivodeship' and 'zip' variable.
      var address = getAddress();
      // var city = address.city;
      // var voivodeship = address.voivodeship;
      // var zip = address.zip;
      expect(city).toBe('Kazimierz Dolny')
      expect(voivodeship).toBe('lubelskie')
      expect(zip).toBe(24120)
    })

    it('sets missing values to undefined', () => {
      // Using destructuring, call `getAddress()` and create an 'address' variable.
      expect(address).not.toBeDefined();
    })

    it('can alias destructured variables', () => {
      // Using destructuring, call `getAddress()` and pull the city, voivodeship and zip out, and alias them to c, v, z, respectively
      expect(c).toBe('Kazimierz Dolny')
      expect(v).toBe('lubelskie')
      expect(z).toBe(24120)
      expect(() => noop(city)).toThrow()
      expect(() => noop(voivodeship)).toThrow()
      expect(() => noop(zip)).toThrow()
    })

    it('can destructure nested variables', () => {
      // Using destructuring, call `getAddress()` and create an 'lat' and 'long' variables.
      expect(lat).toBe(51.3180409)
      expect(long).toBe(21.9542483)
      expect(() => noop(coords)).toThrow()
    })
  })

  describe('with Arrays', () => {

    it('can be used to pull apart arrays', () => {
      // Call getNumbers and pull the first value out as `one` and the second as `two`
      expect(one).toBe(1)
      expect(two).toBe(2)
    })

    it('can skip indexes in arrays', () => {
      // Call getNumbers and pull the first value out as `one` and the third as `three`
      expect(one).toBe(1)
      expect(three).toBe(3)
      expect(() => noop(two)).toThrow()
    })

    it('can reach nested arrays', () => {
      // Call getNestedNumbers and pull the first value out as `one`, the 3 as `three` and 6 as `sixth`.
      expect(one).toBe(1)
      expect(three).toBe(3)
      expect(six).toBe(6)
    })
  })
})

function getAddress() {
  return {
    city: 'Kazimierz Dolny',
    voivodeship: 'lubelskie',
    zip: 24120,
    coords: {
      lat: 51.3180409,
      long: 21.9542483,
    },
  }
}

function getNumbers() {
  return [1, 2, 3, 4, 5, 6]
}

function getNestedNumbers() {
  return [1, 2, [3, 4, [5, 6]]]
}
