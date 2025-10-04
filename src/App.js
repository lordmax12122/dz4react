import "./App.css";
import Stats from "./components/Stats/Stats";
import data from "./stats.json";
import Users from "./components/User/Users";
import user from "./user.json"
import FriendList from "./components/Friends/Friends";
import friends from "./friends.json"

function App() {
  return (
    <div className="App">
      <Stats title="Upload Stats" stats={data} />
       <Users title="Upload Stats" users={user} />
       <FriendList title="Upload Stats" friends={friends} />
    </div>
  );
}

export default App;