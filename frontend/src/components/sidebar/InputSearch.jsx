import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversation";
import { useState } from "react";
import toast from "react-hot-toast";

const InputSearch = () => {
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversation = conversations.find((conversation) =>
      conversation.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (search.length < 3)
      return toast.error("Search temp must be at least 3 characters long");
    if (!conversation) toast.error("User not found");
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 pt-3">
      <input
        type="text"
        placeholder="search..."
        className="input input-bordered w-full rounded-full "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn rounded-full hover:bg-sky-500 text-white border-none "
      >
        <IoSearchSharp className=" outline-none w-4 h-4" />
      </button>
    </form>
  );
};

export default InputSearch;
