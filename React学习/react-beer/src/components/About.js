import React from 'react';
import Herder from './Header';

class About extends React.Component{
    constructor(){
        super();
    }

    render(){
        
        return (
            <div>
                <Herder siteName="Beer me" />
                关于我们
            </div>
        );
    }
    
}
// export default Main;

export default About;