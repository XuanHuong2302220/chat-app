import Conversations from "./Conversations";
import InputSearch from "./InputSearch";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r p-4 border-slate-500 ">
      <InputSearch />
      <div className="divider px-2" />
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
