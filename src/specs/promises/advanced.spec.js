describe('promises', () => {

  it('can be chained', (done) => {
    let p1 = Promise.resolve(3)
    let p2 = p1.then(d => [d, d*d, d*d*d, d*d*d*d])
    let p3 = p2.then(([a, b, c, d]) => [a+c, b+d])

    p1.then(result => expect(result).toEqual(3))
    p2.then(result => expect(result).toEqual([3, 9, 27, 81]))
    p3.then(result => expect(result).toEqual([30, 90]))

    Promise.all([p1, p2, p3]).then(done)
  })

})
