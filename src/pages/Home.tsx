import { useNavigate } from 'react-router';

import { CoinIcon } from '@/components/icons/coin';
import { SolutionIcon } from '@/components/icons/solutionIcon';
import { PATH } from '@/constants';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[url('/bg.png')] bg-repeat px-32 pt-32 text-lg">
      <div className="relative">
        <div className="absolute -right-20 top-20 size-[720px] rounded-full bg-[radial-gradient(#A528FF_0%,_#A528FF30_40%)] blur-[320px] " />
        <div className="grid grid-cols-3 items-center">
          <div className="col-span-2 text-white">
            <h1 className="my-1 font-prototype text-[60px] leading-[95px]">
              The pioneer <span className="tracking-wider text-primary">NFT</span>
            </h1>
            <h5 className="my-1 font-prototype text-[60px] leading-[76px]">
              lending protocol in Aptos
            </h5>
            <p className="mt-2 text-[28px] font-light">
              Effortless NFT Access, Infinite Opportunities
            </p>
          </div>
          <div className="col-span-1">
            <img src="/bg/bubble.png" className="size-full " alt="banner" />
          </div>
        </div>
        <div className="mt-24 flex items-center justify-center gap-12 text-3xl text-white ">
          <div className="flex flex-col items-center justify-center border-r-2 border-white px-4  pr-12">
            <h3 className="text-base">Total Value Locked</h3>
            <div className="mt-2 flex items-center justify-center gap-3">
              <p className="font-prototype font-bold text-secondary">$1.12M</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-r-2 border-white px-4  pr-12">
            <h3 className="text-base">Total Volume</h3>
            <div className="mt-2 flex items-center justify-center gap-3">
              <p className="font-prototype text-3xl font-bold text-secondary">$7.94M</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-4">
            <h3 className="text-base">Total Liquidity</h3>
            <div className="mt-2 flex items-center justify-center gap-3">
              <p className="font-prototype text-3xl font-bold text-secondary">$417K</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 mt-40 flex items-start justify-center gap-24 rounded-xl bg-card px-16 py-8 text-center font-prototype text-2xl text-white">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="py-2">Reserve</p>
          <div className="flex items-center justify-center gap-2">
            <p className="py-2 text-primary">APT</p>
            <div className="size-8">
              <CoinIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="py-2">Deposit APR</p>
          <p className="py-2 text-secondary">5.82%</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="py-2 ">Borrow APR</p>
          <p className="py-2 text-secondary">9.46%</p>
        </div>
        <div className=" flex flex-col justify-center gap-2 text-black">
          <button
            onClick={() => {
              navigate(PATH.LENDING);
            }}
            className="rounded-full bg-secondary px-8 py-2"
          >
            Earn APR now
          </button>
          <button
            onClick={() => {
              navigate(PATH.LENDING);
            }}
            className="rounded-full bg-primary px-8 py-2"
          >
            Borrow APT now
          </button>
        </div>
      </div>

      <div className="mt-12  py-24 text-2xl text-white">
        <h3 className="text-center font-prototype text-[64px] font-bold text-white">
          Why Megaloandon?
        </h3>
        <p className="mt-4 py-4 text-center text-2xl">
          You <span className="text-secondary">need to APT</span> but
          <span className="text-primary"> don&#39;t want to sell</span> your blue-chip NFTs
        </p>

        <div className="mt-8 px-24 py-12">
          <h4 className="text-center font-prototype text-[48px] font-bold text-primary">
            Problems
          </h4>
          <div className="mt-12 grid grid-cols-3 gap-12">
            <div className="col-span-1">
              <p className="mb-2 text-center font-bold">Illiquidity</p>
              <p className="text-center text-lg">
                NFTs lack inherent liquidity, making it difficult to unlock their value.
              </p>
            </div>
            <div className="col-span-1">
              <p className="mb-2 text-center font-bold">Market Volatility</p>
              <p className="text-center text-lg">
                Rapid price fluctuations increase the risk for NFT holders.
              </p>
            </div>
            <div className="col-span-1">
              <p className="mb-2 text-center font-bold">Lending peer-to-peer</p>
              <p className="text-center text-lg">
                Borrowers and lenders need to negotiate complex terms, making the transaction
                processes lower and less convenient.
              </p>
            </div>
          </div>
        </div>

        <div className="relative px-24 py-12">
          <div className="absolute -right-32 top-40 size-[720px] rounded-full bg-[radial-gradient(#A528FF_0%,_#A528FF30_40%)] blur-[320px] " />
          <div className="flex items-start justify-center">
            <h4 className="mt-1 text-center text-[48px] font-bold text-secondary">Solution</h4>
            <div className="ml-[-15px] mt-[-20px] size-10">
              <SolutionIcon />
            </div>
          </div>

          <div className="mt-8 w-full">
            <img src="/bg/solutions.png" alt="solution-1" className="size-full" />
          </div>
        </div>

        <div className="px-24 py-12">
          <div className="flex items-center justify-center">
            <div className="w-1/3">
              <img src="/bg/unique-features.png" alt="unique-features" className="size-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 px-24 text-xl font-normal text-white">
            <div className="col-span-1 pt-20">
              <h5 className="font-prototype text-2xl font-bold text-secondary">
                Collateral Listing
              </h5>
              <p className="py-4">
                Megaloandon enables users to collateralize their NFTs for instant liquidity. NFT
                holders can get up to 60% of the NFT value without needing to wait for a sale
                Listing now
              </p>
              <button
                onClick={() => {
                  navigate(PATH.EXCHANGE.SELL);
                }}
                className="rounded-full bg-secondary px-6 py-2 font-semibold text-black"
              >
                Listing now
              </button>
            </div>
            <div className="col-span-1">
              <img src="/images/vault.png" alt="vault" className="size-96" />
            </div>
            <div className="col-span-1 flex justify-center">
              <img src="/images/hand-with-credit.png" alt="hand-with-credit" className="h-80" />
            </div>
            <div className="col-span-1 pt-16">
              <h5 className="font-prototype text-2xl font-bold text-primary">
                Buy With Down Payment
              </h5>
              <p className="py-4">
                Purchase blue-chip NFT by paying just 40% of NFT price integrated with multiple
                marketplaces Buy now
              </p>
              <button
                onClick={() => {
                  navigate(PATH.DOWNPAYMENT_BUY);
                }}
                className="rounded-full bg-primary px-6 py-2 font-semibold text-black"
              >
                Buy now
              </button>
            </div>
            <div className="col-span-1 pt-20">
              <h5 className="font-prototype text-2xl font-bold text-secondary">Flash Claim</h5>
              <p className="py-4">
                Megaloandon supports both targeted and random airdrops, with its distribution
                process entirely randomized for fairness integrated Aptos on-chain randomness
              </p>
            </div>
            <div className="col-span-1 ">
              <img
                src="/images/hand-with-money-bag.png"
                alt="hand-with-money-bag"
                className="size-80"
              />
            </div>
          </div>
        </div>

        <div className="px-24 py-12">
          <h4 className="text-center font-prototype text-3xl font-bold text-secondary">
            Price Oracle
          </h4>
          <p className="mt-2 px-32 text-center">
            Megaloandon uses data from various marketplaces to
          </p>
          <p className="px-32 text-center">
            determine accurate NFT values through proprietary algorithms
          </p>
          <div className="mt-16 flex w-full justify-center">
            <img
              src="/images/calculate_statistic.png"
              alt="calculate_statistic"
              className="w-1/3"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full px-32">
          <img src="/bg/vision.png" alt="vision" className="size-full" />
        </div>
      </div>

      <div className="mt-12 px-48 py-12">
        <div>
          <img src="/bg/roadmap.png" alt="roadmap" className="size-full" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
