function createClassRoom(numbersOfStudent) {
  function studentSeat(seat) {
    return () => seat;
  }
  const students = [];
  for (let i = 0; i < numbersOfStudent; i++) {
    students.push(studentSeat(i + 1));
  }
  return students;
}
const classRoom = createClassRoom(10);

console.log(classRoom[0]()); //1
console.log(classRoom[3]()); // 4
console.log(classRoom[9]()); //10
