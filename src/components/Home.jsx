import background from "../assets/home_img.png";
import LatestGames from "./LatestGames";

function Home() {
  return (
    <>
      <div
        className="flex items-center justify-end bg-center bg-cover"
        style={{
          backgroundImage: `url(${background})`,
          height: '400px'
        }}
      >
        <div className="max-w-lg pr-24 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">Hello World Discover <span className="text-yellow-500">Your Next</span> Favorite <span className="text-yellow-500">Game</span></h2>
          <p className="text-lg">
            Step into your personalized gaming hub! We&apos;ve handpicked games just for you based on your perferences. The more you explore and engage, the more refined and exciting your recommendation become. Ready to see what&apos;s waiting for you?
          </p>
        </div>
      </div>

      <div className="p-8 bg-[#19182b] ">
        <h1 className="text-4xl font-bold text-white ">Latest <span className="text-yellow-500">Release</span> </h1>
        <LatestGames />
      </div>
    </>
  );
}

export default Home;
