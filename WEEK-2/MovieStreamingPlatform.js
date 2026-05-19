//ASSIGNMENT 4: 
//Movie Streaming Platform
//You are working on a movie recommendation system.

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

    //1. filter() only "Sci-Fi" movies
    const scifiMovie=movies.filter((total,movie)=>movie.genre==="Sci-Fi")
    console.log(scifiMovie)

    //2. map() to return:"Inception (8.8)
     const movieList = movies.map(m =>`${m.title} (${m.rating})`)
     console.log(movieList)

    //3. reduce() to find average movie rating
    const avgRating = movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
    console.log(avgRating)
       // 4. find() movie "Joker"
       const joker=movies.find((movie)=>movie.title==="Joker")
       console.log(joker)

  //  5. findIndex() of "Avengers"
      const Avengers=movies.findIndex((movie)=>movie.title==="Avengers")
      console.log(Avengers)