import userDate from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import Friendlist from "./FriendList/FriendList.jsx";
import Profile from "./Profile/Profile.jsx";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";

const App = () => {
  return (
    <>
      <Profile
        name={userDate.username}
        tag={userDate.tag}
        location={userDate.location}
        image={userDate.avatar}
        stats={userDate.stats}
      />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
