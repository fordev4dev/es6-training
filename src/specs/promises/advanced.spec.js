describe('promises', () => {

  it('can be chained', (done) => {
    // specify thenable functions to make expectations pass
    let p1 = Promise.resolve(/* YOUR ANSWER */)
    let p2 = p1.then(/* YOUR ANSWER */)
    let p3 = p2.then(/* YOUR ANSWER */)

    p1.then(result => expect(result).toEqual(3))
    p2.then(result => expect(result).toEqual([3, 9, 27, 81]))
    p3.then(result => expect(result).toEqual([30, 90]))

    Promise.all([p1, p2, p3]).then(done)
  })

})
