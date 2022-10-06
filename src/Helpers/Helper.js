const getAverage2 = (dogs) => {
  const average =
    dogs.reduce((acc, curr) => {
      return acc + parseInt(curr.grade);
    }, 0) / dogs.length.toFixed(2);
  return average;
};

// const getAverage = (dogs) => {
//   let sum = 0;
//   for (let dog of dogs) {
//     sum += parseInt(dog.grade);
//   }
//   return (sum / dogs.length).toFixed(2);
// };

export default getAverage2;
