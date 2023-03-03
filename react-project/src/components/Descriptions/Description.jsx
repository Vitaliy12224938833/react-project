import './Description.css';
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

  const makeMoney = (n) =>
    parseFloat(n)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ') + ' $';

  return (
    <>
      {' '}
      <div className='description'>
        <img
          className='poster'
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className='table-wrap'>
          <h2 className='description-title'>{title}</h2>
          <table>
            <tbody>
              {runtime !== undefined && (
                <tr>
                  <th>
                    <b>Runtime:</b>
                  </th>
                  <th>
                    <span>{runTime(runtime)}</span>
                  </th>
                </tr>
              )}
              {production_companies.length > 0 && (
                <tr>
                  <th>
                    <b>Contry:</b>
                  </th>
                  <th>
                    <span>{production_companies[0].origin_country}</span>
                  </th>
                </tr>
              )}
              {release_date !== undefined && (
                <tr>
                  <th>
                    <b>Relis:</b>
                  </th>
                  <th>
                    <span>{release_date}</span>
                  </th>
                </tr>
              )}
              {status !== undefined && (
                <tr>
                  <th>
                    <b>Status</b>
                  </th>
                  <th>
                    <span>{status}</span>
                  </th>
                </tr>
              )}
              {vote_average !== undefined && (
                <tr>
                  <th>
                    <b>Rating:</b>
                  </th>
                  <th>
                    <span>{vote_average}</span>
                  </th>
                </tr>
              )}
              {budget !== undefined && (
                <tr>
                  <th>
                    <b>Budget:</b>
                  </th>
                  <th>
                    <span>{makeMoney(budget)}</span>
                  </th>
                </tr>
              )}
              {revenue !== undefined && (
                <tr>
                  <th>
                    <b>Revenue:</b>
                  </th>
                  <th>
                    <span>{makeMoney(revenue)}</span>
                  </th>
                </tr>
              )}
              {genres.length > 0 && (
                <tr>
                  <th>
                    <b>Genres:</b>
                  </th>
                  <th>
                    <span className='table-list'>
                      {genres.map((item, idx) => (
                        <span key={idx}>
                          {item.name}
                          <span> </span>
                        </span>
                      ))}
                    </span>
                  </th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <p className='description-overview'>{overview}</p>
    </>
  );
};
