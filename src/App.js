import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {productName:"Cocacola",price:65},
    {productName:"Pran-Up",price:50},
    {productName:"7-Up",price:55},
    {productName:"Fruto",price:60}
  ]
  return (
    <div className="App">
      <header className="App-header">
      <Product things={products[0]} ></Product>
      <Product things={products[1]} ></Product>
      <Product things={products[2]} ></Product>
      <Product things={products[3]} ></Product>
      <br></br><br></br><br></br>
      {
        products.map(product => <Product things={product}> </Product>)
      }

      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:"300px",
    color:"red",
    float:"left",
    margin:"10px"
  }
  // console.log(props);
  const {productName,price}=props.things;    //productName,price must be same as  datails array.

  return(
    <div style={productStyle}>
      <h3>Name : {productName}</h3>
      <h4>{price}$</h4>
      <button>Buy</button>
    </div>
  )
}

export default App;
