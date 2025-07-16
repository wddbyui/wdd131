const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png/250px-Spider-Man_Into_the_Spider-Verse_poster.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/The_Other_Side_of_Heaven_theatrical_poster.png/250px-The_Other_Side_of_Heaven_theatrical_poster.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/17miracles.jpg/250px-17miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      }
    ];

    const movieList = document.getElementById('movie-list');

    movies.forEach(movie => {
      const article = document.createElement('article');
      article.className = 'movie';
      article.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
        <p><strong>Release Date:</strong> ${movie.date}</p>
        <p><strong>Recommended Age:</strong> ${movie.ages}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Rating:</strong> <span aria-label="${movie.stars.length} out of 5 stars">${movie.stars}</span></p>
        <p id='desc'>${movie.description}</p>
      `;
      movieList.appendChild(article);
    });