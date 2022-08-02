import { Redirect } from 'react-router-dom';
import { Route, Routes, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NotFound from './pages/NotFound';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
function App() {
  // vid 17
  return (
    <div>
      <Layout>
        <Switch>
          {/* <Routes>          */}
          <Route path='/' exact  >
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact  >
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
          {/* </Routes> */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
