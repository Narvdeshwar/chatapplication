import React from "react";
import { CiChat1 } from "react-icons/ci";

const user = [
  {
    id: "0c202a10-4dc6-48ad-aea2-fdefb749e9fc",
    name: "Sophia Williams",
    image: "https://via.placeholder.com/150?text=User+Image",
  },
  {
    id: "511550c0-3375-4cae-ab1e-a84c7d7033fe",
    name: "Sophia Davis",
    image: "https://via.placeholder.com/150?text=User+Image",
  },
  {
    id: "4ef7bc4f-fb5f-4124-82cb-fb1c3b3211de",
    name: "Ava Williams",
    image: "https://via.placeholder.com/150?text=User+Image",
  },
  {
    id: "4ebc24c7-1640-4ea0-9ce3-dfd1d206230d",
    name: "Noah Jones",
    image: "https://via.placeholder.com/150?text=User+Image",
  },
  {
    id: "297a9f1c-466e-47a7-80b5-be92f7829e67",
    name: "Noah Johnson",
    image: "https://via.placeholder.com/150?text=User+Image",
  },
  {
    id: "2d506dcf-7ce5-4901-a16c-e9a9e658b3c6",
    name: "Olivia Jones",
    image: "https://via.placeholder.com/150?text=User+Image",
  },
  {
    id: "fabe384d-78ff-48f5-abda-f0730b0b3876",
    name: "Liam Williams",
    image: "https://via.placeholder.com/150?text=User+Image",
  },
  {
    id: "81ba6a8a-2c13-462f-9df5-201a5699803b",
    name: "James Smith",
    image: "https://via.placeholder.com/150?text=User+Image",
  },
  {
    id: "91d6c84f-fb86-4d1d-a97e-c1e15783c79a",
    name: "John Martinez",
    image: "https://via.placeholder.com/150?text=User+Image",
  },
  {
    id: "5e256752-5436-433f-a814-9806222311d9",
    name: "James Rodriguez",
    image: "https://via.placeholder.com/150?text=User+Image",
  },
];

function Left() {
  return (
    <div className="w-[25%] h-screen bg-slate-100 shadow-md border-r-4 overflow-hidden">
      {/* Header */}
      <div className="flex justify-center items-center shadow-md bg-emerald-400 text-white font-[700] sticky top-0 z-10">
        <CiChat1 className="w-6 h-6" />
        <p className="text-lg p-2">! Let's chat with friends !</p>
        <CiChat1 className="w-6 h-6" />
      </div>

      {/* Search box */}
      <div className="p-2 border-b-[1px] shadow-md sticky top-[48px] bg-slate-100 z-10">
        <input
          type="text"
          className="outline-none focus:shadow-lg focus:border-emerald-500 focus:border-2 w-[100%] p-1 shadow-lg px-4 placeholder:text-center focus:rounded-full rounded-full border-2"
          placeholder="Search"
        />
      </div>

      {/* User list */}
      <div className="flex flex-col overflow-y-auto h-full">
        {user.map((item) => ( 
          <div
            key={item.id}
            className="flex items-center p-2 border-b-[1px]"
          >
            <img
              src={item.image}
              alt=""
              className="rounded-full w-[50px]"
            />
            <p className="text-lg ms-5">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Left;
