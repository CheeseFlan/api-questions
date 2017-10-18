const asyncMiddleware = fn =>
  (req, res, next) => {
    const routerPromise = fn(req, res, next)
    if (routerPromise.catch) {
      routerPromise.catch(err => next(err))
    }
  }

module.exports = asyncMiddleware
