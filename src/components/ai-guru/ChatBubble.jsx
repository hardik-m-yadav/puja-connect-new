// import { motion } from "framer-motion";

// const ChatBubble = ({ role, text }) => {
//   const isAI = role === "ai";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 8 }}
//       animate={{ opacity: 1, y: 0 }}
//       className={`flex ${isAI ? "justify-start" : "justify-end"}`}
//     >
//       <div
//         className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed border shadow-lg backdrop-blur-xl
//         ${
//           isAI
//             ? "bg-white/5 border-white/10 text-white"
//             : "bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-medium"
//         }`}
//       >
//         {text}
//       </div>
//     </motion.div>
//   );
// };

// export default ChatBubble;

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ChatBubble = ({ role, text }) => {
  const isUser = role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      
      <div
        className={`
          max-w-[85%] md:max-w-[70%]
          px-4 py-3
          rounded-2xl
          text-sm leading-relaxed
          whitespace-pre-wrap
          ${
            isUser
              ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-br-sm"
              : "bg-white/5 border border-white/10 text-white rounded-bl-sm"
          }
        `}
      >
        {!isUser ? (
          <div className="prose prose-invert prose-sm max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {text}
            </ReactMarkdown>
          </div>
        ) : (
          text
        )}
      </div>
    </div>
  );
};

export default ChatBubble;