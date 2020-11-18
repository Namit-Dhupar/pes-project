import React from 'react';
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import {Link} from 'react-router-dom';
import '../../../styles/example.scss';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Zoom,
    Slide,
    Button
} from '@material-ui/core';

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;
    let items = [];
    const content = (
        <Grid item xs={12} lg={12 / totalItems} key="content">
            <CardContent className="Content">
            <Zoom in={true} style={{ transitionDelay: true ? "500ms" : "0ms" }}>
                <Typography className="Title">
                    {props.item.Name}
                </Typography>
            </Zoom>
            <Slide direction="up" in={true}>
                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>
            </Slide>
            <Link to="/products" style={{textDecoration:"none"}}>
            <Button variant="outlined" className="ViewButton">
                    View Now
                </Button>
            </Link>        
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={false} lg={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "PUMPS",
        Caption: "Check out our line of pumps",
        contentPosition: "left",
        Items: [
            {
                Name: "AST-P-1 Series",
                Image: "/Images/AST-P-1.jpg"
            },
            {
                Name: "Puma Pump",
                Image: "/Images/Puma-Pump.jpg"
            }
        ]
    },
    {
        Name: "SIGHT GLASSES",
        Caption: "Check out our line of Sight Glasses",
        contentPosition: "right",
        Items: [
            {
                Name: "Sight Glass I",
                Image: "/Images/Sight-Glass-1.jpg"
            },
            {
                Name: "Sight Glass II",
                Image: "/Images/Sight-Glass-2.jpg"
            }
        ]
    },
    {
        Name: "Boiler & Flanges",
        Caption: "View in Products Page.",
        contentPosition: "middle",
        Items: [
            {
                Name: "Flanges",
                Image: "/Images/clamps.png"
            },
            {
                Name: "Boilers",
                Image: "/Images/Boiler.png"
            }
        ]
    },
    {
        Name: "AND MORE",
        Caption: "View in Products Page.",
        contentPosition: "middle",
        Items: [
            {
                Name: "Refrigiration System",
                Image: "/Images/REFRIGERATION-SYSTEM.jpg"
            },
            {
                Name: "Homogenizer",
                Image: "/Images/HOMOGENIZER.jpg"
            }
        ]
    }
]

class BannerExample extends React.Component {
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
            <div style={{marginTop: "50px", color: "#494949"}}>
                <Carousel
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                >
                    {
                        items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition}/>
                        })
                    }
                </Carousel>
            </div>

        )
    }
}

export default BannerExample;
