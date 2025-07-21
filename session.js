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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJ4LzRwZFlRbmZJR1JCZlI0OUJHRGVZMVg4V1hZK2F0Wk9YRFplWSsyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWZSVmhnUUFZeDJ6d3hROG5FTDczdlk2MXByV1FYaTArdTJwVm9vcTV3OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUEN6clBxaWpaRWtNM2kwTGdRYzZUNkE3SjdJdWJBUnN0L01idVFvSmxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkV3dwaXdmWHBkODdjZXhVWTZUaGdQekF0ZjdCWEpmYUUxTTdJT2VTbWxZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGaWNad2JVQldSaVBHOU5XOHVUZnZBUTE3OS9wemg2V2hyL2p4a256VVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9RUkpadEZEL1lsdHpST1ppSmZIMGFsSmpGd09YSkU2M2cyNm9jczJvaHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBrOFBNRTJlWjQ1UXZqWnl2WEQxbFY5dy9aN3hRZW1kdDJrS29uRFZWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVdCaDd3YkNjTUhQUHBBdFgrU2J0OE1yOVVzRkM3QkNFLzdnZThIbDlUMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE0Z1Vnb1ZmYmt3UWR6K2cyOEhpdTYwaE1rR1FxTXc0MzYvVGxQQUt6Y2pJZlRVOHFGM3llQWIvVWQ4TGxuRnNrbXM2TmxNbjJWOVpST3dUYWtrTGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiJnMEwyR09OME5qRGppRHM5RUV4aFV5eDQwaVdNNkFtcXJOZXNHVkcrS3JzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5OFJJYVduaFFFU0NEb3dra2U0V0dRIiwicGhvbmVJZCI6IjM2YTdhOGVjLWExNTAtNGI4Ny1hNzZkLTBjNmM5ZmUxOTRlOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJScU9GOGI0VlRzWkdQbDdUNFp2TlA3WUFQYXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGRQS0hlL3lhd0N3eUlLNTU4NDBDVWNZK1dvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlLUjY0M0FDIiwibWUiOnsiaWQiOiI5NDcxNTcyNzM1Njo0MEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEwNDcyOTA1MzAwMzk2MTo0MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01udzlUb1ExNFg1d3dZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNMNEZKOG5ac21hMFJSN09PenFvNHZQa25RUk1XV3JQRmlXbE40NDgreEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlAzUkhQYXdML1ZJSmpOVUVkKzJsSDQrN0Z3cjdnam82ZWdsbGllYThNUUcxd2R6dlZuKzlIUnc0eVFzVGFlRldHWVJNUWliT1R1NnpIVXZISSt2eUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvLzN2YnhNQ2oxSG95MXBYOHpkbnJIR29aTnIzQmtUUTc2ZWxqU1YyT05qS2RSWSt4ZmRBWE9SQks5WWpYblpXTjcrazdJcWUwT2lxYmozY1AzNEVqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzE1NzI3MzU2OjQwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmR5K0JTZkoyYkptdEVVZXpqczZxT0x6NUowRVRGbHF6eFlscFRlT1BQc1MifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MzEwNTEyNiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
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
