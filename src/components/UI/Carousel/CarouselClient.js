import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import {   
    CardMedia    
} from '@material-ui/core'

import '../../../styles/SecondExample.scss';

function Project(props) {
    return (
        <CardMedia
        className="Project"
        image={props.item.Image}
    >
        </CardMedia>
    )
}

const items = [
    {
        Image: "/Images/Clients/Client1.jpeg"
    },
    {
        Image: "/Images/Clients/Client2.jpeg"
    },
    {
        Image: "/Images/Clients/Client3.jpeg"
    },
    {
        Image: "/Images/Clients/Client4.jpeg"
    },
    {
        Image: "/Images/Clients/Client5.jpeg"
    },
    {
        Image: "/Images/Clients/Client6.jpeg"
    }
]

export default class MyProjectsExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            timer: 500,
            animation: "slide",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: true
        }

        autoBind(this);
    }


    render() {
        return (
            <div style={{width:"100%"}}>
                <Carousel
                    className="SecondExample"
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}

                >
                    {
                        items.map((item, index) => {
                            return <Project item={item} key={index} />
                        })
                    }
                </Carousel>

            </div>
        )
    }
}