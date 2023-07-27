import React from 'react';
import { formatDateToNow } from 'services/formatDate';
import { Avatar, CardContainer, Date, DescriptionContainer, Flex, Picture, PictureContainer, Tag, Title } from './BlogCard.styled';

export const BlogCard = props => {
  const { name, postedAt, poster, tag, title, description, avatar } =
    props.article;

  return (
    <CardContainer>
      <PictureContainer>
        <Picture src={poster} alt={title} />
      </PictureContainer>
      <DescriptionContainer>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
        <p>{description}</p>
      </DescriptionContainer>
      <div>
        <Flex >
          <Avatar src={avatar} alt="Avatar" />
          <div>
            <p>{name}</p>
            <Date>{formatDateToNow(postedAt)}</Date>
          </div>
        </Flex>
      </div>
    </CardContainer>
  );
};
