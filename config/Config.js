// ODA Details
module.exports.ODA_WEBHOOK_URL = process.env.BOT_WEBHOOK_URL || 'https://oda-4c96e0b6b9944e0787a88e759ce9b454-da2.data.digitalassistant.oci.oraclecloud.com/connectors/v2/listeners/webhook/channels/6a9f23b0-1920-4d61-806b-388b187ac3f3';
module.exports.ODA_WEBHOOK_SECRET = process.env.BOT_WEBHOOK_SECRET || 'XKla5JZQ5t0Y5Mdto4jT18UENP1CbhkL';



// Smooch Details enter
exports.SMOOCH_APP_ID = process.env.SMOOCH_APP_ID || '5cb03a22ac003b0010331337';
exports.SMOOCH_KEY_ID = process.env.SMOOCH_KEY_ID || 'app_5cb03d1080314900108d8ee6';
exports.SMOOCH_SECRET = process.env.SMOOCH_SECRET || 'jftbq3zRfRjR7fsEdpmIMZxOWUC0pbAJp2uGwNE4ZUL5OdkzlPX20aGKVm0LBtnVzxP277mfHZcGRDKAprprcg';
exports.SMOOCH_WEBHOOK_SECRET = process.env.SMOOCH_WEBHOOK_SECRET || 'it-IISMgDlA7fNNLeoxsPWUGUVGmgSNNE2sqPlAZpY6_Yja1lUyIuQCGEqKtMquYCfCnzOGsnJERKas_ezFHtw';

// General Details
exports.PROXY = process.env.PROXY || process.env.http_proxy;
exports.PORT = process.env.PORT || 8004;

// WhatsApp Sender event IDs
exports.EVENT_QUEUE_MESSAGE_TO_SMOOCH = "100";
exports.EVENT_QUEUE_MESSAGE_TO_BOT = "200";
exports.EVENT_SMOOCH_MESSAGE_DELIVERED = "1000";
exports.EVENT_PROCESS_NEXT_SMOOCH_MESSAGE = "2000";
