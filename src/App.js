import './App.css';
import MediaControlCard from './Card';


var titulos = [
  {banda: "Montionless In White", titulo: "Meltdown",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link: "https://youtu.be/iMqza_DuivM"},
  {banda: "Montionless In White", titulo: "Sign Of Life",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link:"https://youtu.be/3oSM518tzFE"},
  {banda: "Montionless In White", titulo: "Werewolf",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link:"https://youtu.be/YUCwwgepi7k"},
  {banda: "Montionless In White", titulo: "Porcelain",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link:"https://youtu.be/CsPkxaAtHU8"},
  {banda: "Montionless In White", titulo: "Slaughterhouse",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link:"https://youtu.be/xgEOIMtMGYo"},
  {banda: "Montionless In White", titulo: "Masterpiece",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link:"https://youtu.be/6LzFUBzOfBE"},
  {banda: "Montionless In White", titulo: "Cause Of Death",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link:"https://youtu.be/UJ3DFDdpyy4"},
  {banda: "Montionless In White", titulo: "We Become The Night",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link:"https://youtu.be/GMs4Xnd3GpI"},
  {banda: "Montionless In White", titulo: "Burned At Both Ends II",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link:"https://youtu.be/slAxOIMz_Kw"},
  {banda: "Montionless In White", titulo: "B.F.B.T.G.: Corpse Nation",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link:"https://youtu.be/HCJZRzf01fY"},
  {banda: "Montionless In White", titulo: "Cyberhex",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link:"https://youtu.be/kppm_ebV1BY"},
  {banda: "Montionless In White", titulo: "Red, White & Boom",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link:"https://youtu.be/a1EREP8Vr9U"},
  {banda: "Montionless In White", titulo: "Scoring The End Of The world",img: "https://m.media-amazon.com/images/I/81opQJk8KnL._AC_SY355_.jpg", link:"https://youtu.be/DjCxgc8SO-I"},
];

function App() {
  return (
    <div>
      <h1>Scoring End of the World</h1>
      <h2>Artista: Montionless In White</h2>
      <h3>Lançamento: 10 de Junho de 2022</h3>
      {titulos.map((dado) => (<MediaControlCard banda = {dado.banda} titulo = {dado.titulo} img = {dado.img} link = {dado.link}/>))}
    </div>
  );
}

export default App;
