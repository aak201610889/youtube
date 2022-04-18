import React, { useState } from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideoes from './RecommendedVideoes';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import SearchPage from './SearchPage';
import data from './data';
function App() {
      
    
  const [showleft, setshowleft] = useState(false)
  const [recomendedVideos, setrecomendedVideos] = useState(data)
  const [inputSearch, setInputSearch] = useState("");
  const [dark, setdark] = useState(false)
  return (
    <div className= "App">
      <Router>
        <Header
          showleft={showleft}
          setshowleft={setshowleft}
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          dark={dark}
          setdark={setdark}
        />
        <Switch>
          <Route path="/:searchTerm">
            <div className="app__page">
              {showleft && <Sidebar dark={dark} />}
              <SearchPage
                inputSearch={inputSearch}
                recomendedVideos={recomendedVideos}
                dark={dark}
              />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              {showleft && <Sidebar dark={dark} />}
              <RecommendedVideoes
                recomendedVideos={recomendedVideos}
                dark={dark}
              />
            </div>
          </Route>
        </Switch>
      </Router>
      {/* revomended video */}
    </div>
  );
}

export default App;
