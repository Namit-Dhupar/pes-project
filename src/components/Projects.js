import React, { Fragment } from 'react';
import Gallery from 'react-grid-gallery';


class Demo4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: this.props.images
        };
    }

    setCustomTags (i) {
        return (
            i.tags.map((t) => {
                return (<div
                        key={t.value}
                        style={customTagStyle}>
                        {t.title}
                        </div>);
            })
        );
    }

    render () {
        var images =
                this.state.images.map((i) => {
                    i.customOverlay = (
                            <div style={captionStyle}>
                            <div>{i.caption}</div>
                            {i.hasOwnProperty('tags') &&
                             this.setCustomTags(i)}
                        </div>);
                    return i;
                });


        return (
          <Fragment>
            <h1>Projects</h1>
            <p>Some of our projects includes</p>
                <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    border: "1px solid #ddd",
                    overflow: "auto"}}>
                <Gallery
            images={images}
            enableImageSelection={false}/>
                </div>
            </Fragment>
        );
    }
}

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "white",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "2px"
};

Demo4.defaultProps = {
    images: [
        {
            src: "/Images/Projects/Proj1.jpg",
            thumbnail: "/Images/Projects/Proj1.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            tags: [{value: "Plant", title: "Plant | Factory"}],
            caption: "Our Machinery at ABC"
        },
        {
            src: "/Images/Projects/Proj2.jpg",
            thumbnail: "/Images/Projects/Proj2.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            tags: [{value: "Plant", title: "Plant | Outdoors"}],
            caption: "Our Machinery at ABC"
        },
        {
            src: "/Images/Projects/Proj3.jpg",
            thumbnail: "/Images/Projects/Proj3.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 148,
            tags: [{value: "Plant", title: "Plant"}],
            caption: "Our Machinery at ABC"
        },
        {
            src: "/Images/Projects/Proj4.jpg",
            thumbnail: "/Images/Projects/Proj4.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            tags: [{value: "Plant", title: "Plant"}],
            caption: "Our Machinery at ABC"
        },
        {
            src: "/Images/Projects/Proj5.jpg",
            thumbnail: "/Images/Projects/Proj5.jpg",
            thumbnailWidth: 248,
            thumbnailHeight: 320,
            tags: [{value: "Plant", title: "Plant"}],
            caption: "Our Machinery at ABC"
        },
        {
            src: "/Images/Projects/Proj6.jpeg",
            thumbnail: "/Images/Projects/Proj6.jpeg",
            thumbnailWidth: 320,
            thumbnailHeight: 113,
            tags: [{value: "Erection Site", title: "Erection Site | Goa"}],
            caption: "Goa erection site"
        },
        {
            src: "/Images/Projects/Proj7.jpeg",
            thumbnail: "/Images/Projects/Proj7.jpeg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            tags: [{value: "Pasturizer", title: "Pasturizer | Mother Diary"}],
            caption: "Pasturised milk tanks for filling"
        },
        {
            src: "/Images/Projects/Proj8.jpeg",
            thumbnail: "/Images/Projects/Proj8.jpeg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            tags: [{value: "Erection Site", title: "Erection Site | Tahliwal"}],
            caption: "Tahliwal erection site"
        },
        {
          src: "/Images/Projects/Proj9.jpeg",
          thumbnail: "/Images/Projects/Proj9.jpeg",
          thumbnailWidth: 320,
          thumbnailHeight: 213,
          tags: [{value: "Erection Site", title: "Erection Site | Tahliwal"}],
          caption: "Tahliwal erection site"
      }
    ]
};

export default Demo4;