
import './App.css';

const App = () => {

  const search = (q) => {
    console.log({q})
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>RIZQI MOVIE MANIA</h1>
          <input 
          placeholder='Cari Film Kesayangan...' 
          className='Movie-search'
          onChange={({target})=>search(target.value)}
          />
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">CONTOH PERTAMA</div>
            <img className="Movie-image"></img>
            <div className="Movie-date">12-12-1995</div>
            <div className="Movie-rate">9</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
