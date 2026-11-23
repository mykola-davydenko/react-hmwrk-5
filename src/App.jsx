import { GlobalStyle } from './GlobalStyle';
import RecipeList from './components/RecipeList';
import recipes from './data/recipes.json';

function App() {
  return (
    <>
      <GlobalStyle />
      <RecipeList items={recipes} />
    </>
  );
}

export default App;
