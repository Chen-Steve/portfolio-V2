interface Theme {
  palette: {
    primary: { main: string };
    background: { main: string };
    lightBg: { main: string };
    lightestBg: { main: string };
    description: { main: string };
    title: { main: string };
  };
}

function getGlobalStyles(theme: Theme): string {
  const gstyles = `
    :root {
        --primary: ${theme.palette.primary.main};
        --background: ${theme.palette.background.main};
        --light-bg: ${theme.palette.lightBg.main};
        --lightest-bg: ${theme.palette.lightestBg.main};
        --description: ${theme.palette.description.main};
        --title: ${theme.palette.title.main};
    }

    html,
    body {
        margin: 0;
        height: 100vh;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none !important;
        color: var(--primary) !important;
    }

    a:hover {
        color: var(--title) !important;
    }
        
    ul {
        list-style: none;
        margin-left: -40px;
    }
        
    b {
        font-size: 17px;
    }
        
    /* Stylizing the browser's default Scrollbar */
        
    /* Firefox */
    * {
        scrollbar-width: thin;
        scrollbar-color: var(--light-bg) var(--primary);
        scrollbar-track-color: var(--light-bg);
    }
        
    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 10px;
        background-color: var(--background);
    }
        
    *::-webkit-scrollbar-track {
        background: var(--light-bg);
        border-radius: 5px;
    }
        
    *::-webkit-scrollbar-thumb {
        background-color: var(--lightest-bg);
        border-radius: 14px;
        border: 1px dashed var(--primary);
    }
        
    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--primary);
    }
    `;
  return gstyles;
}

export default getGlobalStyles;