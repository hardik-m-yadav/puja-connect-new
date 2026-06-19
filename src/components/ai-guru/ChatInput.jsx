import { useState } from "react";

const ChatInput = ({ onSend, loading }) => {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim() || loading) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="flex gap-2 max-w-3xl mx-auto items-center">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask about puja, muhurat, astrology..."
        className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400/40 transition"
        onKeyDown={(e) => e.key === "Enter" && send()}
      />

      <button
        onClick={send}
        disabled={loading}
        className={`px-6 py-3 rounded-xl font-semibold transition 
          ${loading 
            ? "bg-gray-500 text-white cursor-not-allowed" 
            : "bg-amber-400 text-black hover:scale-105 active:scale-95"
          }`}
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
};

export default ChatInput;