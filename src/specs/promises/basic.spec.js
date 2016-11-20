describe('promises', () => {

  it('should resolve', (done) => {
    pickUpAGirl('romantic')
      .then(result => {
        expect(result).toBe('Amor Latino')
        done()
      }, error => {
        throw new Error('this should not run')
      })
      .catch(error => {
        throw new Error('this should not run')
      })
  })

  it('should reject', (done) => {
    pickUpAGirl('rich asshole')
      .then(result => {
        throw new Error('this should not run')
      }, error => {
        expect(error).toBe('Donald Trump')
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
        expect(error.message).toBe('what are you doing?')
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
