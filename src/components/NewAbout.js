import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Fade } from 'react-reveal'

class NewAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['student-athlete.', 'software developer.', 'teammate.', 'leader.'],
            name: '',
            tick: 0,
            fadeBool: true,
        };
    }
    render() {
        const { name, fadeBool } = this.state;
        return(
            <div>
                <Jumbotron style={{'margin-bottom': 0, 'min-height': '220px', 'padding-bottom': 0}}>
                    <h1>My name is Lucas Walbeck and I am a <Fade in={fadeBool}><div style={{display: 'inline'}}>{name}</div></Fade></h1>
                    <br></br>
                </Jumbotron>
                <Jumbotron id="USD">
                    <Fade big>
                        <h1>I'm currently in my senior year at the University of San Diego pursuing a B.S. in Computer Science and a minor in Finance.</h1>
                    </Fade>
                </Jumbotron>
                <Jumbotron>
                    <Fade bottom>
                        <h3>This is my personal website used for showcasing my personal projects and experiences. Feel free to contact me through my email, LinkedIn, or just explore my site!</h3>
                    </Fade>
                </Jumbotron>
            </div>
        );
    }

    nextName() {
        const { names, tick } = this.state;
        let i = tick;
        if(i >= names.length) {
            this.setState({tick: 0});
            i = 0;        
        }
        setTimeout(() => {this.setState({fadeBool: false})}, 1000);
        this.setState({name: names[i], fadeBool: true, tick: i+1});
    }

    componentDidMount() {
        this.nextName();
        setInterval(() => this.nextName(), 1500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default NewAbout;