import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './NavBar';
import HomeScreen from './HomeScreen';
import TeamScreen from './teamscreen';

function dapp() {
const [accounts, setAccounts] = useState([]);

return (
<ChakraProvider>
<Router>
<NavBar accounts={accounts} setAccounts={setAccounts} />
<Switch>
<Route path="/team">
<TeamScreen />
</Route>
<Route path="/">
<HomeScreen />
</Route>
</Switch>
</Router>
</ChakraProvider>
);
};

export default dapp;