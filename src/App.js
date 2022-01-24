import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import { ThemeProvider } from './store/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
