import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import { Menu } from '@mui/material';
import { Button } from '@mui/material';
import { MenuItem } from '@mui/material';

import { Search } from '../Search/Search';
import { StyledInputBase } from '../Search/Search';
import { SearchIconWrapper } from '../Search/Search';

export const NavBar = React.memo(() => {
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

  // const handleCloseCategoryMenu = (e, callback) => {
  //   callback(null);
  // };
  const handleOpenCategoryMenu = (event, callback) => {
    callback(event.currentTarget);
    if (callback !== setMovie) setMovie(null);
    if (callback !== setActors) setActors(null);
    if (callback !== setTv) setTv(null);
  };
  const handleCloseAllMenu = () => {
    setMovie(null);
    setActors(null);
    setTv(null);
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

  const CustomMenuItem = ({ item, page }) => (
    <Link to={`/${page.route}/${item.route}`}>
      <MenuItem sx={{ color: 'black' }} onClick={handleCloseAllMenu}>
        <Typography color={'primary'} textAlign='center'>
          {item.alert}
        </Typography>
      </MenuItem>
    </Link>
  );
  const CastomeMenu = ({ page }) => (
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
        handleCloseAllMenu,
      }}
      open={Boolean(page.state)}
      onClose={handleCloseAllMenu}
      sx={{
        display: { xs: 'block' },
      }}
    >
      {page.categories.map((item, i) => (
        <CustomMenuItem key={i} item={item} page={page} />
      ))}
    </Menu>
  );

  const NavBarBoxSx = {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    maxWidth: '1601px',
    zIndex: '999999',
  };
  return (
    <Box sx={NavBarBoxSx}>
      <AppBar position='static'>
        <Toolbar>
          {/* Movile Version */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={anchorElNav ? handleCloseNavMenu : handleOpenNavMenu}
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
                handleCloseAllMenu,
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseAllMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(
                (page, i) =>
                  (page.route === 'home' && (
                    <MenuItem
                      key={i}
                      sx={{ color: 'black' }}
                      onClick={handleCloseAllMenu}
                    >
                      <Link to={`/${page.route}`}>
                        <Typography textAlign='center'>{page.alert}</Typography>
                      </Link>
                    </MenuItem>
                  )) || (
                    <MenuItem
                      key={i}
                      sx={{ color: 'black' }}
                      onClick={(e) => handleOpenCategoryMenu(e, page.setState)}
                    >
                      <Typography textAlign='center'>{page.alert}</Typography>
                    </MenuItem>
                  )
              )}
            </Menu>
          </Box>
          {/* Movile Version */}
          {/* Desctop Version */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page, i) => (
              <Box key={i}>
                {(page.route === 'home' && (
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link to={`/${page.route}`}>
                      <Typography sx={{ color: 'white' }} textAlign='center'>
                        {page.alert}
                      </Typography>
                    </Link>
                  </Button>
                )) || (
                  <Button
                    onClick={(e) => handleOpenCategoryMenu(e, page.setState)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <Typography sx={{ color: 'white' }} textAlign='center'>
                      {page.alert}
                    </Typography>
                  </Button>
                )}

                <CastomeMenu page={page} />
              </Box>
            ))}
          </Box>
          {/* Desctop Version */}
          <form action={searchRow ? `/search/multi/${searchRow}` : null}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={searhcHandlerChange}
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
                value={searchRow}
              />
            </Search>
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
