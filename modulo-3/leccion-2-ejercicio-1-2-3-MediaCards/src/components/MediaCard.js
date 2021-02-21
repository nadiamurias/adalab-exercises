import "../App.scss";

const MediaCard = (props) => {
  const header = (
    <header className="header">
      <img src={props.image} className="logo" alt="logo" />
      <div className="header-text">
        <h1 className="name">{props.username}</h1>
        <h2 className="date">{props.date}</h2>
      </div>
    </header>
  );
  const main = (
    <main className="main">
      <p className="main-text">{props.text}</p>
    </main>
  );
  const footer = (
    <footer className="footer">
      <a className="read-more">Leer más...</a>
      <p className="likes">
        {props.likes} <i className="fas fa-heart"></i>
      </p>
    </footer>
  );
  const card = (
    <div className="card">
      {header} {main} {footer}
    </div>
  );
  const appRoot = <div className="App">{card}</div>;
  return appRoot;
};

export default MediaCard;
