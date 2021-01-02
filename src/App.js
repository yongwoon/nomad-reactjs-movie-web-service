
// Food({fav}) -> es6
function Food({fav}) {

  console.log(fav);
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <Food fav="kimchi" />
    </div>
  );
}

export default App;
