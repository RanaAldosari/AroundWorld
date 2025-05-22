import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { useLocation } from "react-router";
import Nav from '../components/Nav.jsx'
import HomePage from '../pages/HomePage.jsx'
import SecondPage from '../pages/SecondPage.jsx'
import Home from "../pages/Home.jsx";
import ThirdPage from "../pages/ThirdPage.jsx";
import FourPage from "../pages/FourPage.jsx";
import FivePage from "../pages/FivePage.jsx";
// import Footer from "../components/Footer.jsx";
// import { Outlet } from 'react-router'

function Layout() {
  let location = useLocation();

  let background = {
    "/homepg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Kodaki_fuji_frm_shojinko_refurb.jpg/500px-Kodaki_fuji_frm_shojinko_refurb.jpg",
    "/secpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/500px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
    "/thirpg": "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqP36tIrcTayaEjti7FodE0SEbAlvIbGvNGq4TTBjKjWES-Vwa_2Y4kamoJp32DLepp1jhK6IFT_sRXDjxa4ikfCLFMjt1MUJGDRqU3HZ8tCH_Fjct2ngSHpb9Gowpga2sH-MNyeQ=w270-h156-n-k-no",
    "/fourpg": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhU72goMPtjlGovxAdtMOIlvaaI7euK9mTMXHYNQ9eCbeMXQ-D2-foYhcT21tm9qWhh35c68bjpe9LYWsfefC4sqRaXGbeAbwK6PtWxwONl5b83NvxFkEY5oAMd5u6Urh13iZipFgGc-gs/s1600/B1005555.jpg",
    "/fivepg": "https://vid.alarabiya.net/images/2024/04/23/e508edc6-1a0e-45ca-a9c2-b9b17eb9326f/e508edc6-1a0e-45ca-a9c2-b9b17eb9326f.jpg?width=801&format=jpg",
  };

  let backgroundUrl = background[location.pathname];

  return (
    <div className="relative z-10 flex  flex-col md:flex-row-reverse min-h-screen">
      <div className="absolute inset-0 bg-cover bg-center filter blur-xs brightness-86" style={{ backgroundImage: `url(${backgroundUrl})` }}
// bg-[url(${backgroundUrl})]
      />
{/* cards */}
     <div className="relative z-10 flex flex-col md:flex-row-reverse min-h-screen">
  <div className="md:w-1/2 w-full p-6 flex items-center">
    <Outlet />
  </div>
  <div className="md:w-1/2 w-full p-6">
    <Nav />
  </div>
  {/* footer */}
  <div></div>
</div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  
    children: [
        {
            path:"/",
            element:<Home/>
        },
      {
        path: "homepg",
        element: <HomePage />
      },
      {
        path: "secpg",
        element: <SecondPage />
      },
      {
        path:"thirpg",
        element:<ThirdPage/>
      },
      {
path:"fourpg",
element:<FourPage/>
      },
      {
        path:"fivepg",
        element:<FivePage/>
      }
    ]
  }
]);

function Routes() {
  return (
  <>
  <div>
     <RouterProvider router={router} />
  </div>
  </>
  )
}

export default Routes
