export const Desciprion = ({ data }) => {
  const {
    original_title,
    overview,
    poster_path,
    release_date,
    status,
    budget,
    belongs_to_collection,
    vote_average,
    title,
    genres,
    revenue,
    runtime,
    production_companies,
  } = data;

  const runTime = (min) => {
    const hours = Math.floor(min / 60);
    const lastMin = min - hours * 60;
    return `${hours} hours ${lastMin} min`;
  };

  return (
    <div className='description'>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <div>
          <div className='description-title'>
            <h2>{title}</h2>
            <p>Runtime: {runTime(runtime)}</p>
          </div>
          <div>
            <p>Contry: {production_companies[0].origin_country}</p>
            <p>{release_date}</p>
            <p>{status}</p>
            <p>Rating: {vote_average}</p>
            <p>Budget: {budget}</p>
            <p>Revenue: {revenue}</p>
            <div>
              Genres:
              {genres.map((item, idx) => (
                <p key={idx}>{item.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className='description-overview'>{overview}</p>
    </div>
  );
};
