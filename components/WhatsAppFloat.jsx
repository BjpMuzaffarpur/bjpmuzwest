"use client";
import { useState } from "react";

const WhatsAppFloat = ({
  channelUrl = "https://whatsapp.com/channel/0029Vb6LmIo5EjxsIpky8G2f",
  channelName = "Join BJP Muzaffarpur west Channel",
  statusMessage = "Official Updates",
  greeting = "Join BJP Muzaffarpur west WhatsApp Channel for exclusive updates and announcements! 📢",
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenChannel = () => {
    window.open(channelUrl, "_blank");
  };

  return (
    <>
      {/* Popup Window */}
      {open && (
        <div style={styles.popup}>
          {/* Header */}
          <div style={styles.header}>
            {/* WhatsApp Icon (Avatar) */}
            <div style={styles.avatar}>
              <WhatsAppSVG size={28} color="#fff" />
            </div>
            <div>
              <div style={styles.name}>{channelName}</div>
              <div style={styles.status}>📢 {statusMessage}</div>
            </div>
            {/* Close Button */}
            <button onClick={() => setOpen(false)} style={styles.close}>✕</button>
          </div>

          {/* Chat Bubble */}
          <div style={styles.body}>
            <div style={styles.bubble}>{greeting}</div>
          </div>

          {/* Follow Channel Button */}
          <div style={styles.footer}>
            <button onClick={handleOpenChannel} style={styles.chatBtn}>
              <WhatsAppSVG size={18} color="#fff" />
              &nbsp; View Channel
            </button>
          </div>
        </div>
      )}

      {/* Floating Green Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={styles.fab}
        aria-label="WhatsApp Channel"
      >
        <WhatsAppSVG size={32} color="#fff" />
      </button>
    </>
  );
};

/* ── WhatsApp SVG Icon ── */
const WhatsAppSVG = ({ size = 24, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.168-1.617A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.713.974.99-3.617-.234-.374A9.818 9.818 0 1112 21.818z" />
  </svg>
);

/* ── Styles ── */
const styles = {
  fab: {
    position: "fixed",
    bottom: "60px",
    right: "10px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
    zIndex: 9999,
  },
  popup: {
    position: "fixed",
    bottom: "60px",
    right: "10px",
    width: "300px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    zIndex: 9999,
    fontFamily: "sans-serif",
  },
  header: {
    backgroundColor: "#25D366",
    padding: "14px 16px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  avatar: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  name: { color: "#fff", fontWeight: "bold", fontSize: "15px" },
  status: { color: "rgba(255,255,255,0.85)", fontSize: "12px" },
  close: {
    marginLeft: "auto",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },
  body: {
    backgroundColor: "#ECE5DD",
    padding: "20px 16px",
  },
  bubble: {
    backgroundColor: "#fff",
    borderRadius: "0 8px 8px 8px",
    padding: "10px 14px",
    fontSize: "14px",
    color: "#333",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    maxWidth: "85%",
  },
  footer: {
    backgroundColor: "#f0f0f0",
    padding: "12px 16px",
  },
  chatBtn: {
    width: "100%",
    backgroundColor: "#25D366",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default WhatsAppFloat;