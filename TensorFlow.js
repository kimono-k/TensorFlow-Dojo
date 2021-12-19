async function run() {
  const myTensor = tf.tensor([0, 1, 2]);
  console.log(`myTensor.rank = ${myTensor.rank}`); // Tensor has 1 dimension
  console.log(myTensor.shape); // x items in the array = 3
  console.log(myTensor.dtype); // datatype = float32
  console.log(myTensor); // Tensor object
  myTensor.print(); // prints the value inside the tensor [0, 1, 2]

  const stringTensor = tf.tensor(["Kimono", "Entertainment"]);
  stringTensor.print(); // ["Kimono", "Entertainment"]
  console.log(stringTensor.shape); // x items = 2

  const twoDimensional = tf.tensor2d([
    [0, 1, 2],
    [3, 4, 5],
  ]);
  twoDimensional.print();
}

if (document.readyState !== "loading") run();
else document.addEventListener("DOMContentLoaded", run);
