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
);
