import NftCard from "../components/hero/NftCard";
const Index = () => {
  return (
    <div className="min-h-screen bg-[#13151C] flex-col items-center justify-center p-6">
      <NftCard
        imageUrl="/lovable-uploads/3c375c6a-b464-4c20-864d-035ff8ba36ad.png"
        title="Liquid Wave"
        auctionTimeLeft="3h 1m 50s"
        currentBid="0.15 ETH"
        minBid="0.05 ETH"
      />
    </div>
  );
};
export default Index;