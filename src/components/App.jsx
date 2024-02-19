// COMPONENTS
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
// import FriendList from "./FriendList/FriendList";
import TransactionHistory from './TransactionHistory/TransactionHistory';

// DATA
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';
import FriendList from './Friends/FriendList/FriendList';

//
function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
