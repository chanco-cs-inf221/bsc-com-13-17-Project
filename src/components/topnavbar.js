import React from 'react';
import '../App.css';
import Bible from '../images/bible.jpg';
import VerseAnalysis from './form';

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
            newVerseAnalysisObject: ''
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
            <div>
                <div className="navContainer">
                <img src={Bible} width={100} height={50} alt="bible"/>
                    <p style={{fontSize:20, letterSpacing:10 }}>FAVOURITE VERSES</p>
                </div>
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

export default TopNavbar;