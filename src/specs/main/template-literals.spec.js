describe('Template literals', () => {

  it('should support string interpolation', () => {
    const person = {
      name: 'Jarosław',
      friends: [
        'Antoni',
        'Andrzej',
        'Krystyna',
        'Wiktor',
      ],
    }
    const personsFriends = `${person.name} has ${person.friends.length} friends: ${person.friends.join(', ')}`

    expect(personsFriends).toBe(
      'Jarosław has 4 friends: Antoni, Andrzej, Krystyna, Wiktor'
    )
  })

  it('should support multi-line strings', () => {
    const multiLine = `
    Oh
    my
    dear
    so much fun!`
    expect(multiLine).toBe('\n    Oh\n    my\n    dear\n    so much fun!')
  })

  it('should support string escaping', () => {
    expect(`Hi\nthere!`).toBe('Hi\nthere!')
    expect(`This is \`escaped\` backtics`).toBe('This is `escaped` backtics')
  })

  it('should call the tagging function', () => {
    const noun = 'World'
    const emotion = 'happy'
    const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`
    expect(result).toBe('Hello super-cool World! Are you feeling really happy today?')

    function tagIt(literalString, ...interpolatedParts) {
      return `${literalString[0]}super-cool ${interpolatedParts[0]}${literalString[1]}really ${interpolatedParts[1]}${literalString[2]}`
    }
  })

  it('can be curried', () => {
    let journey =
      first =>
        second =>
          third => `${first}, then ${second} and finally ${third}!`

    expect(journey `Warsaw` `Poznan` `Berlin`).toBe('Warsaw, then Poznan and finally Berlin!')
    expect(journey `Poland` `Czech` `Austria`).toBe('Poland, then Czech and finally Austria!')
    expect(journey `Europe` `Asia` `Australia`).toBe('Europe, then Asia and finally Australia!')
  })

})
