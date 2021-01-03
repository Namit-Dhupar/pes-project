import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Box} from '@material-ui/core';
import ProjectData from '../data/ProjectData.json';
import Gallery from 'react-grid-gallery';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
        {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const ProjectList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tab = ProjectData.map((project, index) => {
    return(
      <Tab key={index} label={project.ProjectType} {...a11yProps(index)} />
    )
  });

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

  const tabPanel = ProjectData.map((project, index) => {
    var images = project.ProjectImages.map((i) => {
                    i.customOverlay = (
                            <div style={captionStyle}>
                            <div>{i.caption}</div>
                        </div>);
                    return i;
                });
  return(
    <TabPanel key={index} value={value} index={index}>
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
  </TabPanel>
  )              
  })

  return (
    <div className={classes.root}>
    <Tabs
      indicatorColor="primary"
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      className={classes.tabs}
    >
    {tab}
    </Tabs>
    {tabPanel}
  </div>
  );
}

export default ProjectList;