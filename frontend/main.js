async function something() {
  return await fetch("http://localhost:3000/movies");
}

try {
  const data = await something();
  const json = await data.json();
  const movieList = document.getElementById("movie-list");
  for (const movie of json) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const movieImage = document.createElement("img");
    movieImage.src = movie.imageUrl;

    const movieName = document.createElement("p");
    movieName.innerText = movie.title;

    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieName);
    movieList.appendChild(movieCard);
  }
} catch (error) {
  console.error(error);
}
