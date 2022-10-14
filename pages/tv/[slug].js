import React from "react";
import SingleShowPage from "../../Components/Movies/SingleShowPage";

const SingleShowTv = (props) => {
  return (
    <SingleShowPage
      image={props.tmdbData.backdrop_path}
      movieName={props.omdbData.Title}
      imdb={props.omdbData?.Ratings[0]?.Value}
      rt={props.omdbData?.Ratings[1]?.Value}
      metacritic={props.omdbData?.Ratings[2]?.Value}
      genre={props.omdbData.Genre}
      overview={props.tmdbData.overview && props.omdbData.Plot}
      actors={props.omdbData.Actors}
      rated={props.omdbData.Rated}
      creators={props.omdbData.Writer}
    />
  );
};

export default SingleShowTv;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${context.query.slug}?api_key=f91458f7d7dd51c6920d723c52564c4a&language=en-US`
  );
  const tmdbData = await response.json();
  const newres = await fetch(
    `https://www.omdbapi.com/?t=${encodeURI(
      tmdbData.name
    )}&plot=full&apikey=6dd2da1e`
  );
  const omdbData = await newres.json();
  return {
    props: { omdbData, tmdbData },
  };
}
