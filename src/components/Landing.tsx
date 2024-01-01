import * as React from "react";
import "../styles/landing.css";
import "../styles/landing.scss";

const Landing: React.FC = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="grid">
          <svg
            className="grid-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="982"
            height="786"
            viewBox="0 0 982 786"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490ZM902.5 675V538H766V675H902.5ZM902.5 537V401H766V537H902.5ZM902.5 400V258H766V400H902.5ZM902.5 257V116L766 116V257H902.5ZM627.5 675H491V538H627.5V675ZM765 675H628.5V538H765V675ZM348.5 675H490V538H348.5V675ZM347.5 538V675H206V538H347.5ZM205 538V675H63.5V538H205ZM765 537V401H628.5V537H765ZM765 400V258H628.5V400H765ZM765 257V116H628.5V257H765ZM347.5 401V537H206V401H347.5ZM205 401V537H63.5V401H205ZM627.5 401V537H491V401H627.5ZM627.5 116L491 116V257H627.5V116ZM627.5 258H491V400H627.5V258ZM63.5 257V116L205 116V257H63.5ZM63.5 400V258H205V400H63.5ZM206 116V257H347.5V116L206 116ZM348.5 116V257H490V116H348.5ZM206 400V258H347.5V400H206ZM348.5 258V400H490V258H348.5Z"
              fill="url(#paint0_radial_1_8)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1_8"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)"
              >
                <stop stop-color="white" stop-opacity="0.2" />
                <stop offset="1" stop-color="#000" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <div className="blur">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#4DFFB5"
                d="M53,-52.6C63.9,-42.1,64.6,-21.1,60,-4.6C55.4,11.8,45.4,23.6,34.5,27.6C23.6,31.7,11.8,27.9,-5.3,33.2C-22.4,38.5,-44.7,52.8,-57.4,48.8C-70.1,44.7,-73.2,22.4,-66.9,6.3C-60.7,-9.9,-45.1,-19.7,-32.4,-30.3C-19.7,-40.8,-9.9,-52,5.6,-57.6C21.1,-63.2,42.1,-63.2,53,-52.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* <div className="title-container">
        <div className="title">
          <div className="card min-w-96 px-14 pl-5 pt-14">
            <div className="typing p-10 pt-0 pl-0">
              <div className="flex">$</div>
              <div className="flex">
                <div className="typing-demo">trapp</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
