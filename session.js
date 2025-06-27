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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0dPdU53QjkyVHZhMVJ4K05HL29LekdaZHZQNFExVXJmbk13aFc1UUtVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTR0ZEVmaTdpZW1PbzFaaU5nQ1hSaiszWW5nc1RSZDBtbTk0MmZ6U3VGST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRmM2RzJ5a0dzMDlqcEpTK20vL1R0KzRkVS9JMzBFc3FydmlGRG1xZjBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEZk5uOVJXMkxnenNnNUs3cXlGMEF1blNkRW5YQ1hhL1ZUZDZQQlBnZUVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLNGtLbTBjSmZPaXd1Y25yMVhRTGg2QVdKcTNJYzFtaHpaTnFZMWF0MUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlkySUNWRytJcUdPNyt6SU1JTWNyU1RueW5GTHpqRTltc25jbURocjJ5Rmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUM3SWV2K3BLLzA3MUZXV0hKc2FqcENqWkl6MWFsa3FZZUhvaHVxNlExUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTFYK2l4VjlFbjRmYWR1K1MrNUEzSmxBSnB3Qzc5R3dsRmplU0hTYk9IUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml4a1gyZXd4bWpqcCtHbi9DWmpyTUFQenhlT2pYTDhBVzc3K2JkM0UwbjIwNWNMcmhEbHQ2Ukl4ckEzNVZEdW05T0ZubkdoU2xqQnJqTVNSMUQ2bmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiMzFBU3hDN2xrTDNKWXNlWG10STZQaHZXRGdyU0g2aVFMOVVTYXVMS3VSaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcwMTM4ODQyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwREU5NzdCMjZBODE1Nzk5MjYyMUE2RTQxREM3NEIwQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwOTg5NDkyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1ajdsbW5hOVN0LVFUOEZGMVVwSGV3IiwicGhvbmVJZCI6IjVlNWJhYmM4LTZhZTEtNDFmNC05MTQ2LTEwNjQwYjRjNTdlMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrNGo3dTdORVVWVjVwK2dwZFVkcGxKZUVmalU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDFlQnBYempUUWNQeVl0M2hCbFl5NVR3dk1BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRDRVJLN1BOIiwibWUiOnsiaWQiOiI5NDcwMTM4ODQyMzozMUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkwNjExMjYwNjI1MDg5OjMxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjJrdW9BR0VLWDE5OElHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTmxhUDhPaW9XK1M0bjhNVnFBN3F2endxTGFIN2Q3dEVTcTRkQ0R0RGVRdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVmpuZkI1dEVkNzV0SU8reXBEU01kL1JJcTdSbEN6T3FpeHpUR2tDcVVmaHlKbWgyc2h4ZEExVVBEVzE3U0tJVit0OWllY0w4dVZTTGN2RGRCTkl5QXc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9BOGJVdy9SWWlvbmE1Sm0xZFJyT3pjNGFTL0xpZE50VWVlRWwwZkFVbnFzTnRJZnNpakZQSldPbnJyYjJ2Y3ltYml6bWRQN2ZEcDYwZ2VZd0NTV2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDEzODg0MjM6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFpXai9Eb3FGdmt1Si9ERmFnTzZyODhLaTJoKzNlN1JFcXVIUWc3UTNrTSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwOTg5NDkwLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS3ZOIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
