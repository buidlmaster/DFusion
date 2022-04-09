export const ENV = {
  host: process.env.HOST || "https://ic0.app",
  canisterIds: {
    dfusion: process.env.DFUSION_CANISTER_ID || 
    'kqomr-yaaaa-aaaai-qbdzq-cai',
    reverse_registrar: process.env.REVERSE_TRGISTRAR_CANISTER_ID || 
    'etiyd-ciaaa-aaaan-qabbq-cai',
  },
};
