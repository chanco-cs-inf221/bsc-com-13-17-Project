import React from 'react';


    const VerseAnalysis = (props) => {
        var title = "Verses Analysis List";
        return (
            <div className= "formClass"> 
                    
            
            <form onSubmit={props.addVerse }>
                       
                        <textarea maxLength={250} type="textarea" placeholder="Enter your verse and briefly describe it" required
                             value={props.newVerseAnalysisObject}
                             onChange={ (e) => props.updateVerse(e)}
                    
             />
            
                 <button onSubmit="this.handleChange" type="submit">Send</button>
                 <input value="reset" type="button" onClick="this.handlechange" name= "cancelForm"/>

            </form>


            <h1 style={{color:'red', textDecoration:'underline', fontSize:20, letterSpacing:10}}>{title.toUpperCase()}</h1>
        
            <a
            className="App-link"
            href="https://www.kingjamesbibleonline.org/.org"
            target="_blank"
            rel="noopener noreferrer"
          >
        <hr></hr>
          <h3><big>
          SEARCH FROM THE BIBLE    </big></h3></a>
            
           
            </div>
            

        );
    }

    
export default VerseAnalysis;