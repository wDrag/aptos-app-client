import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { useState } from 'react';

import { APTInput } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useExchangeAddOfferMutation } from '@/hooks/mutations';
import { useGetExchangeAllOfferQuery, useGetOracleFloorPriceQuery } from '@/hooks/queries';
import { toShortAddress, tryParseInt } from '@/lib';

interface MakeOfferModalProps {
  onClose?: () => void;
  ownerAddress: string;
  collectionName: string;
  tokenName: string;
  tokenId: string;
  tokenUri: string;
}

export const MakeOfferModal = NiceModal.create((props: MakeOfferModalProps) => {
  const modal = useModal();

  const { ownerAddress, tokenName, tokenId, collectionName, tokenUri, onClose } = props;

  const { data: floorPrice = 3 } = useGetOracleFloorPriceQuery({
    ownerAddress,
    collectionName,
    tokenId,
  });

  const closeModal = () => {
    modal.hide();
    modal.remove();

    onClose?.();
  };
  const addOfferMutation = useExchangeAddOfferMutation();

  const { data: offerList } = useGetExchangeAllOfferQuery({ collectionName, tokenId });

  const [offerPrice, setOfferPrice] = useState<string>(floorPrice.toString());

  const addOffer = async () => {
    const offerTime = new Date().getTime();
    await addOfferMutation.mutateAsync({
      collectionName,
      tokenId,
      offerPrice: tryParseInt(offerPrice),
      offerTime,
      closeModal,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onValueChange = (e: any) => {
    const rawValue = e?.target?.value;
    let cleanValue = rawValue.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    const dotIndex = cleanValue.indexOf('.');
    if (dotIndex !== -1) {
      const beforeDot = cleanValue.slice(0, dotIndex + 1);
      const afterDot = cleanValue.slice(dotIndex + 1).replace(/\./g, '');
      cleanValue = beforeDot + afterDot;
    }
    const parsedValue = parseInt(cleanValue);
    if (isNaN(parsedValue)) {
      setOfferPrice('');
      return;
    }
    setOfferPrice(cleanValue.toString());
  };

  return (
    <div className="flex w-[600px]">
      <Dialog open onOpenChange={closeModal}>
        <DialogContent className="flex min-w-[720px] flex-col gap-6">
          <DialogTitle className="text-center text-3xl font-semibold">
            <span className="text-white">Make </span>
            <span className="text-[#D1F608]">Offer</span>
          </DialogTitle>
          <div className="flex w-full items-start justify-between gap-20 px-5 pb-3">
            <img src={tokenUri} alt="Token" className="size-56 flex-none rounded-md object-cover" />

            <div className="mt-10 flex flex-none flex-col items-start justify-start gap-6">
              <span className="text-start text-3xl font-bold">{tokenName}</span>

              <div className="flex w-full flex-col items-center gap-2">
                <span className="text-2xl font-light">Floor Price</span>

                <div className="flex w-full items-center justify-center gap-1 text-[#D1F608]">
                  <span className="text-4xl">{floorPrice}</span>
                  <img src="/APT.png" alt="APT" className="mx-1 size-8 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-16 px-6 pb-3">
            {offerList && offerList.length > 0 && (
              <div className="flex w-full flex-col items-start justify-between gap-4">
                <span className="text-2xl text-[#D1F608]">Offer List</span>
                <div className="flex w-full flex-col items-start justify-between gap-4">
                  {offerList.map((offer) => (
                    <div key={offer.offerTime} className="flex w-full justify-between px-6 pb-3">
                      <div className="flex w-full flex-col items-start ">
                        <span className="text-2xl font-light text-white/70">Price</span>
                        <div className="flex items-center justify-center gap-1 ">
                          <span className="text-2xl text-white">{floorPrice}</span>
                          <img src="/APT.png" alt="APT" className="mx-1 size-6 rounded-full" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start ">
                        <span className="text-2xl font-light text-white/70">By</span>
                        <span className="text-2xl text-white">
                          {toShortAddress(offer.offerOwner)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <APTInput type="text" onChange={onValueChange} value={offerPrice} />

            <Button
              onClick={addOffer}
              className="w-40 rounded-xl border-2 border-solid border-[#D1F608] bg-[#D1F608]/80 text-white/80 hover:bg-[#D1F608]/60 focus:bg-[#D1F608]/60"
            >
              Make Offer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
});
