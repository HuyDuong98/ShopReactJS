import React from 'react';
import routers from './routers'
import renderRouters from './core/routerConfig'
import AppProvider from './core/AppProvider';

function App() {

  return (
    <AppProvider>
      {renderRouters(routers)}
    </AppProvider>
  );

}

export default App;
