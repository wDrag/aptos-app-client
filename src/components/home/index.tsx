import { WalletSelector } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { useCreateNewCollectionMutation } from '@/hooks/mutations';

export const HomePage = () => {
  const createNewCollectionFunction = useCreateNewCollectionMutation();

  return (
    <div>
      <div className="flex flex-col gap-4 w-40">
        <WalletSelector />
        <Button
          onClick={() =>
            createNewCollectionFunction.mutate({
              collectionDescription: 'Froggy',
              maxSupply: 128,
              collectionName: 'Froggy',
              collectionUri:
                'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2.jpg',
            })
          }
        >
          create new collection
        </Button>
      </div>
    </div>
  );
};
