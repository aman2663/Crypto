import './App.css';
import {Switch,Route,Link} from 'react-router-dom';
import {Typography,Space} from 'antd';
import {Navbar,Exchanges,News,Homepage,Cryptocurrencies,CryptoDetails} from './Components';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <div className='routes'>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/exchanges'>
              <Exchanges />
            </Route>
            <Route path='/news'>
              <News />
            </Route>
            <Route path='/cryptocurrencies'>
              <Cryptocurrencies />
            </Route>
            <Route path='/crypto/:coinId'>
              <CryptoDetails />
            </Route>
          </Switch>
        </div>

      <div className='footer' >
        <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
          CryptoWorld <br />
          All right reserved
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
