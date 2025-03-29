import React, { useEffect, useState } from "react";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await fetch("http://localhost:4000/messages");
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("❌ Erreur chargement messages :", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const markAsRead = async (id, isRead) => {
    try {
      await fetch(`http://localhost:4000/messages/${id}/read`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isRead }),
      });
      fetchMessages();
    } catch (err) {
      console.error("❌ Erreur update read :", err);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Supprimer ce message ?")) return;

    try {
      await fetch(`http://localhost:4000/messages/${id}`, {
        method: "DELETE",
      });
      fetchMessages();
    } catch (err) {
      console.error("❌ Erreur suppression :", err);
    }
  };

  const total = messages.length;
  const unread = messages.filter((msg) => !msg.isRead).length;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold text-violet-400 mb-6">
        Messages reçus
      </h1>

      <p className="mb-8 text-sm text-gray-400">
        Total : <span className="text-white font-semibold">{total}</span> | Non
        lus : <span className="text-violet-300 font-semibold">{unread}</span>
      </p>

      {total === 0 ? (
        <p className="text-gray-400">Aucun message pour le moment.</p>
      ) : (
        <div className="w-full max-w-4xl space-y-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`bg-neutral-900 border ${
                msg.isRead ? "border-white/10" : "border-violet-400"
              } rounded-2xl p-6 shadow`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-lg font-semibold">{msg.name}</h2>
                  <p className="text-sm text-violet-300">{msg.email}</p>
                </div>
                <p className="text-sm text-gray-400">
                  {new Date(msg.createdAt).toLocaleString("fr-FR", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </p>
              </div>

              <p className="text-white mb-4">{msg.message}</p>

              <div className="flex gap-4">
                <button
                  onClick={() => markAsRead(msg._id, !msg.isRead)}
                  className={`px-4 py-1 text-sm rounded-full font-medium transition ${
                    msg.isRead
                      ? "bg-yellow-400 text-black hover:bg-yellow-500"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  {msg.isRead ? "Marquer comme non lu" : "Marquer comme lu"}
                </button>

                <button
                  onClick={() => deleteMessage(msg._id)}
                  className="px-4 py-1 text-sm rounded-full bg-red-500 hover:bg-red-600 text-white font-medium"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
