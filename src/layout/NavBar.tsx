import React from 'react';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { useRouter } from '../utils';


const Naves = [
  { path: '/', label: '今日待办', icon: <WbSunnyOutlinedIcon /> },
  { path: 'recently-todo', label: '最近待办', icon: <CalendarTodayOutlinedIcon /> },
  { path: '/overview', label: '日期概览', icon: <CalendarViewMonthOutlinedIcon /> },
  { path: '/todyBox', label: '待办箱', icon: <InboxOutlinedIcon /> },
  { path: '/search', label: '搜索', icon: <SearchOutlinedIcon /> },
];

function NavBar() {
  const router = useRouter();

  const jumpToPage = (path: string) => {
    // router.push(path)
  }

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      {Naves.map((nav, idx) => (
        <ListItemButton key={idx} onClick={() => jumpToPage(nav.path)}>
          <ListItemIcon>{nav.icon}</ListItemIcon>
          <ListItemText primary={nav.label}  />
        </ListItemButton>
      ))}
    </List>
  );
}

export default NavBar;
