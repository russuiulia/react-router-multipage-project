import { useEffect } from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { sendRequest, status, data: quote, error } = useHttp(getSingleQuote, true);
  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return (<div className='centered'>
      <LoadingSpinner />
    </div>
    );
  }
  if (error) {
    return (
      <p className='focused centered'>
        {error}
      </p>
    );
  }
  if (!quote.text) {
    return <p className='centered'>No quote found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail;