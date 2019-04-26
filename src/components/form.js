import React from 'react';

    const VerseAnalysis = (props) => {
        var title = "Verses Analysis List";
        return (
            <div className= "formClass"> 
                    <form onSubmit={props.addVerse }>
                        <textarea maxLength={250} type="textarea" placeholder="Enter your verse analysis"
             value={props.newVerseAnalysisObject}
             onChange={ (e) => props.updateVerse(e)}
             
             />
            
                 <button onSubmit="this.submitForm" type="submit">Send</button>
                 
            </form>

            <button onClick="this.resetForm" type="cancel">Cancel</button>
            <h1 style={{color:'red', textDecoration:'underline', fontSize:20, letterSpacing:10}}>{title.toUpperCase()}</h1>

            <a
            className="App-link"
            href="https://www.kingjamesbibleonline.org/.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          SEARCH FROM THE BIBLE    </a>
            {/* */}
           
            </div>
        );
    }

    
export default VerseAnalysis;