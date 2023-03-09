export const CustomImg = ({ src, alt, width }) => (
  <img
    style={{
      objectPosition: 'center',
      objectFit: 'cover',
      width: width || '100%',
      height: '100%',
      borderRadius: '3%',
    }}
    src={src}
    alt={alt}
    loading='lazy'
  />
);
