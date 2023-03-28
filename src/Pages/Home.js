import React from "react";
import Twitter from "../img/twitter.svg";
import Login from "./Login";
import Vector from "../img/Vector.svg";
import Man from "../img/rasim1.svg";
import Rasimbir from "../img/rasim2.svg";
import Elipse from "../img/Ellipse.svg";
import Coment from "../img/Coment.svg";
import Like from "../img/like.svg";
import Statik from "../img/staistik.svg";
import Retur from "../img/Return.svg";
import Send from "../img/Send.svg";
import Kabob from "../img/kabob.jpeg";
import { header } from "../Pages/main.css";

const Home = () => {
  return (
    <div className="hero bg-slate-200 flex m-10 mt-0 ">
      <div className="w-2/12   h-screen">
        <div className="my-6">
          <img className="mx-auto " src={Twitter} alt="" />
          <ul className="mx-28  my-11">
            <li className="mb-7">
              <p>Salom</p>
            </li>

            <li className="mb-7">
              <p>Salom</p>
            </li>

            <li className="mb-7">
              <p>Salom</p>
            </li>
            <li className="mb-7">
              <p>Salom</p>
            </li>

            <li className="mb-7">
              <p>Salom</p>
            </li>

            <li className="mb-7">
              <p>Salom</p>
            </li>

            <li className="mb-7">
              <p>Salom</p>
            </li>

            <li className="mb-7">
              <p>Salom</p>
            </li>
          </ul>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-7  mx-24">
            Tweet
          </button>

          <div className="flex ml-4">
            <img className="" src={Man} alt="" />

            <div>
              <p>Bobur</p>
              <p>@bobur_mavlonov</p>
            </div>
            <span className="text-x">...</span>
          </div>
        </div>
      </div>
      <span className="line"></span>

      <div className="hero2 w-6/12 bg-slate-200 ">
        <div className="flex my-6  ">
          <b>HOME</b>

          <img className="ml-auto" src={Vector} alt="" />
        </div>

        <hr />

        <div className="flex ">
          <div className="flex items-center ">
            <img className="ml-auto" src={Man} alt="" />

            <p className="text-2xl text-slate-400  mx-6">What’s happening</p>
          </div>
        </div>
        <div className=" flex img-left">
          <img className="ml-auto rasimbir" src={Rasimbir} alt="" />
          <img className="ml-auto rasimbir" src={Rasimbir} alt="" />
          <img className="ml-auto rasimbir" src={Rasimbir} alt="" />
          <img className="ml-auto rasimbir" src={Rasimbir} alt="" />
        </div>

        <button className="home-btn bg-blue-200 text-white font-bold py-2 px-4 rounded-full">
          Tweet
        </button>
        <hr />
        <div>
          <div className="flex items-center">
            <img className="ml-auto rasimbir" src={Elipse} alt="" />

            <div>
              <div className="flex mt-8">
                <b>Designsta</b>
                <p className="text-slate-400 ml-1"> @inner · 25m</p>
              </div>
              <p className="block mt-1">
                Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
                zerikmadinglarmi?
              </p>
            </div>
          </div>
          <div className="com-image flex ">
            <img className="com-img" src={Coment} alt="" />
            <img className="com-img" src={Retur} alt="" />
            <img className="com-img" src={Like} alt="" />
            <img className="com-img" src={Send} alt="" />
          </div>
          <hr />

          <div className="flex items-center">
            <img className="ml-auto rasimbir" src={Elipse} alt="" />

            <div>
              <div className="flex mt-8">
                <b>Designsta</b>
                <p className="text-slate-400 ml-1"> @inner · 25m</p>
              </div>
              <p className="block mt-1">
                Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
                zerikmadinglarmi?
              </p>
            </div>
          </div>
          <div className="com-image flex ">
            <img className="com-img" src={Coment} alt="" />
            <img className="com-img" src={Retur} alt="" />
            <img className="com-img" src={Like} alt="" />
            <img className="com-img" src={Send} alt="" />
          </div>

          <hr />
          <div></div>
        </div>

        <div>
          {" "}
          <div className="flex">
            <img className="ml-auto rasimbir" src={Elipse} alt="" />
            <div>
              <div>
                <span className="flex">
                  <b>CreativePhoto</b>
                  <p className="text-slate-400 ml-1"> @@cloutexhibition · 1h</p>
                </span>
                <p>obed....</p>
                <p>kechiringlar</p>
              </div>
            </div>
          </div>
          <div>
            <img className="hom-com-img ml-20 mt-4 " src={Kabob} alt="" />
            <div className="flex ml-3 mt-3">
              <img className="com-img" src={Coment} alt="" />
              <img className="com-img" src={Retur} alt="" />
              <img className="com-img" src={Like} alt="" />
              <img className="com-img" src={Send} alt="" />
            </div>
          </div>
        </div>
      </div>
      <span className="line"></span>
      <div className="  bg-slate-200 hero2 my-6 ">

        <form>
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full search p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search  Twitter..."
              required
            />
          </div>
        </form>

<div> 
    <div className="w-96 mt-6 h-96 bg-gray-300 rounded-xl  hero2">
          <div className="flex unversal-padding items-center">
            <b className="mt-12">Trends for you</b>
            <img className="ml-auto mt-11" src={Send} alt="" />
        </div>

        <div className="unversal-padding flex items-center mt-3">
            <div>
                <p className="text-gray-500">Trending in Germany</p>
                <b>Revolution</b>
                <p className="text-gray-500">50.4K Tweets</p>
            </div>

            <b className="text-lg ml-auto">...</b>
        </div>


        <div className="unversal-padding flex items-center">
        <div>
                <p className="text-gray-500">Trending in Germany</p>
                <b>Revolution</b>
                <p className="text-gray-500">50.4K Tweets</p>
            </div>

            <b className="text-lg ml-auto">...</b>
        </div>


        <div className="unversal-padding flex items-center">
        <div>
                <p className="text-gray-500">Trending in Germany</p>
                <b>Revolution</b>
                <p className="text-gray-500">50.4K Tweets</p>
            </div>

            <b className="text-lg ml-auto">...</b>
        </div>
        </div>


        <div className="m">
        <div className="w-96 mt-6 h-72 bg-gray-300 rounded-xl  hero2">
        <div>
                
        <b>You might like</b>

<div className="mar-top flex justify-between">
<img className="" src={Man} alt="" />

<div>
<b>Mushtariy</b>

<p>@Mushtar565266</p>
</div>
    
<button className="bg-black h-7 items-center text-white font-bold  px-4 rounded-full">
Follow
</button>
        </div>
            </div>

            <div>
                
        <b>You might like</b>

<div className="flex justify-between">
<img className="" src={Man} alt="" />

<div>
<b>Mushtariy</b>

<p>@Mushtar565266</p>
</div>
    
<button className="bg-black h-7 items-center text-white font-bold  px-4 rounded-full">
Follow
</button>
        </div>
            </div>
        </div>
        
        </div>
 </div>

       
  
      </div>
    </div>
  );
};

export default Home;
