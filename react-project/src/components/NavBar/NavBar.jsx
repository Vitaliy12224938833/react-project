import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Box, MenuItem, Toolbar, Typography } from '@mui/material';

import { Search } from '../Search/Search';
import { NavBarButton } from './commponents/NuvBarButton';
import { GoHomeLink } from './commponents/GoHomeLink';
import { NavBarMenu } from './commponents/NavBarMenu';
import { CustomMenuIcon } from './commponents/CustomMenuIcon';
import { SignIn } from '../Authentication/SignIn';
import { SignUp } from '../Authentication/SignUp';
import { SignOut } from '../Authentication/SignOut';
import { UserDataContext } from '../../Context/Context';

export const NavBar = React.memo(() => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [movie, setMovie] = useState(null);
  const [tv, setTv] = useState(null);
  const [actors, setActors] = useState(null);
  const authUser = useContext(UserDataContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };

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

  const CustomMenuItem = React.memo(({ item, page }) => (
    <Link to={`/${page.route}/${item.route}`}>
      <MenuItem sx={{ color: 'black' }} onClick={handleCloseAllMenu}>
        <Typography color={'primary'} textAlign='center'>
          {item.alert}
        </Typography>
      </MenuItem>
    </Link>
  ));

  const CastomeMenu = React.memo(({ page }) => (
    <NavBarMenu
      style={{
        display: { xs: 'block' },
      }}
      closeMenu={handleCloseAllMenu}
      menu={page.state}
    >
      {page.categories.map((item, i) => (
        <CustomMenuItem key={i} item={item} page={page} />
      ))}
    </NavBarMenu>
  ));

  const NavBarBoxStyle = {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    maxWidth: '1601px',
    zIndex: '999999',
  };
  return (
    <Box sx={NavBarBoxStyle}>
      <AppBar position='static'>
        <Toolbar>
          {/* Movile Version */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <CustomMenuIcon
              openMenu={handleOpenNavMenu}
              closeMenu={handleCloseNavMenu}
              state={anchorElNav}
            />
            <NavBarMenu
              style={{
                display: { xs: 'block', md: 'none' },
              }}
              closeMenu={handleCloseAllMenu}
              menu={anchorElNav}
            >
              {pages.map(
                (page, i) =>
                  (page.route === 'home' && (
                    <MenuItem
                      key={i}
                      sx={{ color: 'black' }}
                      onClick={handleCloseAllMenu}
                    >
                      <GoHomeLink />
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
            </NavBarMenu>
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
                  <NavBarButton>
                    <GoHomeLink />
                  </NavBarButton>
                )) || (
                  <NavBarButton
                    onClick={(e) => handleOpenCategoryMenu(e, page.setState)}
                  >
                    <Typography sx={{ color: 'white' }} textAlign='center'>
                      {page.alert}
                    </Typography>
                  </NavBarButton>
                )}

                <CastomeMenu page={page} />
              </Box>
            ))}
          </Box>
          {/* Desctop Version */}
          <Search />
          {!authUser ? (
            <>
              <SignIn />
              <SignUp />
            </>
          ) : (
            <SignOut />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
});
