import { Route, BrowserRouter } from 'react-router-dom'
import routes from './src/components/pages/layouts/home04/'
function App() {

  return (
      <BrowserRouter>
          {
            routes.map((route, idx) => (
              <Route exact path={route.path} component={route.component} key={idx}></Route>
            ))
          }
      </BrowserRouter>
  );
}

export default App;
