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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxSOUJVNDdZRS9Ea0lZVHhiRkZobUZoeWI3NnF4MjVLVWtnU2VBTFhIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXYyeTNHanZJVVhCelJmNnBQdmswK1RyUy9LM3ltYkI2WVNNdTZSbm9uRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQS9DTFAzUEkvRTFEbG4xR2J3Mk5EU0c0Z2pQU1d6a0llOEprakFKbDNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkUmhCQWVxTjVabGJEQ004SDVLVlZYMDNtZjRnNjhWZEZwcU02ckE0RWtjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdKZ0dvZ2Nlb1VtZml3dmQyUDZGV3ArdjJmOUtvUEs0M3cxQm94cUY1bjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF6a1pZbitIWlJVa2pZYW40dkZiZ1NXdFdheldiWm1aaExBNjZYWGZieU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBvTlpDdGNiOFZrR1U0NFZTQncrT29MNWMvYkh5UG1yS2l1d0IwWGttZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkM3N1BXZUswZmY4Wm1NVUFLSE80aDIrT3ozRXFURHh1MUU5Z0pSa1pWVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBERTk5QkNwOUdWNlkrVllMUEV0YkMvVW9qekp6VlA0d2EvaDZ2OEhHMHdMamx5U2dmbVpnWXNzSHNkTXJHUnpWRFBucjh5ZHNud3IrT0RDRFROWWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJLcmVmLzBwSkxVbTN6YXd6OHhIU3YvM0xUOU1LTER0NlQzV0llQ2dxOXJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGNjRQanFFSFFnNnZaV3d4Wk04ZzBRIiwicGhvbmVJZCI6ImYwMTdiNGU2LTg5NGYtNDUyYi1hOTQ4LTA3MjA2OWZiN2Q0ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKcm5lN211K1A2NGpwUys2NFZxYTAzWlVLb2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibklPSUsxak0xVE4vV0l1TU9FZFNHenRmVnRNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhEQkg3MU1UIiwibWUiOnsiaWQiOiI5NDc0MDcwNzE1Nzo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0j1DhtIXwlqSNdDRrIiwibGlkIjoiMTY0OTU3MzEyMjc4NjMxOjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKTFgvaVFRNnZ2M3dnWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJia3dGQUQ5Y0d4Z3JHb0s1TTcvRE4yMnY0TU1SS1AwLy92UTVYbjZieERnPSIsImFjY291bnRTaWduYXR1cmUiOiIxNzFrckt5NSt2bW1Wc1JkVDRYVzU3V2hiSkR6Z0ZlSWlkRG90VEpjU2RMaGp6RWhlaVJvZnlqMFlJdHE3cXRQUWNzWkhiYU9ZKzdnNTR2RFNNY01EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidzRyTkpjZEtuWTd1WDFUNXpQbFY2aUovNysyTUgxWDhpUVBIMXdwUVQralhsNHFvRWVnczdBRHpUeU5xbWZrQnZlMXdheGFkVVVVL2xsemFHK09tamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MDcwNzE1Nzo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlc1TUJRQS9YQnNZS3hxQ3VUTy93emR0citEREVTajlQLzcwT1Y1K204UTQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDk5MDMyNywibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUg3SyJ9",
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
