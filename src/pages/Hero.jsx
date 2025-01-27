import { FiSearch, FiBell, FiGrid, FiFolder, FiHeart, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

function Hero() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-20 navbar flex flex-col items-center py-8 space-y-8">
        <div className="text-primary text-2xl font-bold">N</div>
        <nav className="flex flex-col space-y-6">
          <button className="p-3 text-primary hover:bg-primary/10 rounded-xl">
            <FiGrid size={20} />
          </button>
          <button className="p-3 text-gray-400 hover:bg-primary/10 rounded-xl">
            <FiFolder size={20} />
          </button>
          <button className="p-3 text-gray-400 hover:bg-primary/10 rounded-xl">
            <FiHeart size={20} />
          </button>
          <button className="p-3 text-gray-400 hover:bg-primary/10 rounded-xl">
            <FiUser size={20} />
          </button>
          <button className="p-3 text-gray-400 hover:bg-primary/10 rounded-xl">
            <FiSettings size={20} />
          </button>
        </nav>
        <button className="mt-auto p-3 text-gray-400 hover:bg-primary/10 rounded-xl">
          <FiLogOut size={20} />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            <input
              type="text"
              placeholder="Search Here"
              className="navbar pl-10 pr-4 py-2 rounded-lg w-[300px] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white">
              <FiBell size={20} />
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-600">img</div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 mb-8"> 
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Discover, Collect, Sell and Create your NFT</h1>
            <p className="text-gray-300 mb-6">Digital marketplace for crypto collectibles and non fungible tokens</p>
            <div className="flex space-x-4">
              <button className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg font-medium">
                Explore
              </button>
              <button className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium">
                Create
              </button>
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Trending Bids</h2>
            <div className="flex space-x-2">
              <button className="bg-primary px-4 py-1 rounded-full text-sm">All</button>
              <button className="text-gray-400 hover:text-white px-4 py-1 rounded-full text-sm">Artwork</button>
              <button className="text-gray-400 hover:text-white px-4 py-1 rounded-full text-sm">Book</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Liquid Wave</h3>
                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <span>Auction time</span>
                    <span>Current Bid</span>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span>3h 1m 50s</span>
                    <div>
                      <div className="text-primary">0.05 ETH</div>
                      <div className="text-gray-400">0.15 ETH</div>
                    </div>
                  </div>
                  <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary py-2 rounded-lg">
                    Place a Bid
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Hero;