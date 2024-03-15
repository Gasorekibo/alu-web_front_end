let roomDimensions = {
  width: 50,
  height: 100
};
const getArea = ()=> {
  return this.height * this.width;
}
const boundGetArea = getArea.bind(roomDimensions);
console.log(boundGetArea()); // 500

// The bind() function is used to borrow a function to another object, it work the same way as
// calling apply() with null and an array of arguments. However, instead of passing an array,
// you pass each argument as individual arguments.

// There is also a function called call() it work in the same way, but both call() and applY() envoke the function
// immediately whereas bind() return a copy the function.
