import React from "react";
import "./who.css";

const Who = () => {
  return (
    <section className="who-section">
      <div className="who-container">
        {/* Heading */}
        <div className="who-heading">
          <h2>
            We Build <span>Strong Foundations</span>
          </h2>
          <p>
            Our approach goes beyond traditional education. We focus on
            structured growth, modern thinking, and value-driven learning
            that shapes confident individuals for the future.
          </p>
        </div>

        {/* Plus Layout */}
        <div className="plus-wrapper">
          <span className="line vertical"></span>
          <span className="line horizontal"></span>

          <div className="quad quad-1">
            <h4>Quality First</h4>
            <p>
              We follow uncompromising quality standards in every step of our
              work. From planning to execution, each detail is carefully
              refined to ensure premium outcomes and lasting excellence.
            </p>
          </div>

          <div className="quad quad-2">
            <h4>Smart Planning</h4>
            <p>
              Our success is driven by strategic thinking and structured
              planning. We design efficient workflows that deliver
              consistent, scalable, and meaningful results.
            </p>
          </div>

          <div className="quad quad-3">
            <h4>Reliable Team</h4>
            <p>
              A dedicated and experienced team stands behind every achievement.
              Collaboration, transparency, and trust are at the core of
              everything we do.
            </p>
          </div>

          <div className="quad quad-4">
            <h4>Future Ready</h4>
            <p>
              We continuously evolve with changing needs and technologies.
              Innovation and adaptability allow us to prepare learners
              not just for today, but for tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
