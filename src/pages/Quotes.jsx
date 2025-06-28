import React from 'react';
import './Quotes.css';

function Quotes() {
  return (
    <div className="quotes-slider-section" id="quotes">
      <h2 className="quotes-heading">Thoughts I Live By</h2>
      <div className="quotes-slider">
        <div className="quotes-track">
          <div className="quote">
            "If you think coding is pressure, you will never be able to solve problems. Love what you do. For me, the computer world attracts me—the beautiful colored lines of code, each problem feels like a mystery waiting to be solved. Bugs are not enemies; they teach me. When I code, I forget the outside world. It’s just me, my code, and my logic."
          </div>
          <div className="quote">
            "Every expert was once a beginner. You don’t have to see the whole staircase, just take the first step."
          </div>
          <div className="quote">
            "Passion fuels persistence. The more you love what you do, the longer you'll stay, and the better you’ll become."
          </div>
        </div>
      </div>

      {/* Unique Floating Circles */}
      <div className="floating-circle small"></div>
      <div className="floating-circle medium"></div>
      <div className="floating-circle large"></div>
    </div>
  );
}

export default Quotes;



