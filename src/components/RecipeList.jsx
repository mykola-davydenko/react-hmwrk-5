import styled from 'styled-components';
import Recipe from './Recipe';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

function RecipeList({ items }) {
  return (
    <List>
      {items.map((item) => (
        <li key={item.id}>
          <Recipe item={item} />
        </li>
      ))}
    </List>
  );
}

export default RecipeList;
