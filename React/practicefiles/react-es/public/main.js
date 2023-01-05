console.log('안녕 React + Babel Standalone 😃');

const headlineElement = React.createElement(
  'h1',
  { className: 'headline' },
  'h1 태그 입니다.',
)

const abbrebiationElement = React.createElement(
  'abbr',
  { key: 'abbr-io', title: 'User Interface' },
  '속의 abbreviation '
)

const catchphriseElement = React.createElement(
  'p',
  {
    className: 'catchprhise',
    children: [
      'p태그 ',
      abbrebiationElement,
      '입니다.'
    ]
  },
)

const strictMode = React.createElement(
  React.StrictMode,
  null,
  headlineElement,
  catchphriseElement
)

const container = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(container);
reactDomRoot.render(strictMode);
