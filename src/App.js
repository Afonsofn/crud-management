import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ManagementContextProvider } from './context/managementContext'

import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'

import './styles/global.css';

function App() {
  return (
    <div className="App">
      <ManagementContextProvider>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </ManagementContextProvider>
    </div>
  );
}

export default App;
