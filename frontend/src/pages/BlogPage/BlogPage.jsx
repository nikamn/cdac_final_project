import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo/png/Color logo - no background.png";
import { faBullseye, faHandsHoldingCircle, faLeaf } from "@fortawesome/free-solid-svg-icons";
import fugi from "../../assets/blogimages/fugi.jpg";
import bone from "../../assets/blogimages/bone.jpg";
import berry from "../../assets/blogimages/berry.jpg";

const BlogPage = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        {/* First blog post */}
        <Link to="/blog/post1">
          <div className="p-10 mt-5 mx-3 shadow-md rounded-xl flex">
            <div className="flex-1">
              <h1 className="text-3xl">
                <FontAwesomeIcon icon={faBullseye} className="pe-4" />
                Feng Shui Plants for Better Health
              </h1>
              <p className="text-base font-medium text-justify py-4">
              In feng shui, plants always represent health, healing, refreshing energy, and growth. 
              They represent the earth element and the wood element, bringing balance and cleansing energy to every space. 

              They are also one of the easiest ways to add life to your space!
              </p>
            </div>
            <div className="flex-1">

            <div className="p-3"> {/* Add padding here */}
        <img src={fugi} alt="Bone Meal" className="w-full rounded-md" style={{marginLeft: '65px' , width:'55%'}} />
      </div>           
       </div>
          </div>
        </Link>
        {/* Second blog post */}
        <Link to="/blog/post2">
          <div className="p-10 mt-5 mx-3 shadow-md rounded-xl flex">
            <div className="flex-1">
              <h2 className="text-3xl">
                <FontAwesomeIcon icon={faLeaf} className="pe-4" />
                How to Use Bone Meal in Potted Plants
              </h2>
              <p className="text-base font-medium text-justify py-4">
              Bone meal is a great fertilizer for plants because it is high in nitrogen, phosphorus, and potassium. It can help improve plants' growth in many ways, including providing them with the nutrients they need to thrive.
              </p>
            </div>
            <div className="flex-1">
            <div className="p-3"> {/* Add padding here */}
        <img src={bone} alt="Bone Meal" className="w-full rounded-md" style={{ marginLeft: '65px' , width:'55%'}} />
      </div>            </div>
          </div>
        </Link>

        {/* Third blog post */}
        <Link to="/blog/post3">
          <div className="p-10 mt-5 mx-3 shadow-md rounded-xl flex ">
            <div className="flex-1">
              <h2 className="text-3xl">
                <FontAwesomeIcon icon={faHandsHoldingCircle} className="pe-4" />
                How to Grow Blueberries in Containers
              </h2>
              <p className="text-base font-medium text-justify py-4">
              While not a dwarf variety, Bluecrop is a good choice for container gardening because it has a shallow root system and produces large, juicy berries. It is also self-fertile and produces a high yield of fruit.
              </p>
            </div>
            <div className="flex-1">

            <div className="p-3"> {/* Add padding here */}
        <img src={berry} alt="Bone Meal" className="w-full rounded-md" style={{marginTop:'0px', marginLeft: '65px' , width:'55%' }} />
      </div>            </div>
          </div>
        </Link>
      </div>

      <div className="w-full md:w-1/2 p-5 bg-[#023F3A]">
        <h2 className="text-3xl text-white text-center">
          Join Us on the Organic Journey
        </h2>
        <p className="text-white text-base font-medium text-justify py-6">
          Whether you're a seasoned gardener or just starting, RootToRoof
          Organics is here to guide you on your organic journey. Let's
          cultivate a healthier, more sustainable future together, from the root
          to the roof.
        </p>
        <p className="text-white text-base font-medium text-justify py-4">
          Thank you for choosing RootToRoofOrganics!
        </p>
        <img src={logo} alt="logo" className=" inline-block" />

      </div>
    </section>
  );
};

export default BlogPage;
