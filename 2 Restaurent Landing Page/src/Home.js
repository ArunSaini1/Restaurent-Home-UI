import React from "react";
import veg from "./images/corn-png-clip-art-image-5a3c47ad6f7aa5.8115672115138999494566.jpg";
import cart from "./images/cart.svg";
import bg from "./images/bg3.avif";
import star from "./images/star.svg";
import pillow from "./images/pillow.jpg";
import flower1 from "./images/flower1.jpg";
import flower from "./images/flower.webp";
import rec from "./images/Rec.svg";
import f1 from "./images/f1.jpg";
import f2 from "./images/f2.jpg";
import f3 from "./images/f3.jpg";
import f4 from "./images/f4.jpg";
import f5 from "./images/f5.jpg";
import f6 from "./images/f6.jpg";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaGooglePlusG } from "react-icons/fa";
import { MdOutlineWifi } from "react-icons/md";

export default function Home() {
  return (
    <div className="">
      <nav className="flex justify-between p-2">
        <h2 className="font-serif text-xl">Restaurant Landing Page </h2>
        <ul className="hidden gap-6 md:flex">
          <li>Landing</li>
          <li>Home</li>
          <li>Gallery</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
          <li>
            <img src={cart} className="ml-[20px] h-[20px] " />
          </li>
        </ul>
      </nav>

      <div
        className="relative   px-6 py-20  "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" text-center text-4xl text-white">
          Only Quality Food
        </div>
        <div className="mt-[20px] text-center text-white">
          Sed ut perspiciattis unde omnis iste natus error sit voluptatem
          accusantium
          <br />
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore
          <br />
          varitatis et quasi architectoeaque ipsa quae ab illo inventore
        </div>
        <div className="mt-[40px] text-center text-white">
          <button className="h-[40px] rounded border-2 border-transparent border-white p-2 outline-red-600">
            VIEW MENU
          </button>
          <button className="ml-[20px] h-[40px] rounded bg-amber-600 p-2">
            RESERVATION
          </button>
        </div>
        {/* <img src={arrow} className="ml-[630px] mt-[30px] h-[20px]" /> */}
      </div>

      <div className="flex flex-wrap justify-center gap-3 px-2 py-20">
        <div className="w-1/2 grow px-20 md:flex-1">
          <h2 className="mb-2 text-xl text-gray-600">OUR STORY</h2>
          <h3 className="mb-3 text-2xl">Welcome To Royal</h3>
          <div className="mt-[20px] text-xl text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              eaque, facilis rerum natus, dolores tempore cumque repellat
              perferendis sequi nemo molestiae the quick do maxime suscipit.
              Dolor excepturi placeat fugit. Facere, fugiat in. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eos, eaque, facilis
              rerum natus, dolores tempore cumque repellat perferendis sequi
              nemo molestiae the quick do maxime suscipit. Dolor excepturi
              placeat fugit. Facere, fugiat in. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eos, eaque, facilis rerum natus,
              dolores tempore cumque repellat perferendis sequi nemo molestiae
              the quick do maxime suscipit. Dolor excepturi placeat fugit.
              Facere, fugiat in. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eos, eaque, facilis rerum natus, dolores tempore
              cumque repellat perferendis sequi nemo molestiae the quick do
              maxime suscipit. Dolor excepturi placeat fugit. Facere, fugiat in.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              eaque, facilis rerum natus, dolores tempore cumque repellat
              perferendis sequi nemo molestiae the quick do maxime suscipit.
              Dolor excepturi placeat fugit. Facere, fugiat in. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eos, eaque, facilis
              rerum natus, dolores tempore cumque repellat perferendis sequi
              nemo molestiae the quick do maxime suscipit. Dolor excepturi
              placeat fugit. Facere, fugiat in.
            </p>
          </div>
        </div>
        <div className="w-1/2 grow flex-wrap text-center md:flex-1">
          <img src={veg} className="" alt="" />
        </div>
      </div>

      <div className="mt-[100px] bg-gray-100 p-20 text-center">
        <div className="p-8 text-2xl	font-semibold text-gray-600 ">
          ONLY THE BEST
        </div>
        <div className="font-sans text-6xl	">Fresh Ingredient, Tasty Meals</div>
        <div className="mt-[45px]	font-semibold text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eaque,
          facilis rerum natus,
          <br /> dolores tempore cumque repellat perferendis sequi nemo
          molestiae the quick do
          <br /> maxime suscipit. Dolor excepturi placeat fugit. Facere, fugiat
          in.
        </div>
        <div>
          <button className="mt-[50px]	w-[200px] rounded bg-amber-600 p-2 font-semibold text-white">
            VIEW ITEMS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 ">
        <div className="p-10 text-center">
          <h4 className="mb-3 text-2xl text-amber-600">$26.95</h4>

          <h3 className="mb-2 text-2xl">Grilled Fillet</h3>

          <p className="line-clamp-4 px-6 text-xl text-gray-600 subpixel-antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget nunc ultrices, egestas magna eu, consequat felis. Fusce lectus
            felis, aliquam nec bibendum eget, ullamcorper nec urna.
          </p>
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={f1} alt="" />
        </div>
        <div className="p-10 text-center">
          <h4 className="mb-3 text-2xl text-amber-600">$53.3</h4>

          <h3 className="mb-2 text-2xl">Chicken Breast</h3>

          <p className="line-clamp-4 px-6 text-xl text-gray-600 subpixel-antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget nunc ultrices, egestas magna eu, consequat felis. Fusce lectus
            felis, aliquam nec bibendum eget, ullamcorper nec urna.
          </p>
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={f2} alt="" />
        </div>
        <div className="p-10 text-center">
          <h4 className="mb-3 text-2xl text-amber-600">$40.05</h4>

          <h3 className="mb-2 text-2xl">King Crab</h3>

          <p className="line-clamp-4 px-6 text-xl text-gray-600 subpixel-antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget nunc ultrices, egestas magna eu, consequat felis. Fusce lectus
            felis, aliquam nec bibendum eget, ullamcorper nec urna.
          </p>
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={f3} alt="" />
        </div>
        <div className="p-10 text-center">
          <h4 className="mb-3 text-2xl text-amber-600">$40.05</h4>

          <h3 className="mb-2 text-2xl">Sea Trout</h3>

          <p className="line-clamp-4 px-6 text-xl text-gray-600 subpixel-antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget nunc ultrices, egestas magna eu, consequat felis. Fusce lectus
            felis, aliquam nec bibendum eget, ullamcorper nec urna.
          </p>
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={f4} alt="" />
        </div>
        <div className="p-10 text-center">
          <h4 className="mb-3 text-2xl text-amber-600">$22.03</h4>

          <h3 className="mb-2 text-2xl">Roasted Bakra</h3>

          <p className="line-clamp-4 px-6 text-xl text-gray-600 subpixel-antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget nunc ultrices, egestas magna eu, consequat felis. Fusce lectus
            felis, aliquam nec bibendum eget, ullamcorper nec urna.
          </p>
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={f5} alt="" />
        </div>
        <div className="p-10 text-center">
          <h4 className="mb-3 text-2xl text-amber-600">$22.03</h4>

          <h3 className="mb-2 text-2xl">Roasted Bakra</h3>

          <p className="line-clamp-4 px-6 text-xl text-gray-600 subpixel-antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget nunc ultrices, egestas magna eu, consequat felis. Fusce lectus
            felis, aliquam nec bibendum eget, ullamcorper nec urna.
          </p>
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={f6} alt="" />
        </div>
      </div>

      <div>
        <div className="mt-[50px] text-center text-xl text-gray-600 underline">
          <span>Testimonials</span>
        </div>
        <div className="mt-[40px] text-center text-2xl font-semibold">
          What People Are Saying
        </div>
        <div className="mt-[40px] flex flex-wrap justify-center gap-[40px]">
          <div className="">
            <img src={star} /> <br />
            <b className="text-gray-700">"A Great Find"</b>
            <br />
            <br />
            <span className=" text-gray-500 subpixel-antialiased">
              " Lorem ipsum dolor sit amet <br />
              dolores tempore cumque repellat
              <br />
              perferendis sequi nemo molestiae
              <br /> the quick do maxime."
            </span>
            <br />
            <br />
            <span className="text-grey-800">Divi</span>
          </div>

          <div className="">
            <img src={star} /> <br />
            <b className="text-gray-700">
              "Fabulous food
              <br />
              flawless service"
            </b>
            <br />
            <br />
            <span className=" text-gray-500 subpixel-antialiased">
              "Lorem ipsum dolor sit amet <br />
              dolores tempore cumque repellat
              <br />
              perferendis sequi nemo molestiae
              <br /> the quick do maxime."
            </span>
            <br />
            <br />
            <span className="text-grey-800">Bloom</span>
          </div>

          <div className="">
            <img src={star} /> <br />
            <b className="text-gray-700">
              "Another successful
              <br />
              experience"
            </b>
            <br />
            <br />
            <span className=" text-gray-500 subpixel-antialiased">
              "Lorem ipsum dolor sit amet <br />
              dolores tempore cumque repellat
              <br />
              perferendis sequi nemo molestiae
              <br /> the quick do maxime."
            </span>
            <br />
            <br />
            <span className="text-grey-800">Extra</span>
          </div>

          <div className="">
            <img src={star} /> <br />
            <b className="text-gray-700">"Speechless"</b>
            <br />
            <br />
            <span className=" text-gray-500 subpixel-antialiased">
              "Lorem ipsum dolor sit amet <br />
              dolores tempore cumque repellat
              <br />
              perferendis sequi nemo molestiae
              <br /> the quick do maxime."
            </span>
            <br />
            <br />
            <span className="text-grey-800">Monarch</span>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-[100px] bg-gray-100 p-20 text-center">
          <div className="p-8 text-2xl	font-semibold text-gray-600 ">
            DON'T MISS
          </div>
          <div className="font-sans text-6xl	">Our News And Events</div>
          <div className="mt-[45px]	font-semibold text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eaque,
            facilis rerum natus,
            <br /> dolores tempore cumque repellat perferendis sequi nemo
            molestiae the quick do
          </div>
          <div className="ml-[30px] mt-[30px] flex justify-center gap-[40px]">
            <div className="h-[300px] w-[300px]">
              <img className="rounded" src={flower1} />
              <br />
              <span className="-ml-[100px]	font-semibold">
                Nunc Volutpat Venenatis
              </span>
              <br />
              <span className="-ml-[200px] font-bold text-amber-500">
                CATEGORY
              </span>
              <br />
              <span className="text-gray-700">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                eaque, facilis rerum natus, dolores tempore cumque repellat
                perferendis sequi nemo molestiae brown fox jumps the quickfox
                the the quick do.
              </span>
              <span></span>
            </div>

            <div className="h-[300px] w-[300px]">
              <img className="rounded" src={pillow} />
              <br />
              <span className="-ml-[140px]	font-semibold">
                Vestibulum Nisi Fells
              </span>
              <br />
              <span className="-ml-[200px] font-bold text-amber-500">
                CATEGORY
              </span>
              <br />
              <span className="text-gray-700">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                eaque, facilis rerum natus, dolores tempore cumque repellat
                perferendis sequi nemo molestiae brown fox jumps the quickfox
                the the quick do.
              </span>
              <span></span>
            </div>

            <div className="h-[300px] w-[300px]">
              <img className="rounded" src={flower} />
              <br />
              <span className="-ml-[100px]	font-semibold">
                Proin Eu Augue Efficitur
              </span>
              <br />
              <span className="-ml-[200px] font-bold text-amber-500">
                CATEGORY
              </span>
              <br />
              <span className="text-gray-700">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                eaque, facilis rerum natus, dolores tempore cumque repellat
                perferendis sequi nemo molestiae brown fox jumps the quick do
                the quickfox the.
              </span>
              <span></span>
            </div>
          </div>
          <button className="mt-[300px]	w-[200px] rounded bg-amber-500 p-2 font-semibold text-white">
            RED MORE
          </button>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${bg})` }}>
        <div className="flex flex-wrap justify-center gap-20 p-20">
          <div className="w-[400px] bg-gray-700 p-10 text-center text-white">
            <span className="mt-[50px] text-xl ">Hours Of Operation</span>
            <br />
            <br />
            <span>Mon-Fri</span>
            <br />
            <span>10:00am - 1:00pm</span>
            <br />
            <span>4:00pm - 10:30pm</span>
            <img src={rec} className="ml-[50px] w-[200px]" />
            <span>SAT</span>
            <br />
            <span>3:00pm - 10:30pm</span>
            <img src={rec} className="ml-[50px] w-[200px]" />
            <span>SUN</span>
            <br />
            <span>We are closed</span>
            <br />
            <br />
            <button className="w-[200px] rounded bg-amber-500 p-2 font-semibold text-white">
              MAKE A RESERVATION{" "}
            </button>
          </div>
          <div></div>

          <div className="w-[400px] bg-gray-700 p-10 text-center text-white">
            <span>Drop Us a Line</span>
            <br />
            <span>Don't be shy.Let us know if you have any questions!</span>
            <br />
            <br />
            <button className="w-[200px] rounded bg-amber-500 p-2 font-semibold text-white">
              CONTACT US{" "}
            </button>
            <br />
            <br />
            <br />
            <span>Our Newsletter</span>
            <br />
            <span>Dialouge is an essential part of any script</span>
            <br />
            <br />
            <input
              type="text"
              placeholder="First Name"
              className="w-[300px] bg-black p-2"
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Last Name"
              className="w-[300px] bg-black p-2"
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Email"
              className="w-[300px] bg-black p-2"
            />
            <br />
            <br />
            <button className="w-[200px] w-[300px] rounded bg-amber-500 p-2 font-semibold text-white">
              CONTACT US{" "}
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-black p-2 text-white  ">
        <span className="ml-[80px] text-slate-400">
          Designed by Elegant Themes | Powered by WordPress{" "}
        </span>
        <div className="mr-[50px] flex gap-4">
          <FaFacebook />
          <IoLogoTwitter />
          <FaGooglePlusG />
          <MdOutlineWifi />
        </div>
      </div>
    </div>
  );
}
