let topics = ["HTML", "CSS", "Javascript", "GIT"];
let shapes = ["Circle", "Square", "Triangle", "Pentagon"];

// if (topic === "HTML") {
//   console.log("Let's Study " + topic + "!");
// } else if (topic === "CSS") {
//   console.log("Let's Study " + topic + "!");
// } else if (topic === "Javascript") {
//   console.log("Let's Study " + topic + "!");
// } else if (topic === "Git") {
//   console.log("Let's Study " + topic + "!");
// } else {
//   console.log("Please try again.");
// }

for (
  let shape_controler = 0;
  shape_controler < shapes.length;
  shape_controler++
) {
  console.log(shapes[shape_controler]);
}

// new section

console.log();

for (
  let topic_controller = 0;
  topic_controller < topics.length;
  topic_controller++
) {
  console.log(topics[topic_controller]);
}
