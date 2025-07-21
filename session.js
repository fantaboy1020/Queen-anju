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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdOZFRXalo0eWxiTlIwNUxRTlJ1S21hZUYzbUdEUzBpRFZ5QUNwcE8yND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVdvMHNsbE9kRGNpV2t1MkZjaXdVb2F5dHh1ZUtlSE9iMGFWSlNKdDFsUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSXN5UUZXUW83dEhzTjdmMW0wWEwxZTdwTXNKdi9sM2wwY2FNTStLYm1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxVVNRcDBFaFNwN0NrZjNVQWJJNFJQZ2docmRubnR5T1k3dERCaWhCOVNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFINEpUcTE5SkZNeHVFRVhFVEcyTHoyNm1Zb3FKeVBjVmxQb29vZ1lGMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFzd084ajZzWkxVMUIvQi9yYUxhcy9LcVNTdExtZVpJbmdCTUZTNmVLaE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0JWYmpzbVNzV1FwNTg2S0FxZFhxbUJueWtRQWdGVjVVLzRxQXFla2ozQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVZlVHU0cUUvdlAreG9CbjhQM0RnbUEyVHdDZ2w3RzZHUUkrT1llNE5GST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0rczNIbm9LYVRZSGNQNHJMcnZqYklUb3l4R1dXTzBwWXM4QlJ1Y01pWGVncG5YMDBzWUpEYnRJY082OUNub3JsNENYMjArVlZRTWo1bGd5T1lwQWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6IkZDdkRJTk1jWS9CbHlvVkhKTXowN01CUGtIM1FLeUZvSWI4VzZTYXJQVnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdjY1BIa3B3UWppQTlFbDdINnNpLWciLCJwaG9uZUlkIjoiNTZmZTVhN2YtZDM0NC00N2VlLTg4MGItMjY0ZTVhNDRmYjAyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFxdjF0Y2VSSjZaZXI1Vkh1MWUrOVNHczZPTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPcm5sa2xsUWpRd1lPaDd0dHB2Y3FKYlBQODg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUNURlhCTTUiLCJtZSI6eyJpZCI6Ijk0Nzg4NzQzNjk2OjY0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1yWCBPZmZpY2lhbCIsImxpZCI6IjI1NTMzMjExNDc1OTc3Nzo2NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AvcHVKWUZFTFBXMU1NR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdDSFFoNUhrVFBJNmZITE51ZDZITHRxYW9kV2syenBVNHM4V2krSURCUmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNWS1k1QU5PSnYzN2N5THZWck5JZ1hDckZzMGxFS0FFSDNSOHFFWUlxQVkyUDdsUTNHcG5FUHA1dDhNcDFDcTF5Rkk2Q2lUbVFPZjdRUVBwTGl2M0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMbktvU0U1UlZubFFFbGNRZzVDSE9FOXdhZm1IaGtCdDk1VEx2NkFBcy91SDU3KzNwc3lETkkwbW0xOWFaenQ4djVMK1FHUmMvRncwaDZUVStUaHBpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg4NzQzNjk2OjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJnaDBJZVI1RXp5T254eXpibmVoeTdhbXFIVnBOczZWT0xQRm92aUF3VVkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MjUwOTI0OCwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQUEgifQ==",
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
