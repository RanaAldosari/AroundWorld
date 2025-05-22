import { Link } from "react-router";

function Nav() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <Link
        to="/homepg"
        className="w-full sm:w-[45%] lg:max-w-xs bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Kodaki_fuji_frm_shojinko_refurb.jpg/500px-Kodaki_fuji_frm_shojinko_refurb.jpg"
          alt="جبل فوجي"
          className="w-full h-32 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-md font-bold mb-2">جبل فوجي</h2>
        </div>
      </Link>

      <Link
        to="secpg"
        className="w-full sm:w-[45%] lg:max-w-xs bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/500px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
          alt="سور الصين العظيم"
          className="w-full h-32 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-md font-bold mb-2">سور الصين العظيم</h2>
        </div>
      </Link>

      <Link
        to="thirpg"
        className="w-full sm:w-[90%] lg:max-w-lg bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqP36tIrcTayaEjti7FodE0SEbAlvIbGvNGq4TTBjKjWES-Vwa_2Y4kamoJp32DLepp1jhK6IFT_sRXDjxa4ikfCLFMjt1MUJGDRqU3HZ8tCH_Fjct2ngSHpb9Gowpga2sH-MNyeQ=w270-h156-n-k-no"
          alt="شلالات نياجرا"
          className="w-full h-32 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-md font-bold mb-2">شلالات نياجرا</h2>
        </div>
      </Link>

      <Link
        to="fourpg"
        className="w-full sm:w-[45%] lg:max-w-xs bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhU72goMPtjlGovxAdtMOIlvaaI7euK9mTMXHYNQ9eCbeMXQ-D2-foYhcT21tm9qWhh35c68bjpe9LYWsfefC4sqRaXGbeAbwK6PtWxwONl5b83NvxFkEY5oAMd5u6Urh13iZipFgGc-gs/s1600/B1005555.jpg"
          alt="ماتشو بيتشو"
          className="w-full h-32 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-md font-bold mb-2">ماتشو بيتشو</h2>
        </div>
      </Link>

      <Link
        to="fivepg"
        className="w-full sm:w-[45%] lg:max-w-xs bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src="https://vid.alarabiya.net/images/2024/04/23/e508edc6-1a0e-45ca-a9c2-b9b17eb9326f/e508edc6-1a0e-45ca-a9c2-b9b17eb9326f.jpg?width=801&format=jpg"
          alt="شاطئ أملج"
          className="w-full h-32 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-md font-bold mb-2">شاطئ أملج</h2>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
