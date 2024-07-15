import React from "react";

const MapEmbed = () => {
  return (
    <div className="map">
      <iframe
        title="4e-location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.0597554591245!2d46.64999341116085!3d24.759140249212145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efda35479c357%3A0xa3822c0c85351020!2sJwan%20IT%20%26%20Telecom%20Company!5e0!3m2!1sen!2ssa!4v1718148311554!5m2!1sen!2ssa"
        width={"100%"}
        height={280}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
