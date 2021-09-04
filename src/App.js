import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {Menu} from './components/Menu';

import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';

import {Pedido} from './pages/Pedido/';

import {Servico} from './pages/Servico/Servico';
import {VisualizarServico} from './pages/Servico/VisualizarServico';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          
          <Route path="/pedido" component={Pedido}/>

          <Route path="/visualizarservico" component={VisualizarServico}/>
          <Route path="/servico/:id" component={Servico}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
