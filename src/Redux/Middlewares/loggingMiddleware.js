const loggingMiddleware = store => next => action => {
  // Our middleware
  console.log(`Redux Log:`, action);
  // call the next function
  next(action);
};
export default loggingMiddleware;

//here is how it works:
// const loggingMiddleware = function(store) {
//   // Called when calling applyMiddleware so
//   // our middleware can have access to the store

//   return function(next) {
//     // next is the following action to be run
//     // after this middleware

//     return function(action) {
//       // finally, this is where our logic lives for
//       // our middleware.
//     }
//   }
// }
