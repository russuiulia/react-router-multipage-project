import { Route, Link, useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'
const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const quotes = [
    { id: 'q1', author: 'Me', text: 'I think therefore i am' },
    { id: 'q2', author: 'You', text: 'I drink therefore i see' }
  ];
  const quote = quotes.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
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