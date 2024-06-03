import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const myId = authUser._id === message.senderId;
  const chat = myId ? "chat chat-end" : "chat chat-start";
  const profilePicture = myId
    ? authUser.profilePicture
    : selectedConversation?.profilePicture;
  const bgColor = myId ? "bg-blue-500" : "bg-gray-700";
  const altPicture = myId ? authUser.fullname : selectedConversation?.fullname;
  const time = extractTime(message.createdAt);
  return (
    <div className={`${chat}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt={altPicture} src={profilePicture} />
        </div>
      </div>
      <div className={`chat-bubble ${bgColor} text-white`}>
        {message.message}
      </div>
      <time className="text-xs text-white">{time}</time>
    </div>
  );
};

export default Message;
