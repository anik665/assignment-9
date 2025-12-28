import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="bg-base-200 py-6">
      <Marquee
        speed={40}
        pauseOnHover={true}
        gradient={true}
        gradientColor={[240, 240, 240]}
      >
        <div className="flex items-center gap-6 px-4">
          <span className="badge badge-primary badge-lg">
            💻 Web Development
          </span>
          <span className="badge badge-secondary badge-lg">
            🎨 Graphic Design
          </span>
          <span className="badge badge-accent badge-lg">🗣️ Spoken English</span>
          <span className="badge badge-info badge-lg">📸 Photography</span>
          <span className="badge badge-success badge-lg">🎸 Music</span>

          {/* Button inside marquee */}
          <button className="btn btn-sm btn-warning ml-4">
            Explore All Skills
          </button>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
