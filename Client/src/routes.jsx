import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from './context/Context';
import Login from './pages/login';


export default function AppRoutes() { 

    return (
        <Context.Provider value={{}}>            
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Login />} />                        
                        {/* {isLogged ? <Route exact path='/home' element={<HomePage />} /> : <Route exact path='/home' element={<Err />}  /> } */}
                        {/* <Route exact path='/home' element={<HomePage />} />
                        <Route exact path="/novopedido" element={<NovoPedidoPage />} />
                        <Route exact path="/editarpedido" element={<EditarPedidoPage />} />
                        <Route exact path='/lista' element={<ListUserPage />}></Route>
                        <Route exact path='/financeiro' element={<FinanceiroPage />}></Route> */}
                    </Routes>
                </BrowserRouter>            
        </Context.Provider>
    );
}