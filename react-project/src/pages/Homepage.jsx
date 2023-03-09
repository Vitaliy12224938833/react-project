import axios from 'axios';
import { useState } from 'react';
import { HorizontalList } from '../components/HorizontalList/HorizontalList';
import { CustomList } from '../components/List/List';

export const Homepage = ({}) => {
  const [popularList, setPupularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [topList, setTop] = useState(null);
};
