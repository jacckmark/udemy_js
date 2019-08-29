//REST PARAMETERS

//ES5

//checking if someone is a full age based on year of birth (we don't know a
//number of passed parameters) and we don't get them as an array so we have to
//transform it
function isFullAge1() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log(2016 - cur >= 18);
    });
}
isFullAge1(1999, 1990, 1962);

//ES6

//rest parameter will get all parameters that we are passing to a function and
//make them into an array
function isFullAge2(...years) {
    years.forEach(cur => console.log(2016 - cur >= 18));
}
isFullAge2(1998, 2001, 1992);

//also we can await another parameters, beside a rest parameter, here dynamic
//value of a age limit
function isFullAge2(limit, ...years) {
    years.forEach(cur => console.log(2016 - cur >= limit));
}
isFullAge2(16, 1998, 2001, 1992);
