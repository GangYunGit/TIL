<<<<<<< HEAD
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
=======
const container = document.getElementById('root');

const Headline = ({ className, children }) => {
  return (
    <h1 tabIndex="-1" className={`Headline ${className}`.trim()}>
      {children}
    </h1>
  )
}

// class component
class App extends React.Component {

  state = {
    messages: [
      {
        id: `message-1`,
        content: `하루를 마감하며~`,
      },
      {
        id: `message-2`,
        content: `오늘도 수고했수`,
      },
      {
        id: `message-3`,
        content: `하루를 마감하며~`,
      }
    ]
  };

  render() {
    // const { 특정한 데이터값 } = this.props 로 props를 받아오는 것도 가능
    const { message } = this.state;

    return (
      <ul>
        {this.state.messages.map(({ id, content }) => {
          return <li key={id}>{content}</li>;
        })}
      </ul>
    )
  }
}

App.defaultProps = {
  title: '안녕! React 😊',
};


ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 3bfd66b9aed40e5c70d60d237c7e32a5e9c89854
);
