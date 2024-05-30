import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ChakraProvider>
            <Router>
                <App />
            </Router>
        </ChakraProvider>
    </Provider>
);
