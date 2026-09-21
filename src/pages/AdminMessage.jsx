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
      await fetch(`http://localhost:4000/messages/${id}`, { method: "DELETE" });
      fetchMessages();
    } catch (err) {
      console.error("❌ Erreur suppression :", err);
    }
  };

  const total = messages.length;
  const unread = messages.filter((msg) => !msg.isRead).length;

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center px-6 py-14 text-ink">
      <h1 className="mb-2 font-display text-4xl font-extrabold tracking-tight">Messages reçus</h1>
      <div className="mb-6 h-1 w-16 rounded-full bg-accent" />

      <p className="mb-8 text-sm text-muted">
        Total : <span className="font-semibold text-ink">{total}</span> · Non lus :{" "}
        <span className="font-semibold text-accent-ink">{unread}</span>
      </p>

      {total === 0 ? (
        <p className="text-muted">Aucun message pour le moment.</p>
      ) : (
        <div className="w-full space-y-5">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`rounded-2xl border bg-surface p-6 shadow-[0_20px_40px_-30px_rgba(28,46,74,0.5)] ${
                msg.isRead ? "border-line" : "border-accent"
              }`}
            >
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{msg.name}</h2>
                  <p className="text-sm text-accent-ink">{msg.email}</p>
                </div>
                <p className="text-sm text-muted">
                  {new Date(msg.createdAt).toLocaleString("fr-FR", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </p>
              </div>

              <p className="mb-4 text-ink">{msg.message}</p>

              <div className="flex gap-3">
                <button
                  onClick={() => markAsRead(msg._id, !msg.isRead)}
                  className={`rounded-full px-4 py-1 text-sm font-medium transition ${
                    msg.isRead
                      ? "bg-amber-400 text-ink hover:bg-amber-500"
                      : "bg-emerald-500 text-white hover:bg-emerald-600"
                  }`}
                >
                  {msg.isRead ? "Marquer comme non lu" : "Marquer comme lu"}
                </button>
                <button
                  onClick={() => deleteMessage(msg._id)}
                  className="rounded-full bg-red-500 px-4 py-1 text-sm font-medium text-white transition hover:bg-red-600"
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
