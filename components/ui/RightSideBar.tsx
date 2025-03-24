import React from "react";

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="h-[120px] w-full bg-cyan-600">
          <div className="profile">
            <div className="profile-img">
              <span className="text-5xl font-bold text-blue-500">
                {user.firstName[0]}
              </span>
            </div>

            <div className="profile-details mt-20">
              <h1 className="profile-name">
                {user.firstName} {user.lastName}
              </h1>
              <p className="profile-email"> {user.email}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="banks">

      </section>
    </aside>
  );
};

export default RightSideBar;
