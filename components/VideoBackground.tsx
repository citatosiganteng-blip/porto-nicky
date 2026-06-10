"use client";

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-50 min-h-screen w-full overflow-hidden pointer-events-none" suppressHydrationWarning>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover opacity-[0.08] dark:opacity-[0.05] transition-opacity duration-1000"
        suppressHydrationWarning
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0 transition-colors duration-300"
        style={{
          background: 'radial-gradient(circle, transparent 30%, var(--bg-base) 95%)',
        }}
      />
    </div>
  );
}
