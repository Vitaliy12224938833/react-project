import React from 'react';

export const CustomImg = (props) => {
  const { src, alt, width, radiusX, radiusY, height, maxWidth } = props;
  return (
    <img
      style={{
        maxWidth: maxWidth || 'auto',
        objectPosition: 'center',
        objectFit: 'cover',
        width: width || '100%',
        height: height || '100%',
        borderRadius: `${radiusY || '4.5%'} / ${radiusX || '3%'}  `,
      }}
      src={src}
      alt={alt}
      data-testid='custom-img'
    />
  );
};
