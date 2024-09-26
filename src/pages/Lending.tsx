import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  useLendingPoolBorrowMutation,
  useLendingPoolCreateReserveMutation,
  useLendingPoolDepositCollateralMutation,
  useLendingPoolDepositMutation,
  useLendingPoolRepayMutation,
  useLendingPoolWithdrawMutation,
} from '@/hooks/mutations';

const LendingPage = () => {
  const [amountBorrow, setAmountBorrow] = useState(0);
  const borrowMutation = useLendingPoolBorrowMutation();

  const createReserveMutation = useLendingPoolCreateReserveMutation();

  const [collectionCollateralName, setCollectionCollateralName] = useState('');
  const [tokenId, setTokenId] = useState(0);
  const depositCollateralMutation = useLendingPoolDepositCollateralMutation();

  const [amountDeposit, setAmountDeposit] = useState(0);
  const depositMutation = useLendingPoolDepositMutation();

  const [amountRepay, setAmountRepay] = useState(0);
  const repayMutation = useLendingPoolRepayMutation();

  const [amountWithdraw, setAmountWithdraw] = useState(0);
  const withdrawMutation = useLendingPoolWithdrawMutation();

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <img src="/bg.png" alt="Background" className="absolute -z-10 h-screen w-screen" />
      <div className="container mt-20 flex w-full flex-col overflow-y-scroll p-10">
        <div className="flex w-48 flex-col gap-10">
          <div className="flex flex-col gap-4 ">
            <input
              type="number"
              aria-label="Amount to borrow"
              value={amountBorrow}
              placeholder="Amount to borrow"
              onChange={(e) => setAmountBorrow(parseFloat(e.target.value))}
              className="text-black"
            />
            <Button onClick={() => borrowMutation.mutate({ amount: amountBorrow })}>Borrow</Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              onClick={() => {
                createReserveMutation.mutate();
              }}
            >
              Create Reserve
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              aria-label="Collection name"
              value={collectionCollateralName}
              placeholder="Collection name"
              onChange={(e) => {
                setCollectionCollateralName(e.target.value);
              }}
              className="text-black"
            />
            <input
              type="number"
              value={tokenId}
              placeholder="tokenId"
              aria-label="tokenId"
              onChange={(e) => setTokenId(parseFloat(e.target.value))}
              className="text-black"
            />
            <Button
              onClick={() =>
                depositCollateralMutation.mutate({
                  collectionName: collectionCollateralName,
                  tokenId,
                })
              }
            >
              Deposit Collateral
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="number"
              value={amountDeposit}
              placeholder="Amount"
              onChange={(e) => setAmountDeposit(parseFloat(e.target.value))}
              className="text-black"
            />
            <Button onClick={() => depositMutation.mutate({ amount: amountDeposit })}>
              Deposit
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="number"
              value={amountRepay}
              placeholder="Amount"
              onChange={(e) => setAmountRepay(parseFloat(e.target.value))}
              className="text-black"
            />
            <Button onClick={() => repayMutation.mutate({ amount: amountRepay })}>Repay</Button>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="number"
              value={amountWithdraw}
              placeholder="Amount"
              onChange={(e) => setAmountWithdraw(parseFloat(e.target.value))}
              className="text-black"
            />
            <Button onClick={() => withdrawMutation.mutate({ amount: amountWithdraw })}>
              Withdraw
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendingPage;
