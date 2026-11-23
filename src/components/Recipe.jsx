import styled from 'styled-components';
import { IoAlarmOutline, IoPieChartOutline, IoBarChartOutline } from 'react-icons/io5';
import Difficulty from './Difficulty';

const Card = styled.div`
  width: 220px;
  text-align: center;
  padding: 10px;
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 20px;
`;

const Title = styled.h2`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  border-radius: 20px;
  padding: 8px 10px;
  font-size: 12px;
  margin-bottom: 10px;
`;

const InfoItem = styled.span`
  display: flex;
  align-items: center;
  gap: 3px;
`;

function Recipe({ item }) {
  const { name, image, time, servings, calories, difficulty } = item;

  return (
    <Card $hard={difficulty === 3}>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
      <Info>
        <InfoItem>
          <IoAlarmOutline size={20} />
          {time} min
        </InfoItem>
        <InfoItem>
          <IoPieChartOutline size={20} />
          {servings} servings
        </InfoItem>
        <InfoItem>
          <IoBarChartOutline size={20} />
          {calories} calories
        </InfoItem>
      </Info>
      <Difficulty difficulty={difficulty} />
    </Card>
  );
}

export default Recipe;
