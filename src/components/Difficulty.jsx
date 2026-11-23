import styled from 'styled-components';

const Box = styled.div`
  width: 140px;
  margin: 0 auto;
  padding: 10px;
  text-align: left;
  background-color: #fff;
  border-radius: 15px;
`;

const Title = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: bold;
`;

const Levels = styled.div`
  display: flex;
  gap: 5px;
`;

const Level = styled.span`
  font-size: 9px;
  padding: 4px 7px;
  border-radius: 12px;
  background-color: ${(props) => (props.$active ? '#ff6b6b' : '#fff6d9')};
  color: ${(props) => (props.$active ? '#fff' : '#000')};
  font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
`;

function Difficulty({ difficulty }) {
  return (
    <Box>
      <Title>Difficulty</Title>
      <Levels>
        <Level $active={difficulty === 0}>Easy</Level>
        <Level $active={difficulty === 1}>Medium</Level>
        <Level $active={difficulty === 3}>Hard</Level>
      </Levels>
    </Box>
  );
}

export default Difficulty;
