// function generate(user_input) {
//     //code
// } 
// function generate(user_input) {
//     var qrcode = new QRCode(document.querySelector(".qr-code"), {
//         text: `${user_input.value}`,
//         width: 180, //default 128
//         height: 180,
//         colorDark : "#000000",
//         colorLight : "#ffffff",
//         correctLevel : QRCode.CorrectLevel.H
//     });
// } 
// let download = document.createElement("button");
// document.querySelector(".qr-code").appendChild(download);

// let download_link = document.createElement("a");
// download_link.setAttribute("download", "qr_code_linq.png");
// download_link.innerText = "Download";
// download.appendChild(download_link);

// let qr_code_img = document.querySelector(".qr-code img");
// setTimeout(() => {
//     download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
// }, 300);

// let qr_code_canvas = document.querySelector("canvas");
// setTimeout(() => {
//     download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
// }, 300);

// if(qr_code_img.getAttribute("src") == null){
//     setTimeout(() => {
//         download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
//     }, 300);
// } else {
//     setTimeout(() => {
//         download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
//     }, 300);
// }

// function generate(user_input){

//     document.querySelector(".qr-code").style = "";

//     var qrcode = new QRCode(document.querySelector(".qr-code"), {
//         text: `${user_input.value}`,
//         width: 180, //128
//         height: 180,
//         colorDark : "#000000",
//         colorLight : "#ffffff",
//         correctLevel : QRCode.CorrectLevel.H
//     });

//     console.log(qrcode);

//     let download = document.createElement("button");
//     document.querySelector(".qr-code").appendChild(download);

//     let download_link = document.createElement("a");
//     download_link.setAttribute("download", "qr_code_linq.png");
//     download_link.innerText = "Download";

//     download.appendChild(download_link);

//     if(document.querySelector(".qr-code img").getAttribute("src") == null){
//         setTimeout(() => {
//             download_link.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
//         }, 300);
//     } else {
//         setTimeout(() => {
//             download_link.setAttribute("href", `${document.querySelector(".qr-code img").getAttribute("src")}`);
//         }, 300);
//     }
// }
