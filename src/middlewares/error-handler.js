// // @ts-check
// const { error } = console;

// /* error를 JSON으로 응답합니다 */
// module.exports.errorHandler = (err, req, res, next) => {
//   const { statusCode, message, isCustom } = err;
//   if (isCustom) {
//     // 코드에서 캐치한 error는 'statusCode'와 'message'를 반환합니다.
//     res.status(statusCode).json({ message });
//   } else {
//     // 캐치하지 못한 error는 서버에러(500)으로 반환합니다.
//     error(err.stack);
//     res.status(500).json({ message: 'Server Error' });
//   }
//   next();
// };

// module.exports = { errorLogger, errorResponder };

// /* error를 JSON으로 응답합니다 */
// const errorResponder = (err, req, res, next) => {
//   const { statusCode, message, isCustom } = err;
//   if (isCustom) {
//     // 코드에서 캐치한 error는 'statusCode'와 'message'를 반환합니다.
//     res.status(statusCode).json({ message });
//   } else {
//     // 캐치하지 못한 error는 서버에러(500)으로 반환합니다.
//     error(err.stack);
//     res.status(500).json({ message: 'Server Error' });
//   }
//   next();
// };

// module.exports = { errorLogger, errorResponder };
