const myName = 'João Gustavo de Paula';
const socials = [
  {
    key: 0,
    name: 'GitHub',
    url: 'https://github.com/devjoaogustavo'
  },
  {
    key: 1,
    name: 'Twitter',
    url: 'https://twitter.com/devjoaogustavo'
  },
  {
    key: 2,
    name: 'Email',
    url: 'mailto://contato@joaogustavo.com.br'
  },
  {
    key: 3,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/jo%C3%A3o-gustavo-de-paula-51487aa1/'
  }
];
const lis = socials.map(({ key, name, url }) => {
  const a = React.createElement('a', { href: url }, name);
  return React.createElement('li', { key }, a);
})
const img = React.createElement('img', { src: 'images/joao-profile.jpg', alt: 'Minha foto sorrindo em algum lugar da Toscana, na Itália' })
const span = React.createElement('span', { key: 'span', className: 'avatar' }, img);
const h1 = React.createElement('h1', { key: 'h1' }, myName);
const ul = React.createElement('ul', { key: 'ul', id: 'social' }, lis);
const headerComponents = [
  span,
  h1,
  ul
];
const header = React.createElement('header', { key: 'header' }, headerComponents);
const divs = [
  React.createElement('div', { key: 0 }),
  React.createElement('div', { key: 1 }),
  React.createElement('div', { key: 2 })
]
const mainComponents = React.createElement('div', { className: 'lds-ellipsis' }, divs);
const main = React.createElement('main', { key: 'main' }, mainComponents);
const footerComponents = [
  React.createElement('p', { key: 0 }, `${myName} © ${new Date().getFullYear()}`)
];
const footer = React.createElement('footer', { key: 0 }, footerComponents);
const components = [
  header,
  main,
  footer
];

const app = React.createElement('div', null, components);

ReactDOM.render(app, document.getElementById('root'))