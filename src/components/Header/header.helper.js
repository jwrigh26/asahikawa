export const drawerPosition = {
  CLOSE: 0,
  OPEN: 1,
  HIDDEN: 2,
};

export const layout = {
  CENTER: 1,
  LEADING: 0,
  TRAILING: 2,
};

export const isDrawerOpen = pos => (pos === drawerPosition.OPEN ? true : false);

export const isDrawerHidden = pos => (pos === drawerPosition.HIDDEN ? true : false);

export const mediaQueries = [
  {
    breakPoint: 425,
    name: 'mobile-large',
    query: window.matchMedia('(min-width: 425px)'),
  },
  {
    breakPoint: 768,
    name: 'tablet',
    query: window.matchMedia('(min-width: 768px)'),
  },
  {
    breakPoint: 1024,
    name: 'laptop',
    query: window.matchMedia('(min-width: 1024px)'),
  },
  {
    breakPoint: 424,
    name: 'mobile-med',
    query: window.matchMedia('(max-width: 424px)'),
  },
];

export const onBreakPointChange = setActiveBreakPoint => queries => () => {
  const activeQuery = queries.reduce((prev, curr) => {
    return curr.query.matches ? curr : prev && prev.query.matches ? prev : null;
  });
  const name = activeQuery ? activeQuery.name : 'default';
  const size = (activeQuery && activeQuery.breakPoint) || mediaQueries[3].breakPoint;
  setActiveBreakPoint({name, size});
};

export const createMediaQueries = handBreakPointChange => {
  const handleChange = handBreakPointChange(mediaQueries);
  const queries = mediaQueries.map(element => {
    const mq = {...element};
    mq.query.addListener(handleChange);
    return mq;
  });

  return {queries, didMount: handleChange, listener: handleChange};
};

export const removeMediQueries = (queries, listener) => {
  queries.forEach(element => {
    element.query.removeListener(listener);
  });
};
