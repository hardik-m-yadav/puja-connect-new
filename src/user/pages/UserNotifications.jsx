import UserLayout from "../layout/UserLayout";

const UserNotifications = () => {
  return (
    <UserLayout>
      <div className="space-y-6">

        <h1 className="text-2xl font-bold text-white">
          Notifications
        </h1>

        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">

          <p className="text-slate-400">
            No notifications yet
          </p>

        </div>

      </div>
    </UserLayout>
  );
};

export default UserNotifications;