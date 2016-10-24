const API = (function(){

  const timeout = () => Math.random() * 100

  const wrapWithPromise = fn =>
    (...args) => {
      return new Promise((resolve, reject) =>
        setTimeout(() => resolve(fn(...args)), timeout())
      )
    }

  return {
    // getUser(id): thenable
    getUser: wrapWithPromise(db.getUserById),
    // getUsersByNationality(nationality): thenable
    getUsersByNationality: wrapWithPromise(db.getUsersByNationality),
    // getNationalities(): thenable
    getNationalities: wrapWithPromise(db.getNationalities),
  }
}());
