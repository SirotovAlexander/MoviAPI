function getMoviList(data) {
  const markup = data
    .map(
      item => ` <li class='movi-list_item'>
          <img class='movi-list_img' src="https://image.tmdb.org/t/p/w300${
            item.poster_path
          }" height='450' alt="${item.original_name}">
          <div class='movi-list_wrapper'><h2>${item.original_name}</h2>
          <p>${item.overview}</p>
          <p><b>${Math.floor(item.vote_average)}</b></p></div>
        </li>`
    )
    .join('');

  return markup;
}

export { getMoviList };
