describe('Destructuring', () => {

  describe('with Objects', () => {

    it('can be used to pull apart objects', () => {
      let { city, voivodeship, zip } = getAddress();
      expect(city).toBe('Kazimierz Dolny')
      expect(voivodeship).toBe('lubelskie')
      expect(zip).toBe(24120)
    })

    it('sets missing values to undefined', () => {
      let { address } = getAddress();
      expect(address).not.toBeDefined();
    })

    it('can alias destructured variables', () => {
      let {city: c, voivodeship: v, zip: z} = getAddress()
      expect(c).toBe('Kazimierz Dolny')
      expect(v).toBe('lubelskie')
      expect(z).toBe(24120)
      expect(() => noop(city)).toThrow()
      expect(() => noop(voivodeship)).toThrow()
      expect(() => noop(zip)).toThrow()
    })

    it('can destructure nested variables', () => {
      let { coords: {lat, long} } = getAddress()
      expect(lat).toBe(51.3180409)
      expect(long).toBe(21.9542483)
      expect(() => noop(coords)).toThrow()
    })

  })

  describe('with Arrays', () => {

    it('can be used to pull apart arrays', () => {
      let [one, two,] = getNumbers()
      expect(one).toBe(1)
      expect(two).toBe(2)
    })

    it('can skip indexes in arrays', () => {
      let [one, , three, ] = getNumbers()
      expect(one).toBe(1)
      expect(three).toBe(3)
      expect(() => noop(two)).toThrow()
    })

    it('can reach nested arrays', () => {
      let [one, , [three, , [, six]]] = getNestedNumbers()
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
