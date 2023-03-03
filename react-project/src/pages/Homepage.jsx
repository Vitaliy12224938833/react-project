import axios from 'axios';
import { useState } from 'react';
import { HorizontalList } from '../components/HorizontalList/HorizontalList';
import { List } from '../components/List/List';
import { ListItem } from '../components/ListItem/ListItem';

export const Homepage = ({}) => {
  const [popularList, setPupularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [topList, setTop] = useState(null);
};
