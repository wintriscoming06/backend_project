// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         next(error)
//     }
// } 
// const asyncHandler = (fn) => {
//   return async (req, res, next) => {
//     try {
//       await fn(req, res, next);
//     } catch (error) {
//       res.status(500 || error.code).json({ 
//         success: false,
//         message: error.message || "Internal Server Error" 
//       });
//     }
//   };
// };

const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).
        catch((err)=>next(err));
    }
};

export { asyncHandler };


