import React from 'react';

const VideoShowcase: React.FC = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full">
        <div className="relative aspect-[21/9] bg-luxury-gray overflow-hidden group">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale-[0.1] contrast-[1.1] transition-transform duration-[15s] group-hover:scale-105"
          >
            <source 
              src="public/videos/Video.mp4" 
              type="video/mp4" 
            />
          </video>

          {/* Minimal Brand Overlay - No controls as requested */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 flex flex-col justify-end p-10 md:p-20">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-secondary opacity-50"></div>
                <span className="text-secondary text-[9px] font-black tracking-[0.5em] uppercase opacity-80">Cinematic Perspective</span>
              </div>
              <h3 className="text-white text-2xl md:text-4xl font-black tracking-tighter uppercase leading-none opacity-90">
                The Vibe Sequence
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
