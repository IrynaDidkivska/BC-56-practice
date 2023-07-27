const { styled } = require('styled-components');

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 300px;
  border-radius: 8px;
  box-shadow: 3px 3px 4px 1px gray;
`;

export const PictureContainer = styled.div`
  overflow: hidden;
  max-height: 200px;
`;
export const Picture = styled.img`
  object-fit: cover;
`;
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;
export const Tag = styled.span`
  padding: 3px 6px;
  display: block;
  width: fit-content;
  border-radius: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.tagBackground};
  color: ${({ theme }) => theme.colors.lightColor};
`;
export const Title = styled.h2`
  font-size: ${({ theme }) => theme.spacing(6)};
  text-transform: capitalize;
`;
export const Avatar = styled.img`
  border-radius: 50%;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  gap: 10px;
`;
export const Date = styled.p`
  color: gray;
`;
