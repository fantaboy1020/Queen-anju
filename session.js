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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0t6a1lNNGpKcXhHbjBBbEZ0SlpKM0NWWFVwd0kvMGNDcXJ4YWwwL0FuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkdzeDlRR3dDY0x6MXViNXZhajAxdDIyTjh3UU5mQlVBcW03ekIzYURWUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QTJNTThCS1UvQ1BkVFRlVi9IaGtySHk4eHZ2cHprVHN2bmdZQTkzSlZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzeUljOHZ5UkhmK3ZQZk9IazBPUTlaYlJ1eU9JWndtR2NzQU5HakR2cmdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFMWnZDcnlWbGZBbnJiZVJZTmZ2OUZ2SDZabTY4Nnd1SitlaTdnUXJvVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVZbkliLzVrVWMvalRJZ0NUdU9BK2ZGejhpeGFnR2ZqTGRrYkNZdnUvbW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9QMXVTdlRhS2NSN2MrZlhBK09wSUlDdnZSS0pScmppRkV5REtMa1Ywdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3JXWGRFditiemNTcUt2bnJLZW84VmR1TDljTWpLdGhSNmJvandvYnhuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhxREdkM2tjRjI5TEVsSFJEdDFBWTI3dFJnWmJRakk4MTc4cnZGb3QwdDVvN0ptejFMT3kyaGlVaHhReHVEVG5jS3JEVGlPMGlKcThyem5WRVNTWkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiIwQ2U2QTdPZmtSc1h1TWhCNFU0L1A1eEtxVDZoNGtGem1Qc2dycFZSZURNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItTWJHcmlvdlNPR255WVlnZ2FJWFFnIiwicGhvbmVJZCI6ImE3YjA3M2JjLTczY2YtNGQzMy1iNzMxLTRhMzM2YjJiZDBlMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkcW1VcTJpMnR2R1ViUldFeS9OOFhsQ2prSG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3FBOEoyZlZKSVl3OXNnekRYQithRi9CS2s0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE3QjFRVkRKIiwibWUiOnsiaWQiOiI5NDc4ODc0MzY5Njo1M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJzaGVoYW4iLCJsaWQiOiIyNTUzMzIxMTQ3NTk3Nzc6NTNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQcXNvY2NCRUliWHRzSUdHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrWEV2S3dDNlNCZkpDRld1TU9zMERNUU1RSkpiV0dXWFNkUzI2ZXBPdkRNPSIsImFjY291bnRTaWduYXR1cmUiOiJjMTdyWXdKbWxLaWJpL01yR2hiaGNGWG8rcEw0aXNCOWZvT2FVLzZUWVZmZTVlTXBiOENvdzRGODNEdGZJa2ZmdjlGN2JkYjhSeW0zd0dVRGpZSE9BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZlpIRVM1MU5WKzFXL0hvcThxUEkra2liaVY5M3YzbkJCTTJUUGlVVEZ2b0ZnRzBpdFVSeUpRTTJwaXE4aUptZlFaYmRpNzBwYnFjaWxIdGozUlFKQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4ODc0MzY5Njo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaRnhMeXNBdWtnWHlRaFZyakRyTkF6RURFQ1NXMWhsbDBuVXR1bnFUcnd6In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk5MjA2NTksImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSjFGIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94763582647",
  PASSWORD: 
    process.env.PASSWORD || "Shehan Mayuranga 2006",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94762652043", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
