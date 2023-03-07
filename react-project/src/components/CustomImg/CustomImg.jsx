export const CustomImg = ({ src, alt }) => (
  <img
    style={{
      objectPosition: 'center',
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      borderRadius: '3%',
    }}
    src={src}
    alt={alt}
    loading='lazy'
  />
);
