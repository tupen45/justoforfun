import logo from './logo.svg';
import './App.css';
import mt from './audio/chol.mp3'


function App() {
  const start = () => {
    const ta=document.getElementsByClassName('aut')[0];
    ta.play()
  }
  return (
    <><h1 style={{textAlign:'center',color:"black"}}>Do you love me?</h1>
    <section style={{display:'flex',marginTop:50,justifyContent:'space-around',justifyItems:'center'}}>
      <button style={{border:'1px solid black',fontSize:30,cursor:'pointer'}}> yes</button>
      <button onClick={()=>start()} style={{border:'1px solid black',fontSize:30,cursor:'pointer'}}> no</button>
      <audio className='aut'>
        <source src={mt}></source>
      </audio>
    </section>
    </>
  );
}

export default App;
