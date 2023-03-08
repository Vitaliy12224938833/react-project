import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Search } from '../Search/Search';
import { StyledInputBase } from '../Search/Search';
import { SearchIconWrapper } from '../Search/Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [searchRow, setSearchRow] = useState('');
  const [movie, setMovie] = useState(null);
  const [tv, setTv] = useState(null);
  const [actors, setActors] = useState(null);

  const searhcHandlerChange = (e) => {
    setSearchRow(e.target.value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };

  const handleOpenCategoryMenu = (event, callback) => {
    callback(event.currentTarget);
  };

  const handleCloseCategoryMenu = (e, callback) => {
    callback(null);
  };

  const pages = [
    {
      route: 'home',
      alert: 'Home',
      categories: [],
    },
    {
      route: 'movie',
      alert: 'Movies',
      state: movie,
      setState: setMovie,
      categories: [
        { route: 'popular', alert: 'Popular' },
        { route: 'top_rated', alert: 'TOP' },
        { route: 'now_playing', alert: 'Now Playing' },
        { route: 'upcoming', alert: 'Soon' },
      ],
    },
    {
      route: 'tv',
      alert: 'Serials',
      state: tv,
      setState: setTv,
      categories: [
        { route: 'popular', alert: 'Popular' },
        { route: 'top_rated', alert: 'TOP' },
        { route: 'airing_today', alert: 'Airingtoday' },
        { route: 'on_the_air', alert: 'On the air' },
      ],
    },
    {
      route: 'person',
      alert: 'Actors',
      state: actors,
      setState: setActors,
      categories: [{ route: 'popular', alert: 'Popular' }],
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: 'fixed',
        width: '100%',
        maxWidth: '1600px',
        zIndex: '999',
      }}
    >
      <AppBar position='static'>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                handleCloseNavMenu,
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, idx) => (
                <MenuItem
                  sx={{ color: 'black' }}
                  key={idx}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign='center'>
                    {page.alert}
                    <Typography
                      color={'primary'}
                      textAlign='center'
                    ></Typography>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page, i) => (
              <Box key={i}>
                <Button
                  onClick={(e) => handleOpenCategoryMenu(e, page.setState)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {(page.route === 'home' && (
                    <Link to={`/${page.route}`}>
                      <Typography sx={{ color: 'white' }} textAlign='center'>
                        {page.alert}
                      </Typography>
                    </Link>
                  )) || (
                    <Typography sx={{ color: 'white' }} textAlign='center'>
                      {page.alert}
                    </Typography>
                  )}
                </Button>
                <Menu
                  id='menu-appbar'
                  anchorEl={page.state}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    handleCloseCategoryMenu,
                  }}
                  open={Boolean(page.state)}
                  onClose={(e) => handleCloseCategoryMenu(e, page.setState)}
                  sx={{
                    display: { xs: 'block' },
                  }}
                >
                  {page.categories.map((item, j) => (
                    <Link to={`/${page.route}/${item.route}`}>
                      <MenuItem
                        sx={{ color: 'black' }}
                        key={j}
                        onClick={(e) =>
                          handleCloseCategoryMenu(e, page.setState)
                        }
                      >
                        <Typography textAlign='center'>
                          <Typography color={'primary'} textAlign='center'>
                            {item.alert}
                          </Typography>
                        </Typography>
                      </MenuItem>{' '}
                    </Link>
                  ))}
                </Menu>
              </Box>
            ))}
          </Box>
          <form action={searchRow ? `/search/multi/${searchRow}` : null}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={searhcHandlerChange}
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
