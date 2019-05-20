import React from 'react';
import '../App.css';
import Bible from '../images/bible.jpg';
import VerseAnalysis from './form';
import propTypes from 'prop-types';
import{BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <p>Home</p>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <p>About</p>
    </div>
  );
};
const contact = () => {
  return (
    <div>
      <p>contact</p>
    </div>
  );
};
class App extends React.Component {
  render() {
    return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/"> About </Link>
            </li>
            <li>
              <Link to="/"> contact </Link>
            </li>
          </ul>
        </nav>

        <Route path ="/" exact Component={Home}/>
        <Route path ="/"About  Component={About}/>
        <Route path ="/"contact  Component={contact}/>

      </div>
    </Router>
    )
  }
}


class Name extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        value: '',
        valid: false

    };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
      this.setState({value: event.target.value});
    }
    handleSubmit(event){
      alert('Name: ' + this.state.value);
      event.preventDefault();
     
    }
    render(){
      return(
        <div>
              
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} required/>
                
            </label>
            <input type="submit" value="submit" />

          </form>
        </div>
      );
    }
  }
class TopNavbar extends React.Component{
    constructor(props){
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.updateVerse = this.updateVerse.bind(this);
        this.addVerse = this.addVerse.bind(this);

        this.state = {
        
            verses : [
                {
                    verseDescripton: 'Psalm 2 v 33',
                    id:0
                },
            ],
            newVerseAnalysisObject: ""
        }
    }

    addVerse(evt){
        
        evt.preventDefault();
        let verses = this.state.verses;
        let newVerseAnalysisObject = this.state.newVerseAnalysisObject;
        
        verses.push({
            verseDescripton:newVerseAnalysisObject
        });
        
        this.setState({
            newVerseAnalysisObject: newVerseAnalysisObject
        })
    }
    updateVerse(event){
        this.setState({
            newVerseAnalysisObject: event.target.value
        })
    }
    changeStatus(){
        
        this.setState({ 
            verses:''
        })
    }
    render() {
       var newVerse =  this.state.verses.map((verse, index) =>{
            return <p key={index} className="listContainer">{verse.verseDescripton}</p>
        })
        return(
            <div>{this.props.propString}
               
            <App/>
                <div className="navContainer">
                <img src={Bible} width={100} height={50} alt="bible"/>
                    <p style={{fontSize:20, letterSpacing:10 }}>FAVOURITE VERSES</p>
                </div>
                <Name/>
                <VerseAnalysis
                    newVerseAnalysisObject={this.state.newVerseAnalysisObject}
                    updateVerse={this.updateVerse}
                    addVerse = {this.addVerse}
                />
                
                <p>{newVerse}</p>
            </div>

        )
        
    }
}

TopNavbar.prototypes={
  propString:propTypes.string
}
export default TopNavbar;