import instagram_icon from "../assets/instagram_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import facebook_icon from "../assets/facebook_icon.png";
import youtube_icon from "../assets/youtube_icon.png";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center flex-col">
        <div className="max-lg:ml-[60px]">
          <div className="flex w-full">
            <img
              src={facebook_icon}
              alt="facebook"
              width={"30px"}
              height={"30px"}
              className="mr-6 cursor-pointer"
            />
            <img
              src={twitter_icon}
              alt="twitter"
              width={"30px"}
              height={"30px"}
              className="mr-6 cursor-pointer"
            />
            <img
              src={instagram_icon}
              alt="instagram"
              width={"30px"}
              height={"30px"}
              className="mr-6 cursor-pointer"
            />
            <img
              src={youtube_icon}
              alt="youtube"
              width={"30px"}
              height={"30px"}
              className="mr-6 cursor-pointer"
            />
          </div>
          <div className="flex justify-between pt-4 pb-5 flex-wrap">
            <ul className="text-gray-400 text-xs pr-[100px] ">
              <li className="pb-6 w-full">
                <span className="cursor-pointer hover:underline">Audio Description</span>
              </li>
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Investor Relations</span>
              </li>
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Privacy</span>
              </li>
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Contact Us</span>
              </li>
            </ul>
            <ul className="text-gray-400 text-xs pr-[100px] ">
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Help Center</span>
              </li>
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Jobs</span>
              </li>
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Legal Notices</span>
              </li>
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Do Not Sell or Share My Personal Information</span>
              </li>
            </ul>
            <ul className="text-gray-400 text-xs pr-[100px] ">
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Gift Cards</span>
              </li>
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Netflix Shop</span>
              </li>
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Cookie Preferences</span>
              </li>
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Ad Choices</span>
              </li>
            </ul>
            <ul className="text-gray-400 text-xs pr-[100px] ">
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Media Center</span>
              </li>
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Terms of Use</span>
              </li>
              <li className="pb-6">
                <span className="cursor-pointer hover:underline">Corporate Information</span>
              </li>
            </ul>
          </div>
          <div>
            <button className="text-gray-400 border border-gray-400 p-2 text-xs hover:border-gray-500 hover:text-gray-500">
              Service Code
            </button>
          </div>
          <p className="text-gray-400 text-sm py-5">
            © 2023 NotNetflix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
