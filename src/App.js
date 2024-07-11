import avatar from './avatar.png';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ButtonAppBar from './Appbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from 'react';
import { ReactTyped } from "react-typed";
import { Divider, Typography } from '@mui/material';
// import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function App() {

  const follow = localStorage.getItem('ThemeFollow') === 'false' ? false : true;
  const [isFollowSysTheme, setIsFollowSysTheme] = useState(follow);
  const [mode, setMode] = useState(checkIsDarkMode());
  const [layoutOpen, setLayoutOpen] = useState(false);
  const [progress, setProgress] = React.useState(14.2);

  // 夜间模式
  function checkIsDarkMode() {
    if (isFollowSysTheme) {
      try {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      } catch (err) {
        return false;
      }
    } else {
      return localStorage.getItem('NightMode') === 'true' ? true : false
    }
  }

  // mode对应Override部件样式
  const appTheme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
    },
    components: {
      MuiDialogContent: {
        styleOverrides: {
          root: {
            '&.Roadmap': {
              color: mode ? '#c9c2b7' : '#242525',
              background: mode ? '#242525' : '#eeeeee',
            },
            '&.About': {
              color: mode ? '#c9c2b7' : '#242525',
              background: mode ? '#242525' : '#eeeeee',
            },
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          root: {
            color: mode ? '#c9c2b7' : '#242525',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <header className="App-header">
          <CssBaseline />
          <ButtonAppBar />

          <img src={avatar} className="App-logo" alt="logo" />

          <Box sx={{ width: '80%' }}>
            <Typography variant="h2">
              说给sadouxi
            </Typography>

            <Typography variant="h5">
              <ReactTyped
                strings={[
                  "朋友侠？",
                  "家人侠？",
                  "P图高手？",
                  "没错，但是你的东西还在清关",
                  "我有我的生活",
                  "早就说了我周末要玩游戏了，耽误我发货了吗?",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </Typography>
          </Box>

          <Divider sx={{ marginTop: 1 }} />

          <Box sx={{ width: '80%' }}>
            <LinearProgressWithLabel value={progress} />
            <Typography variant="body1">
              {`还钱进度`}
            </Typography>
            <Typography variant="body1">
              {`至少仍需偿还: ${700000 * (100 - progress) * 0.01}￥`}
            </Typography>
          </Box>

          <Divider sx={{ marginTop: 1 }} />

          <Box sx={{ width: '80%' }}>
            <Typography variant="body2">
              欢迎来到说给sadouxi，点击下方按钮进入主页，我们将带你逐步了解，著名宝圈代购sadouxi，又称丽丽-风暴烈酒，为人不知的传奇老赖故事~
            </Typography>
          </Box>

        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
