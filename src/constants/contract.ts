export const CONTRACT_ADDRESS =
  '0x4b6e221646feeff6eb0fdb9e62e716a60e0e28eee5c35310f4b886c5e4911dd2';

export const CONTRACT_FUNCTIONS: Record<string, `${string}::${string}::${string}`> = {
  DA_CREATE_COLLECTION: `${CONTRACT_ADDRESS}::digital_asset::create_collection`,
  DA_MINT_TOKEN: `${CONTRACT_ADDRESS}::digital_asset::mint_token`,
  DA_DELETE_TOKEN: `${CONTRACT_ADDRESS}::digital_asset::delete_token`,
  DA_TRANSFER_DEBT_TOKEN: `${CONTRACT_ADDRESS}::digital_asset::transfer_debt_token`,
  DA_TRANSFER_TOKEN: `${CONTRACT_ADDRESS}::digital_asset::transfer_token`,
  DA_WITHDRAW_DEBT_TOKEN: `${CONTRACT_ADDRESS}::digital_asset::withdraw_debt_token`,
  DA_WITHDRAW_TOKEN: `${CONTRACT_ADDRESS}::digital_asset::withdraw_token`,
  EA_ADD_NFT_TO_AUCTION: `${CONTRACT_ADDRESS}::english_auction::add_nft_to_auction`,
  EA_DECLARE_WINNER: `${CONTRACT_ADDRESS}::english_auction::declare_winner`,
  EA_INITIALIZE_WITH_BID: `${CONTRACT_ADDRESS}::english_auction::initialize_with_bid`,
  EA_PLACE_BID: `${CONTRACT_ADDRESS}::english_auction::place_bid`,
  EX_ADD_OFFER: `${CONTRACT_ADDRESS}::exchange::add_offer`,
  EX_BUY_WITH_DOWN_PAYMENT: `${CONTRACT_ADDRESS}::exchange::buy_with_down_payment`,
  EX_BUY_WITH_FULL_PAYMENT: `${CONTRACT_ADDRESS}::exchange::buy_with_full_payment`,
  EX_CANCEL_LIST_OFFER_NFT: `${CONTRACT_ADDRESS}::exchange::cancel_list_offer_nft`,
  EX_LIST_INSTANTLY_NFT: `${CONTRACT_ADDRESS}::exchange::list_instantly_nft`,
  EX_LIST_OFFER_NFT: `${CONTRACT_ADDRESS}::exchange::list_offer_nft`,
  EX_REMOVE_OFFER: `${CONTRACT_ADDRESS}::exchange::remove_offer`,
  EX_SELL_WITH_OFFER_NFT: `${CONTRACT_ADDRESS}::exchange::sell_with_offer_nft`,
  FAM_BURN: `${CONTRACT_ADDRESS}::fungible_asset_minter::burn`,
  FAM_CREATE_FA: `${CONTRACT_ADDRESS}::fungible_asset_minter::create_fa`,
  FAM_MINT: `${CONTRACT_ADDRESS}::fungible_asset_minter::mint`,
  FAM_TRANSFER: `${CONTRACT_ADDRESS}::fungible_asset_minter::transfer`,
  LP_BORROW: `${CONTRACT_ADDRESS}::lending_pool::borrow`,
  LP_CREATE_RESERVE: `${CONTRACT_ADDRESS}::lending_pool::create_reserve`,
  LP_DEPOSIT: `${CONTRACT_ADDRESS}::lending_pool::deposit`,
  LP_DEPOSIT_COLLATERAL: `${CONTRACT_ADDRESS}::lending_pool::deposit_collateral`,
  LP_REPAY: `${CONTRACT_ADDRESS}::lending_pool::repay`,
  LP_WITHDRAW: `${CONTRACT_ADDRESS}::lending_pool::withdraw`,
  MFL_DEPOSIT: `${CONTRACT_ADDRESS}::mock_flash_loan::deposit`,
};

export const MEGA_COIN: Record<string, `${string}::${string}::${string}`> = {
  MC_MINT: `${CONTRACT_ADDRESS}::mega_coin::mint`,
  MC_REGISTER: `${CONTRACT_ADDRESS}::mega_coin::register`,
  MC_TRANSFER: `${CONTRACT_ADDRESS}::mega_coin::transfer`,
  MC_WITHDRAW: `${CONTRACT_ADDRESS}::mega_coin::withdraw`,
  MC_COIN_TYPE: `${CONTRACT_ADDRESS}::mega_coin::MockAPT`,
};

export const MEGA_COIN_DECIMALS = 6;

export const CONTRACT_VIEWS: Record<string, `${string}::${string}::${string}`> = {
  GET_ADDRESS_DEBT_TOKEN: `${CONTRACT_ADDRESS}::digital_asset::get_address_debt_token`,
  GET_ADDRESS_TOKEN: `${CONTRACT_ADDRESS}::digital_asset::get_address_token`,
  GET_OWNER_DEBT_TOKEN: `${CONTRACT_ADDRESS}::digital_asset::get_owner_debt_token`,
  GET_OWNER_TOKEN: `${CONTRACT_ADDRESS}::digital_asset::get_owner_token`,
  GET_TOKEN_DATA: `${CONTRACT_ADDRESS}::digital_asset::get_token_data`,
};
