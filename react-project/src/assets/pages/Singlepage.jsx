import { useGetRequest } from '../../HOOKs/useGetRequest';
import { generateURL } from '../../API/generate-url';
import { useParams } from 'react-router-dom';
import { TrailersSlider } from '../../components/TrailersSlider';
import { Desciprion } from '../../components/Description';
import { HorizontalList } from '../../components/HorizontalList/HorizontalList';
export const Singlepage = () => {
  const { id, content, category } = useParams();

  const url = generateURL(content, id, 'en-US', 1);
  const [pageData] = useGetRequest(url);
  const [videosData] = useGetRequest(
    `https://api.themoviedb.org/3/${content}/${id}/videos?api_key=1f63914a91cb95d33f7d8d413f4c28ca&language=en-US`
  );
  const [similarData] = useGetRequest(
    `https://api.themoviedb.org/3/${content}/${id}/similar?api_key=1f63914a91cb95d33f7d8d413f4c28ca&language=en-US&page=1`
  );
  console.log(pageData);

  return (
    <div className='conteiner'>
      <TrailersSlider data={videosData} />
      {pageData && <Desciprion data={pageData} />}
      {similarData && (
        <HorizontalList
          data={similarData}
          content={content}
          category={category}
        />
      )}
    </div>
  );
};
