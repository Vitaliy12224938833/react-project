import axios from 'axios';
import { useState } from 'react';
import { HorizontalList } from '../components/HorizontalList/HorizontalList';

export const Homepage = ({}) => {
  const [popularList, setPupularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [topList, setTop] = useState(null);
};
