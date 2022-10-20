import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function App() {
  let classButton = "text-white hover:text-gray-300 cursor-pointer";
  let [popUp, setPopUp] = React.useState(false);
  return (
    <React.Fragment>
      <div className=" w-screen h-screen bg-red-500">
        <div className="h-[8%] w-full bg-[#161b22] lg:hidden flex items-center justify-between px-5 relative z-50">
          <button
            onClick={() => {
              setPopUp(!popUp);
            }}
            className="h-10 w-10 bg-white rounded-full"
          ></button>
          <span className="h-10 w-10 bg-white rounded-full"></span>
          <span className="h-10 w-10 bg-white rounded-full"></span>
        </div>
        <div className="h-[8%] w-full bg-[#161b22] hidden lg:grid grid-cols-5 items-center px-5">
          <div className=" flex w-full items-center ">
            <section className="h-10 w-10 bg-white rounded-full"></section>
            <input
              className="h-5 ml-3 w-[80%] rounded-md px-2 py-3 bg-[#010409]"
              placeholder="Search or Jump to"
            ></input>
          </div>
          <div className="col-span-3 h-full flex items-center space-x-5">
            <button className={classButton}>Pull Request</button>
            <button className={classButton}>Issue</button>
            <button className={classButton}>MarketPlace</button>
            <button className={classButton}>Explore</button>
          </div>
          <div className="flex items-center justify-end h-full w-full space-x-2">
            <span className="h-7 w-7 bg-white rounded-full"></span>
            <span className="h-7 w-7 bg-white rounded-full"></span>
            <span className="h-7 w-7 bg-white rounded-full"></span>
          </div>
        </div>
        <div className="h-[92%] w-full bg-slate-800 sm:block lg:flex items-center relative">
          {/* {popUp &&(
             <section className="bg-red-500 w-full h-[80%] top-0 absolute z-10 lg:hidden block"></section>  
          )} */}
          <section
            className={`${
              popUp
                ? "transform translate-y-0 transition duration-500 delay-500"
                : "transform -translate-y-full  transition duration-500 delay-500"
            }
            bg-red-500 w-full h-[80%] top-0 absolute z-10 lg:hidden block flex items-center`}
          >
            <h5 className="font-bold text-yellow-400 text-lg rotate-90 text-center">
              ROYAL STRAIGHT FLUSH
            </h5>
          </section>
          <div className="h-full sm:w-full lg:w-[20%] bg-[#0D1117] p-5">
            <section className="flex item-center space-x-2 border-b-2 pb-3">
              <div className="h-8 w-8 rounded-full bg-white"></div>
              <button className="text-white">Category ACE</button>
            </section>
            <section className="space-y-3 border-b-2 pb-3">
              <div className="flex items-center justify-between mt-10">
                <p className="text-white">Recent Categories</p>
                <button className="border px-2 bg-green-700 border-green-700 text-white rounded-md cursor-pointer w-30 h-15">
                  New
                </button>
              </div>
              <div>
                <input
                  className="px-2 w-full rounded-md bg-[#010409]"
                  placeholder="Find Categories"
                ></input>
              </div>
              <div>
                {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item) => {
                  return (
                    <div
                      key={item}
                      className="text-white flex items-center space-x-2"
                    >
                      <div className="h-3 w-3 bg-slate-400 rounded-full"></div>
                      <p>Royalflush/Categories</p>
                    </div>
                  );
                })}
                <button className="py-4 text-xs text-gray-500">
                  Show more
                </button>
              </div>
            </section>
            <section className="space-y-2 mt-5">
              <p className="text-white ">Recent Activity</p>
              <p className="text-gray-500 text-xs">
                When you take actions across Board, we’ll provide links to that
                activity here.
              </p>
            </section>
          </div>
          <div className="h-full sm:w-full lg:w-[80%] bg-[#010409] text-white">
            <section className="h-full w-4/6">
              <div className="p-5">
                <h1 className="text-4xl">
                  The home for all developers — including you.
                </h1>
                <p className="text-sm mt-3">
                  Welcome to your personal dashboard, where you can find an
                  introduction to how GitHub works, tools to help you build
                  software, and help merging your first lines of code.
                </p>
                <div className="mb-5 mt-10 flex space-x-3 items-center">
                  <div className="bg-slate-500 w-5 h-5 rotate-45"></div>
                  <h2>Start Writing Code</h2>
                </div>
                <section className="flex space-x-5">
                  <div className="w-full p-5 border rounded-md border-white">
                    <h1 className="text-lg">Start a new repository</h1>
                    <p className="text-sm mt-3">
                      A repository contains all of your project's files,
                      revision history, and collaborator discussion.
                    </p>
                    <p className="text-gray-500">Royalflush</p>
                  </div>
                  <div className="w-full p-5 border rounded-md border-white">
                    <h1 className="text-lg">
                      Introduce yourself with a profile README
                    </h1>
                    <p className="text-sm mt-3">
                      Share information about yourself by creating a profile
                      README, which appears at the top of your profile page.
                    </p>
                  </div>
                </section>
                <Tabs className={"space-x-3 space-y-3 mt-5"}>
                  <TabList className={"flex border-b border-b-[#30363d]"}>
                    <Tab
                      className={
                        "text-[#C9D1D9] px-[8px] py-[11px] text-[14px]"
                      }
                      selectedClassName={
                        "bg-transparent border-b-[2px] border-b-[#F78166] font-semibold"
                      }
                    >
                      <span className="hover:bg-[#21262D] hover:rounded transition-all ease-in-out px-[8px] py-[5px]">
                        Following
                      </span>
                    </Tab>

                    <Tab
                      className={
                        "text-[#C9D1D9] px-[8px] py-[11px] text-[14px]"
                      }
                      selectedClassName={
                        "bg-transparent border-b-[2px] border-b-[#F78166] font-semibold"
                      }
                    >
                      <span className="hover:bg-[#21262D] hover:rounded transition-all ease-in-out px-[8px] py-[5px]">
                        For you{" "}
                        <span className="px-[4px] py-[1px] border rounded-xl border-green-600 text-green-500 ml-[5px] text-[12px]">
                          Beta
                        </span>
                      </span>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className=" flex items-center space-x-2 mt-5">
                      <div className="bg-slate-500 w-8 h-8 rounded-full "></div>
                      <p className="font-bold">Four_Cards</p>
                      <p className="text-xs">started Following you</p>
                    </div>
                    <div className="w-full h-30 p-5 border rounded-md border-white mt-3">
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
                        <p>Four_Cards</p>
                      </div>
                      <div className=" ml-12 flex pl-30 text-xs text-gray-500 space-x-2">
                        <p>12 repositories</p>
                        <p>4 followers</p>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="w-full h-30 p-5 border rounded-md border-white mt-5">
                      <h3 className="text-md">Welcome to the new feed!</h3>
                      <p className="text-sm mt-3">
                        We’re updating the cards and ranking all the time, so
                        check back regularly. At first, you might need to follow
                        some people or star some repositories to get started 🌱.
                      </p>
                    </div>
                  </TabPanel>
                </Tabs>
                {/* <Tabs className={"space-x-3 space-y-3 mt-5 "}>
                  <TabList>
                    <Tab>Following</Tab>
                    <Tab>For you</Tab>
                  </TabList>

                  <TabPanel>
                    <div className=" flex items-center space-x-2 mt-5">
                      <div className="bg-slate-500 w-8 h-8 rounded-full "></div>
                      <p className="font-bold">Four_Cards</p>
                      <p className="text-xs">started Following you</p>
                    </div>
                    <div className="w-full h-30 p-5 border rounded-md border-white mt-3">
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
                        <p>Four_Cards</p>
                      </div>
                      <div className=" ml-12 flex pl-30 text-xs text-gray-500 space-x-2">
                        <p>12 repositories</p>
                        <p>4 followers</p>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="w-full h-30 p-5 border rounded-md border-white mt-5">
                      <h3 className="text-md">Welcome to the new feed!</h3>
                      <p className="text-sm mt-3">
                        We’re updating the cards and ranking all the time, so
                        check back regularly. At first, you might need to follow
                        some people or star some repositories to get started 🌱.
                      </p>
                    </div>
                  </TabPanel>
                </Tabs> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
