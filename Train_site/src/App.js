// import Content from './Content';
import Header from './Header';
function App() {
  const items=
    [{
      "id": 1,
      "seat":30,
      "Price":400,
      "name": "Pandian Express",
      "Time":"10:00 AM"
    },
    {
      "id": 2,
      "seat":20,
      "Price":150,
      "name": "Coimbatore Express",
      "Time":"5:00 AM"
    },
    {
      "id": 3,
      "seat":10,
      "Price":250,
      "name": "Punalur Express",
      "Time":"4:30 PM"
    },
    {
      "id": 4,
      "seat":5,
      "Price":720,
      "name": "Sathy Express",
      "Time":"6:00 PM"
    }
  ];
 return(
  <div className='App'>
  <div className='header'><Header/></div>
  <div className='content'>
    <div> <p>{items[0].id} .  {items[0].name}
        <br/>Available: {items[0].seat}<br/>
        Price: {items[0].Price}<br/>
        Departure: {items[0].Time}</p>
    </div>

  </div>
  </div>
 );
}

export default App;
