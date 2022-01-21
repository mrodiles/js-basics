//Exercise 7 String Properties
const movie = {
  title: "eye origins",
  releaseYear: "2011",
  rating: "5🌟🌟🌟🌟🌟,",
  director: "Michael",
};

showProperties(movies);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}
