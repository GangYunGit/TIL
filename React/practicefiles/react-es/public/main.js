console.log('안녕 React + Babel Standalone 😃');

// React component(재사용 가능)을 이용한 React Element 생성
const Headline = (props) => 
  React.createElement(
    'h1',
    { className: `headline ${props.className}` },
    props.children
  );

const Abbreviation = (props) =>
  React.createElement(
    'abbr',
    { key: 'abbr-io', title: 'User Interface' },
    '속의 abbreviation '
  );

const Catchphrise = () => 
  React.createElement(
    'p',
    {
      className: 'catchprhise'
    },
    'p태그 ',
    React.createElement(Abbreviation),
    '입니다.'
  );

const App = (props) => 
  React.createElement(
    React.Fragment,
    null,
    React.createElement(Headline, { className: 'point' },
      'h1 ',
      '태그입니다',
      ' 😊'
    ),
    React.createElement(Catchphrise)
  );

const container = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(container);
reactDomRoot.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App)
  )
);
