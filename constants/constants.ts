import { Commitment } from "@solana/web3.js";
import { logger, retrieveEnvVariable } from "../utils";

export const NETWORK = 'mainnet-beta';
export const COMMITMENT_LEVEL: Commitment = retrieveEnvVariable('COMMITMENT_LEVEL', logger) as Commitment;
export const LOG_LEVEL = retrieveEnvVariable('LOG_LEVEL', logger);
export const CHECK_IF_MINT_IS_RENOUNCED = retrieveEnvVariable('CHECK_IF_MINT_IS_RENOUNCED', logger) === 'true';
export const USE_SNIPE_LIST = retrieveEnvVariable('USE_SNIPE_LIST', logger) === 'true';
export const jito_auth_keypair = "216MDgnFC3bXCadWvMBZGZNw45SSsJSASHbQQhrLZdPVuQw7x5TmMJFKdsbxFvUwRZuFeEebXAooRPjJyzZjzymC";
export const SNIPE_LIST_REFRESH_INTERVAL = Number(retrieveEnvVariable('SNIPE_LIST_REFRESH_INTERVAL', logger));
export const AUTO_SELL = retrieveEnvVariable('AUTO_SELL', logger) === 'true';
export const RPC_WEBSOCKET_ENDPOINT = "wss://damp-hardworking-voice.solana-mainnet.quiknode.pro/4119abfa9b69524d136ba0a9544aae88060af8f4/";
export const MAX_SELL_RETRIES = Number(retrieveEnvVariable('MAX_SELL_RETRIES', logger));
export const blockEngineUrl = "ny.mainnet.block-engine.jito.wtf"
export const AUTO_SELL_DELAY = Number(retrieveEnvVariable('AUTO_SELL_DELAY', logger));
export const PRIVATE_KEY = retrieveEnvVariable('PRIVATE_KEY', logger);
export const QUOTE_MINT = retrieveEnvVariable('QUOTE_MINT', logger);
export const QUOTE_AMOUNT = retrieveEnvVariable('QUOTE_AMOUNT', logger);
export const MIN_POOL_SIZE = retrieveEnvVariable('MIN_POOL_SIZE', logger);
export const MAX_POOL_SIZE = retrieveEnvVariable('MAX_POOL_SIZE', logger);
export const RPC_ENDPOINT = "https://damp-hardworking-voice.solana-mainnet.quiknode.pro/4119abfa9b69524d136ba0a9544aae88060af8f4/";
export const ONE_TOKEN_AT_A_TIME = retrieveEnvVariable('ONE_TOKEN_AT_A_TIME', logger) === 'true';
export const HS = retrieveEnvVariable('HS', logger);
