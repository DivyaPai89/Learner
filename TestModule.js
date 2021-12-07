// module.exports.pi = 3.142;
// module.exports.sum = function(a,b){
//     return (a+b);
// }

// let pi = 3.142;
// let sum = function(a,b){
//     return (a+b);
// }

// module.exports.pi = pi;
// module.exports.sum = sum;

module.exports = {
    pi : 3.142,
    sum : function(a,b){
          return (a+b);
    }
};

module.exports.multiply = (c,d) => {
 console.log(c*d);
};
