//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVtNHBoOHJKY0ZSZ2JhSExxdkZoVzdMQWIyVm9vZWg3K0h0YWZzYWhIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDFXd2tjRHJTV1VIL0c1ZngyK3JBcjNlR3J2WWh1cGNvb1p0R2RaVVhuST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQmtoSDc0cHVFeUV6WVg5eGxBeEFLalI1b01HVHNwb3JXUDRDMjg0NmtNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYRzZYS3pFRVFCMHhqWTRacDdTb1dNMy9obmFabkNDMUJ3TndST2orV253PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9MOHBnL00rMU0wZGY5bGVGZERGcVY0THV4dEN5TFV0aWR2T3JzdUVvbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBVSXRhaWd6djZqOVh0MU5oMXZOVlB0c0s0REI5ODVCVlBzVng3VU1sQW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU14Z3o1WmdYcmh5c0JPRlJXNk5qeFdVRkRiSlJTWHo2STJmQWV3cjBHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0c3RXFPcGpNSW9MSHBMVGxpOEppbzJUWXlEYURKQ2Y4LzlFL09rVFlUaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVXN0dKUDRQeVEwc3M3OTBNTDVEbSs4ZmxIemlSMEdEbFZWU0hNOHJ0OU1BcVM5ZEFpMnNuODBmSzFvTG94dlhOU1F4WTNRZjBZb1h6aVZRMzVkWEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoibEJZN2ZDWUdmVk9jbndidUptYlpPaHdwdmtjMlg0eDVpanZpNFFjNzlPQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaEN4ank3UmtTWDYyb3ExMjhHV19sQSIsInBob25lSWQiOiI5NWY4Zjc3My02MWU1LTQyNDItYTA1OC00MDg1NTA4MWFhMGIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3J5RTE2cjF0U0FlempaSUNWdjVoWXNxbS93PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldhVUo2Y2dCRU1QMFhsM1c0UEJhTG1SKzA0Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKODM4OE1LRSIsIm1lIjp7ImlkIjoiOTQ3MTU3MjczNTY6MzlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMDQ3MjkwNTMwMDM5NjE6MzlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNanc5VG9ReWVQNHd3WVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzTDRGSjhuWnNtYTBSUjdPT3pxbzR2UGtuUVJNV1dyUEZpV2xONDQ4K3hJPSIsImFjY291bnRTaWduYXR1cmUiOiJYMWtxcUZCVEdITVNZb3pqMXRzVUh4cWRZRDl1ak9YV3pEaEhDczZXM0VleUZvZ1Q0Ry9XajFSQjZwVE5Ybk9abjZjZDZhb2FiVUpiUUJ0Uno1ejFDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQy9vYWZsWWNSRENFTDlCeUszT1B3M041SzFVMEd6MnA5bTdvYlpEVEs3d0ZncmZHY2dWRkZzZmZiVzJqN0xxcjZ3MlEvZjR2bVM4MkVqVUVUUVJEQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNTcyNzM1NjozOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkeStCU2ZKMmJKbXRFVWV6anM2cU9MejVKMEVURmxxenhZbHBUZU9QUHNTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTMxMDA3NTgsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94763582647",
  PASSWORD: 
    process.env.PASSWORD || ".Shehan Mayuranga 2006",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94762652043", "94788743696"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
