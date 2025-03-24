import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import HeaderBox from "@/components/ui/HeaderBox";
import RightSideBar from "@/components/ui/RightSideBar";

const Home = () => {
  const loggedIn = {
    firstName: "Simeon",
    lastName: "Fowotade",
    email: "simeonstat@gmail.com",
  };

  return (
    <section className=" m-0 home no-scrollbar">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your bank account and transactions with ease."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={11250.25}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSideBar user={loggedIn} transactions={[]} banks={[]} />
    </section>
  );
};

export default Home;
