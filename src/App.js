import  './App.css';
import React, { Component } from 'react';
import NavBar from './component/NavBar';
import News from './component/News'
import { HashRouter, Routes,Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'




export default class App extends Component {


  

  pageSize=15;

  state={

    progress:0
  }

  setProgress=(progress)=>{

    this.setState({progress: progress})
  }
  render() {
    return (
      <div>

        <HashRouter >
      <NavBar/>
      <LoadingBar
        height={3}
        color='red'
        progress={this.state.progress}    
      />

      {/* <News pageSize={5} country='in'/> */}


      <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>

          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"  />}></Route>

          <Route exact path="/entertainment"element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>

          <Route exact path="/general"element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>

          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>

          <Route exact path="/politics" element={<News setProgress={this.setProgress} key="politics" pageSize={this.pageSize} country="in" category="politics" />}></Route>

          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>

          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>

          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>
        </Routes>
      </HashRouter>


      
      </div>
    )
  }
}
