import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const retryLink = new RetryLink({
  delay: {
    initial: 2000,
    max: 2000,
    jitter: false
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([retryLink, httpLink])
});

ReactDOM.render(
  <ChakraProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
