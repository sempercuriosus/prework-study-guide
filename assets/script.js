let topics = ["HTML", "CSS", "Javascript", "Git"];
// let shapes = ["Circle", "Square", "Triangle", "Pentagon"];
let randomTopic = topics[Math.floor(Math.random() * topics.length)];

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

// for (
//   let shape_controler = 0;
//   shape_controler < shapes.length;
//   shape_controler++
// ) {
//   console.log(shapes[shape_controler]);
// }

// new section

// console.log();

// for (
//   let topic_controller = 0;
//   topic_controller < topics.length;
//   topic_controller++
// ) {
//   console.log(topics[topic_controller]);
// }

function listTopics() {
  console.log("function call");

  for (
    let topic_controller = 0;
    topic_controller < topics.length;
    topic_controller++
  ) {
    console.log(topics[topic_controller]);
  }
}

function selectTopic() {
  console.log(randomTopic);

  if (randomTopic.toLowerCase() === "html") {
    console.log("Let's study HTML!");
  } else if (randomTopic.toLowerCase() === "css") {
    console.log("Let's study CSS!");
  } else if (randomTopic.toLowerCase() === "git") {
    console.log("Let's study Git!");
  } else if (randomTopic.toLowerCase() === "javascript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}

console.log("Here are the topics we learned through Prework:");
listTopics();

console.log("Which topic should we study first?");
selectTopic();
