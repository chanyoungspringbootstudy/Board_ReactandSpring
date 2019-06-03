import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

import './App.scss';

// const App = () => (
//     <div>
//         <Home/>
//         <Page1/>
//         <Page2/>
//         <Page3/>
//     </div>
// );

// class App extends React.Component {
//     state = {
//         location: 0
//     };
//
//     render() {
//         let {location} = this.state;
//         return (
//             <div>
//                 { location === 0 && <Home/> }
//                 { location === 1 && <Page1/>}
//                 { location === 2 && <Page2/>}
//                 { location === 3 && <Page3/>}
//             </div>
//         );
//     }
// }

const App = () => (
    <BrowserRouter>
        <header className='app-header'>
            <ul className='menu-bar'>
                <li><Link to={'/'}>홈페이지</Link></li>
                <li><Link to={'/page1'}>Page1</Link></li>
                <li><Link to={'/page2'}>Page2</Link></li>
                <li><Link to={'/page3'}>Page3</Link></li>
            </ul>
        </header>
        <section className='app-body'>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/page1'} component={Page1}/>
            <Route path={'/page2'} component={Page2}/>
            <Route path={'/page3'} component={Page3}/>
        </section>
    </BrowserRouter>
);


export default App;
