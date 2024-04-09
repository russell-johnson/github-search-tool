export function setMode(mode?: string) {
    const localMode = localStorage.getItem('mode');
    var modeSelect;
    if(mode) {
        modeSelect = mode;
    }else if(localMode && localMode === 'light') {
        modeSelect = 'dark';
    } else {
        modeSelect = 'light';
    }

    localStorage.setItem('mode', modeSelect);
    console.log(document.documentElement, modeSelect)
    document.documentElement.className = modeSelect;
}

export function keepMode() {
  if (localStorage.getItem('mode')) {
    if (localStorage.getItem('mode') === 'dark') {
      setMode('dark');
    } else if (localStorage.getItem('mode') === 'light') {
      setMode('light')
    }
  } else {
    setMode('light')
  }
}

