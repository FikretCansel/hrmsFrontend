import React from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EmployerSidebarItems() {
    const user = useSelector(state => state.user)
    
  return (
    <div>
      <List>
          <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Ana Sayfa"/>
          </ListItem>
          </Link>
          <Link to="/JobAdvertisementAdd">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="İlan Ver"/>
          </ListItem>
          </Link>
          <Link to={`/company/${user.user.id}`}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="İlanlarım"/>
          </ListItem>
          </Link>
      </List>
      <Divider />
    </div>
  );
}
