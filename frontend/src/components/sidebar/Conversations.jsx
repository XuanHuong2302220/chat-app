import useGetConversations from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="p-2 flex flex-col overflow-auto">
      {conversations.length > 0 &&
        conversations.map((conversation, idx) => {
          return (
            <Conversation
              key={conversation._id || idx}
              conversation={conversation}
              emoji={getRandomEmoji()}
              lastIdx={idx === conversations.length - 1}
            />
          );
        })}
      {loading ? <div className="loading loading-spinner" /> : null}
    </div>
  );
};

export default Conversations;
