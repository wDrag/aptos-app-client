import NiceModal, { useModal } from '@ebay/nice-modal-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useExchangeListOfferNFTMutation } from '@/hooks/mutations';

interface ListForOfferModalProps {
  onClose?: () => void;
  ownerAddress: string;
  collectionName: string;
  tokenName: string;
  tokenId: string;
  tokenUri: string;
}

export const ListForOfferModal = NiceModal.create((props: ListForOfferModalProps) => {
  const modal = useModal();

  const { tokenName, tokenId, tokenUri, collectionName, onClose } = props;

  const closeModal = () => {
    modal.hide();
    modal.remove();

    onClose?.();
  };

  const listOfferNFTMutation = useExchangeListOfferNFTMutation();

  const listNFT = () => {
    listOfferNFTMutation.mutate({
      collectionName,
      tokenId,
    });
  };

  return (
    <div className="flex w-[600px]">
      <Dialog open onOpenChange={closeModal}>
        <DialogContent className="flex min-w-[600px] flex-col gap-6">
          <DialogTitle className="text-center text-3xl font-semibold">
            <span className="text-[#A66AFE]">Full </span>
            <span className="text-white">Payment</span>
          </DialogTitle>
          <div className="flex w-full items-start justify-start gap-20 px-3 pb-3">
            <img src={tokenUri} alt="Token" className="size-56 flex-none rounded-md" />

            <div className="flex flex-none flex-col items-start justify-start gap-6">
              <span className="text-start text-3xl font-bold">{tokenName}</span>

              <div className="flex w-full flex-col items-center gap-2">
                <span className="text-2xl font-light">Full Payment</span>
              </div>

              <Button
                onClick={listNFT}
                className="w-full rounded-xl border-2 border-solid border-[#A66AFE] bg-[#A66AFE]/80 text-white/80 hover:bg-[#A66AFE]/60 focus:bg-[#A66AFE]/60"
              >
                Sell
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
});
