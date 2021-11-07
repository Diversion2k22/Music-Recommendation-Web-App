import classes from "./SideBar.module.css";
import Divider from '@mui/material/Divider';


const SideBar = () => {
  return (
  
    <div className={classes.sideBar}>
        {/* <h1 className={classes.appName}>μ-seak</h1> */}
      <span>Library</span>
      <div className={classes.content}>
    
        <ul>
          <li><a href="/library">Home</a></li>
          <Divider />
          {/* <li><a href="/playlist">Playlist</a></li>
          <Divider /> */}
          <li> <a href="/ArtistsSearch">Artist</a></li>
          <Divider   />
          <li><a href="/favourite">Favourite</a> </li>
          <Divider   />
        </ul>
        {/* <a href="/home">Home</a>
        <a href="/playlist">Playlist</a>
        <a href="/artists">Artist</a>
        <a href="/favourite">Favourite</a> */}
      </div>
    </div>
  );
};

export default SideBar;
