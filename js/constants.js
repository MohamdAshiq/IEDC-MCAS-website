

//constants

var bca_point = 18529;
var electronics_point = 4940;
var multimedia_point = 7800;
var psychology_point = 1845;
var economics_point = 1145;
var bcom_ca_point = 7585;
var bcom_tt_point = 2045;
var ba_english_point = 7670;
var bba_point = 3660;

const lastUpdatedDate = "21-11-2023";

var total_points = bca_point+electronics_point+multimedia_point+psychology_point+economics_point+bcom_ca_point+bcom_tt_point+ba_english_point+bba_point;



// Assigning values

document.getElementById('bca_point').innerText = bca_point;
document.getElementById('electronics_point').innerText = electronics_point;
document.getElementById('multimedia_point').innerText = multimedia_point;
document.getElementById('psychology_point').innerText = psychology_point;
document.getElementById('economics_point').innerText = economics_point;
document.getElementById('bcom_ca_point').innerText = bcom_ca_point;
document.getElementById('bcom_tt_point').innerText = bcom_tt_point;
document.getElementById('ba_english_point').innerText = ba_english_point;
document.getElementById('bba_point').innerText = bba_point;



// main.js
window.addEventListener('load', function () {
    setCardData('bca_point', bca_point, (bca_point / total_points) * 100);

    setCardData('electronics_point', electronics_point, (electronics_point / total_points) * 100);

    setCardData('multimedia_point', multimedia_point, (multimedia_point / total_points) * 100);

    setCardData('psychology_point', psychology_point, (psychology_point / total_points) * 100);

    setCardData('economics_point', economics_point, (economics_point / total_points) * 100);

    setCardData('bcom_ca_point', bcom_ca_point, (bcom_ca_point / total_points) * 100);

    setCardData('bcom_tt_point', bcom_tt_point, (bcom_tt_point / total_points) * 100);

    setCardData('ba_english_point', ba_english_point, (ba_english_point / total_points) * 100);

    setCardData('bba_point', bba_point, (bba_point / total_points) * 100);
});


function setCardData(id, value, num) {
    var element = document.getElementById(id);
    if (element) {
        element.setAttribute('data-points', value);
        element.innerText = value;
        var percentElement = element.parentNode.parentNode;
        percentElement.style.setProperty('--num', num);
    }
}

