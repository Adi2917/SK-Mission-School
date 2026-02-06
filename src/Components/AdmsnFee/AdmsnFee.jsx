import React from "react";
import "./AdmsnFee.css";
import { FaRupeeSign, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const AdmsnFee = () => {
  return (
    <section className="fee-wrapper">
      {/* LEFT : Fee Table */}
      <div className="fee-table-box">
        <h2 className="fee-title">Fee Structure</h2>

        <div className="table-scroll">
          <table className="fee-table">
            <thead>
              <tr>
                <th>Class Group</th>
                <th>Admission</th>
                <th>Miscellaneous</th>
                <th>Exam</th>
                <th>Monthly</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Nursery – UKG</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
              </tr>
              <tr>
                <td>Class 1 – 3</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
              </tr>
              <tr>
                <td>Class 4 – 6</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
              </tr>
              <tr>
                <td>Class 7 – 8</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
              </tr>
              <tr>
                <td>Class 9 – 10</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
                <td>₹ XXXX</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* RIGHT : Fee Info */}
      <div className="fee-info-box">
        <h3>Important Fee Details</h3>

        <ul>
          <li>
            <FaRupeeSign />
            <span>
              The school follows a <b>transparent and affordable fee structure</b>,
              ensuring parents have complete clarity regarding all charges
              associated with admission and academics.
            </span>
          </li>

          <li>
            <FaCalendarAlt />
            <span>
              <b>Flexible payment options</b> are available, including monthly
              and yearly plans, to reduce financial burden and ensure ease of
              payment for parents.
            </span>
          </li>

          <li>
            <FaCheckCircle />
            <span>
              There are <b>no hidden or unexpected charges</b> at any stage.
              All fee components are clearly communicated before admission.
            </span>
          </li>

          <li>
            <FaCheckCircle />
            <span>
              Any <b>revision in fees is strictly done after prior notice</b>,
              maintaining trust, transparency, and long-term planning for
              parents.
            </span>
          </li>

          <li>
            <FaCheckCircle />
            <span>
              <b>Special fee concessions are provided for siblings</b>,
              supporting families with more than one child studying in the
              institution.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AdmsnFee;
