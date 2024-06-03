import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();

  const isOnlined = onlineUsers.includes(conversation._id);

  return (
    <div>
      <div
        className={`flex items-center gap-2 hover:bg-sky-500 cursor-pointer rounded-lg p-2 py-1
          ${isSelected ? "bg-sky-700" : null}
      `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnlined ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation?.profilePicture} />
          </div>
        </div>
        <div className="flex flex-1 justify-between items-center">
          <p className="text-gray-100 font-semibold text-sm">
            {conversation?.fullname}
          </p>
          <span className="text-xl">{emoji}</span>
        </div>
      </div>

      {!lastIdx && <div className="divider m-0 px-4 h-0.5 " />}
    </div>
  );
};

export default Conversation;
