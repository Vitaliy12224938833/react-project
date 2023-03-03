export const PersonDerscription = ({ data }) => {
  if (!data)
    return (
      <h1 style={{ textAlign: 'center', margin: ' 300px auto' }}>
        Something wrong... try again later
      </h1>
    );
  const {
    name,
    birthday,
    biography,
    place_of_birth,
    profile_path,
    deathday,
    homepage,
  } = data;
  console.log(data);
  return (
    <>
      <div className='description'>
        <img
          className='poster'
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
        />
        <div className='table-wrap'>
          <h2 className='description-title'>{name}</h2>
          <table>
            <tbody>
              {birthday && (
                <tr>
                  <th>
                    <b>Birthday:</b>
                  </th>
                  <th>
                    <span>{birthday}</span>
                  </th>
                </tr>
              )}
              {deathday && (
                <tr>
                  <th>
                    <b>Deathday:</b>
                  </th>
                  <th>
                    <span>{deathday}</span>
                  </th>
                </tr>
              )}
              {place_of_birth && (
                <tr>
                  <th>
                    <b>Place of birth:</b>
                  </th>
                  <th>
                    <span>{place_of_birth}</span>
                  </th>
                </tr>
              )}
              {homepage && (
                <tr>
                  <th>
                    <b>Homepage:</b>
                  </th>
                  <th>
                    <a href={homepage}>{homepage}</a>
                  </th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <p className='description-overview'>{biography}</p>
    </>
  );
};
