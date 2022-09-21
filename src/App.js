import logo from './logo.svg';
import './App.css';
import './Singer.css';

const number = 5555;
const singer = {name: 'Hridoy Khan', job: 'singer'};
const singer2 = {name: 'Atif Aslam', job: 'singer'};
const singer3 = {name: 'James', job: 'singer'};

const singerStyle = {
  color: 'red',
  backgroundColor: 'white',
}

function App() {
  const singers = [
    {name:'Sakib Al Hasan', job: 'Cricket'} ,
    {name:'Shafiul', job: 'Cricket'} ,
    {name:'Kuber', job: 'Hero'},
    {name:'Salman', job: 'Hero'},
    {name:'Sakib',job: 'Hero'},
    {name:'Araf', job: 'Developer'},
  ]
  
  return (
  

    <div className="App">
      
      {
        singers.map(singer => <Person name={singer.name} job={singer.job}></Person>)
      }

        {/* <div className="music">
          <p>Total:{2222 + number}</p>

          <p className='yellow'>Name: {singer.name}, Job: {singer.job}</p>
          <p style={singerStyle}>Name: {singer2.name}, Job: {singer2.job}</p>
          <p style={{  color: 'yellow',backgroundColor: 'green',}}>Name: {singer3.name}, Job: {singer3.job}</p>

          <Person name={arr[0]} job="All Rounder"></Person> 
          <p>hi</p>
          <Person name="Shafiul" job="Paser"></Person> 
          <Person name={arr[2]} job="Paser"></Person> 
          
        </div> 
         */}
      
    </div>
  );
}

function Person(props){
  console.log(props);
  return (
    <div className='person'>
    <h1>{props.name}</h1>
    <p>{props.job}</p>
    </div>
  );
}



export default App;
