import React from 'react';
import { styled } from 'styled-components';

export const ImageGallery = ({ images }) => {
  //src.landscape, alt, id
  return (
    <>
      <List>
        {images.map(photo => (
          <li key={photo.id}>
            <img src={photo.src.landscape} alt={photo.alt} />
          </li>
        ))}
      </List>
    </>
  );
};

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  & li {
    width: 800px;
    overflow: hidden;
  }
`;
