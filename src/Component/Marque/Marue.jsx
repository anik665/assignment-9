import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="bg-base-200 py-6">
      <div className="flex items-center gap-4 px-6">
        {/* Moving Skills */}
        {/* Static Button (UI only) */}
        <button className="btn btn-sm btn-primary rounded-full px-6 pointer-events-none">
          Our Expertise
        </button>
        <div className="flex-1 overflow-hidden">
          <Marquee speed={40} pauseOnHover={true} gradient={false}>
            <div className="flex items-center gap-6">
              <span className="badge badge-primary badge-lg">
                💻 Web Development
              </span>
              <span className="badge badge-secondary badge-lg">
                🎨 Graphic Design
              </span>
              <span className="badge badge-accent badge-lg">
                🗣️ Spoken English
              </span>
              <span className="badge badge-info badge-lg">📸 Photography</span>
              <span className="badge badge-success badge-lg">🎸 Music</span>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
