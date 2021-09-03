import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {Menu} from './components/Menu';

import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';

import {EditarPedido} from './pages/Pedido/EditarPedido.js';
import {Pedido} from './pages/Pedido/';

import {CriarServico} from './pages/Servico/CriarServico.js';
import {visualizarServico} from './pages/Servico/visualizarServico';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          
          <Route exact path="/" component={Pedido}/>
          <Route path="/editarpedido" component={EditarPedido}/>

          <Route exact path="/visualizarservico" component={visualizarServico}/>
          <Route path="/criarservico" component={CriarServico}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
