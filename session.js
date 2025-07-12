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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpUQm1xTmRGL21QWDBlQ0diVlhFeHovUWY5S2Q3MDVVeXI0eGw0MDNFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURvZDJQa2NRZnVQRTZSV2QzVmo5NmNXRE9KS2ZXRXRjWUtwdVF1V3pTQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSDdMcEl3SDYxWHoxcndMQWhKcnZGUmVOSC9aV3VxVzRacVk2ek50L2xjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHdi83cVFEQXBLWEl4MFFGS21JTkdld1VqKzI1SWg2T2R4VU1RT2FONUc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtKaUJkajkzSjdodDY2b2ZyaGdiTEJBdk5sMmxuU3ltdENuVDV4ejVEVkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5keUxhUE5xTGpDMDlkcDFjS0UxVkpxN01RS1podXZLWFJRbzNyK2VFVkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FuVmI4NDh6MzE2cE9MeVhXSCtwZm5QSWhWRHJLU3VIR0tQOVBlTElIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlRJVWhsSlZZRExhRUlIbnpQdUdSWTZ0UlA0WlpJakwvdFBxZFdVUTBDdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBZ0t0VHplN3N2OXJTSzhneWtKK0NUdTl5eDFkbW4vUkRGYWNYVDFCLytJSmRrRHYzYUhZZEFPK1ZxV2tLcDVzZFdRWXdRcE5IU2RsTHQ0R2xSNkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJKLzdoZDlYY0JmMG11MytvSVRuL0tLcUwyWHljUHFzTUxZWkFDdVZFdUwwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg4NzQzNjk2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQxNEI0MkM0RTFFNDFFQUUyOUQ5OEY4NTRCNkJBOTI1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTE2MTQ2MzR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpQM09HWEpwU3Z1dmZncVI0TTdBalEiLCJwaG9uZUlkIjoiMTk4YTI5MTEtOWJhMC00YmM4LTg1ZjAtODUyZmQxOGY0Y2E1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IituRUU3MWhZYzRFUlpPODYwY1R2M3ZlajlCMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4eTVDYTJ1YlIwa3hGa21OTUd6djk5b0lNOGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMTgyRDNRMTIiLCJtZSI6eyJpZCI6Ijk0Nzg4NzQzNjk2OjU3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNoZWhhbiIsImxpZCI6IjI1NTMzMjExNDc1OTc3Nzo1N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ096a2pQb0ZFSmlKbnNNR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNkcU1nWkRKLzR1VkprWlJoOWRHOVlESlZ4WVJiUGhoTXF1VUFwVG1vaTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjY1WUlDV25TNU1mZlBRdi9zTVFYd1ZqTlZVdEVuMmxld0hxWEtpSlcxR09BbjZMdFFubzk1ZFVKQTlDN0w4TjVYVHhGdXYyKzVSdHlvYnZ0bVRvUENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTRXR5TWtNdDk1YldsNDc1SEp6ZjZMVzdXRFhHNHpmM05WYVhoLzJhTEppOVJDaUlaYzQvZkdKYi9Ud2ZSaVJGa2xNRUdNQWpCcTh6Ukh1RkY3TUpDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg4NzQzNjk2OjU3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhIYWpJR1F5ZitMbFNaR1VZZlhSdldBeVZjV0VXejRZVEtybEFLVTVxSXUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTYxNDYyOSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKMmUifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94763582647",
  PASSWORD: 
    process.env.PASSWORD || ".Shehan Mayuranga 2006",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
