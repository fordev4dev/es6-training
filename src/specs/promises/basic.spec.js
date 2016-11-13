describe('promises', () => {
  // this suite is a little different
  // given an example promise boilerplate at the bottom
  // adapt it to support 3 different scenarios:
  // - resolved
  // - rejected
  // - error catch

  it('should resolve', (done) => {
    pickUpAGirl(/*ENTER GUESS HERE*/)
      .then(result => {
        expect(result).toBe(/*ENTER GUESS HERE*/)
        done()
      }, error => {
        throw new Error('this should not run')
      })
      .catch(error => {
        throw new Error('this should not run')
      })
  })

  it('should reject', (done) => {
    pickUpAGirl(/*ENTER GUESS HERE*/)
      .then(result => {
        throw new Error('this should not run')
      }, error => {
        expect(error).toBe(/*ENTER GUESS HERE*/)
        done()
      })
      .catch(error => {
        return "I'll find another one"
      })
  })

  it('errors can be caught', (done) => {
    pickUpAGirl()
      .then(result => {
        throw new Error('this should not run')
      })
      .catch(error => {
        expect(error.message).toBe(/*ENTER GUESS HERE*/)
        done()
      })
  })

  function pickUpAGirl(style) {
    // Immediately return a promise which will eventually get resolved
    // or rejected by calling the corresponding function.
    return new Promise((resolve, reject) => {
      // simulating something asynchonous here...
      setTimeout(() => {
        if (style === 'romantic') {
          resolve('Amor Latino')
        } else if (style === 'rich asshole') {
          reject('Donald Trump')
        } else {
          reject(new Error('what are you doing?'))
        }
      }, 0)
    })
  }
})
