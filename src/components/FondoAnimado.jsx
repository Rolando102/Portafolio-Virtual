import React from "react";

export default function FondoAnimado() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030014]">
      {/* Rejilla sutil */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Blobs difuminados animados */}
      <div className="absolute -top-32 -left-20 w-[28rem] h-[28rem] bg-purple-600/30 rounded-full blur-[110px] animate-blob" />
      <div className="absolute top-1/3 -right-32 w-[26rem] h-[26rem] bg-cyan-500/25 rounded-full blur-[110px] animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/4 w-[24rem] h-[24rem] bg-fuchsia-600/20 rounded-full blur-[110px] animate-blob" style={{ animationDelay: "4s" }} />
      {/* Viñeta para dar profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030014]" />
    </div>
  );
}
