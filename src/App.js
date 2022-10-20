import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
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
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/exchanges' element={<Exchanges />} />
            <Route path='/news' element={<News />} />
            <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
            <Route path='/crypto/:coinId' element={<CryptoDetails />} />
          </Routes>
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
