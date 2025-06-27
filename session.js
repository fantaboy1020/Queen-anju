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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlBMZUtkQXNSUysremx6U3l2VDhTWkc2Z3lTTk1sM0dieVhjdUliTFZrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTNIbDRiSmxjdDBacyswLzFMdGx0aWVLVTZpeldRRUphNTVJRUdNMGlITT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRDFMTWs5ODY1OG9mRzRqQ2NyU3d5eFRTcmxJeXMrbVlYRzNWUmcxK1ZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZGMvdWM3aUdNYTlKNzRkRHh6TTVIdXVLcGptRWtvUDZkUFkrMlNTYkcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBMaGJCMnpWQUNHK0dJMmgrT2tYWGIvM3VLWDdFbEFma3lFRndWZDBMVzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh6ZW5JYU41NExtdHpDOVlSSjZGMWg5eWo1S2UzZGdKWmVidzJKUXdhUms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VVS1daMEVhNWU1RGdCd2ZreTRPdDlEUFgwanpnUnZGb2tBYkcvei9taz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWVyUEx2OTNqckVKakowdDFtZU5BcmJYcVNhaGpJTUpZZXpjNGlrU3VTbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY3REdvbkxsT2JvNlNqM01zQmRyM1BWd2hLU3FzYVdiQlpIdnU1RVUyUDJmNXhCdFl6V3ZuUW5BOFNlNDBOZ2s3U2l2Uzgyd0h3Q0ZwMytKd0NsWUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6Ill0L0s5QnRXNDkvcTZtR0FKT2FOdU1obWdRZ0dNeEY4b0tnUnVQYkFqQnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDEzODg0MjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEE0RDYyRDRCQjc1RjdBQzVBQjg1NDQ1Qjc1NjJEM0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDk4NTQ0NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDEzODg0MjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNENFMDgzRDc2RDk2OTlCM0UwOTE0RUFEMDJGMEJDNDQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDk4NTQ0NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDEzODg0MjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkIxNzU3MThDRUE0QzkxRjExNjc3MDQ1MEVGMDdGNzgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDk4NTQ0NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZm83WldIZ0JUbjJUYU9kVC0yc29GUSIsInBob25lSWQiOiI4NmZkODg3NS1iMGUxLTRiODgtYTkxNS1jYjkxNDRkNWFlMDQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXEzQlVwZElLTElYNGROemVxNHBmRTVic09jPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZNZHpIRUtoZ0NDU1ZRNnRrQndPQkxDSk14MD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCVzIzRFBRUSIsIm1lIjp7ImlkIjoiOTQ3MDEzODg0MjM6MjlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI5MDYxMTI2MDYyNTA4OToyOUBsaWQiLCJuYW1lIjoiUnVrc2hhbiBTYXZpbmRhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKdWt1b0FHRU5YVjk4SUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJObGFQOE9pb1crUzRuOE1WcUE3cXZ6d3FMYUg3ZDd0RVNxNGRDRHREZVF3PSIsImFjY291bnRTaWduYXR1cmUiOiJQRm95Yk5YWmRDTEh3VHdrUGh6YWxUaEU5VzY4MmpIK0g4SFhjZ0U1aWx4TDJ2eFlodTdmY0hyUXFCYTBwaFlrR3VwUmw4L2VnQkh4VXhBVXh3TTlCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidG00K1FTK3JqdHNnMzMxN0R0YUN6RVRyVkJVZHdJK21EYUprQzVuQTNEL0VSR25CNWVhMWJhVE1kQS9FNlhscVN6UjExSnluTmNEMUFsNCtocWRrQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMTM4ODQyMzoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUWldqL0RvcUZ2a3VKL0RGYWdPNnI4OEtpMmgrM2U3UkVxdUhRZzdRM2tNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA5ODU0NDMsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLdk4ifQ==",
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
