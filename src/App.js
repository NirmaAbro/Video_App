// import Products from "./Components/Products";  lect4 
// import Data from "./Data/Data"; lec 4
import VideosList from "./Components/VideosList";

function App() {
  // function handleclick(){
  //   console.log("clicked button");

  // }
  return (
    <>
    {/* lec 4 work virtual soft academy  */}
      {/* {Data.map((data) => (
        <Products
          key={data.id}
          id={data.id}
          title={data.title}
          channel={data.channel}
          views={data.views}
          time={data.time}
          verified={data.verified}
        >
          <button className="bg-blue-600" onClick={handleclick}>{data.title}</button>
        </Products>
      ))} */}
      {/* lec 4 work end here  virtual soft academy  */}
      <VideosList/>
    </>
  );
}

export default App;
