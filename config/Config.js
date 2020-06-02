// ODA Details
module.exports.ODA_WEBHOOK_URL = process.env.BOT_WEBHOOK_URL || 'https://oda-29427bd64ddb407f81766b33c7695c50-da2.data.digitalassistant.oci.oraclecloud.com/connectors/v2/listeners/webhook/channels/017d6e11-8acf-45ee-a2de-ed7272353b78';
module.exports.ODA_WEBHOOK_SECRET = process.env.BOT_WEBHOOK_SECRET || 'cfsW2bYFoupzDynqV90pRXIlAJAXFKLk';



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
