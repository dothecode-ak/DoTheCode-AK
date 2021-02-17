
var countries = Object();

countries['Asia'] = 'India';

var city_states = Object();

//all state
city_states['India'] = 'New Delhi|Andaman/Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhattisgarh|Dadra/Nagar Haveli|Daman/Diu|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu/Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttaranchal|Uttar Pradesh|West Bengal';

//district
var district_states = Object();
district_states['New Delhi'] = 'North Delhi|North West Delhi|West Delhi|South West Delhi|South Delhi|South East Delhi|Central Delhi|North East Delhi|Shahdara|East Delhi';
district_states['Andaman/Nicobar Islands'] = 'Nicobar|North and Middle Andaman|South Andaman';
district_states['Andhra Pradesh'] = 'East Godavari|West Godavari|Krishna|Guntur|Prakasam|Sri Potti Sri Ramulu Nellore|Srikakulam|Vizianagaram|Visakhapatnam';
district_states['Arunachal Pradesh'] = 'Anjaw|Changlang|Dibang|Valley|East Kameng|East Siang|Kamle|Kra Daadi|Kurung Kumey|Lepa Rada|Lohit|Longding|Lower Dibang Valley|Lower Siang|Lower Subansiri|Namsai|Pakke Kessang|Papum Pare';
district_states['Assam'] = 'Baksa|Barpeta|Biswanath|Bongaigaon|Cachar|Charaideo|Chirang|Darrang|Dhemaji|Dhubri|Dibrugarh|Dima Hasao|Goalpara|Golaghat|Hailakandi|Hojai|Jorhat|Kamrup Metropolitan|Kamrup|Karbi Anglong|Karimganj|Kokrajhar|Lakhimpur|Majuli|Morigaon|Nagaon|Nalbari|Sivasagar|Sonitpur|South Salmara - Mankachar|Tinsukia|Udalguri|West Karbi Anglong';
console.log("all assam dist." + district_states['Assam'].split('|').length);
district_states['Bihar'] = 'Araria|Arwal|Aurangabad|Banka|Begusarai|Bhabhua|Bhagalpur|Bhojpur|Buxar|Darbhanga|East Champaran|Gaya|Gopalganj|Jamui|Jehanabad|Katihar|Khagaria|Kishanganj|Lakhisarai|Madhepura|Madhubani|Monghyr|Muzaffarpur|Nalanda|Nawada|Patna|Purnea|Rohtas|Saharsa|Samastipur|Saran|Sheikhpura|Sheohar|Sitamarhi|Siwan|Supaul|Vaishali|West Champaran';
console.log("all bihar dist." + district_states['Bihar'].split('|').length);
district_states['Chandigarh'] = 'Chandigarh';
district_states['Chhattisgarh'] = 'Balod|Baloda Bazar|Balrampur|Bastar|Bemetara|Bijapur|Bilaspur|Dantewada|Dhamtari|Durg|Gariaband|Janjgir-Champa|Jashpur|Kabirdham|Kanker|Kondagaon|Korba|Koriya|Mahasamund|Mungeli|Narayanpur|Raigarh|Raipur|Rajnandgaon|Sukma|Surajpur|Surguja';
console.log("all chattisgarh dist." + district_states['Chhattisgarh'].split('|').length);
district_states['Dadra/Nagar Haveli'] = 'Dadra and Nagar Haveli';
district_states['Daman/Diu'] = 'Daman|Diu';
district_states['Goa'] = 'North Goa|South Goa';
district_states['Gujarat'] = 'Ahmedabad|Amreli|Anand|Aravalli|Banaskantha|Bharuch|Bhavnagar|Botad|Chhota Udaipur|Dahod|Dang|Devbhoomi Dwarka|Gandhinagar|Gir Somnath|Jamnagar|Junagadh|Kutch|Kheda|Mahisagar|Mehsana|Morbi|Narmada|Navsari|Panchmahal|Patan|Porbandar|Rajkot|Sabarkantha|Surat|Surendranagar';
console.log("all Gujarat dist." + district_states['Gujarat'].split('|').length);
district_states['Haryana'] = 'Ambala|Bhiwani|Charkhi Dadri|Faridabad|Fatehabad|Gurgaon|Hisar|Jhajjar|Jind|Kaithal|Karnal|Kurukshetra|Mahendragarh|Nuh|Palwal|Panchkula|Panipat|Rewari|Rohtak|Sirsa|Sonipat|Yamunanagar';
console.log("all Haryana dist." + district_states['Haryana'].split('|').length);
district_states['Himachal Pradesh'] = 'Chamba|Kangra|Lahaul and Spiti|Kullu|Mandi|Hamirpur|Una|Bilaspur|Solan|Sirmaur|Shimla|Kinnaur';
console.log(district_states['Himachal Pradesh'].split('|').length);
district_states['Jammu/Kashmir'] = 'Doda|Jammu|Kathua|Kishtwar|Poonch|Rajouri|Ramban|Reasi|Samba|Udhampur|Anantnag|Bandipora|';
district_states['Jharkhand'] = '';
district_states['Karnataka'] = '';
district_states['Kerala'] = '';
district_states['Lakshadweep'] = '';
district_states['Madhya Pradesh'] = '';
district_states['Maharashtra'] = '';
district_states['Manipur'] = '';
district_states['Meghalaya'] = '';
district_states['Mizoram'] = '';
district_states['Nagaland'] = '';
district_states['Orissa'] = '';
district_states['Pondicherry'] = '';
district_states['Punjab'] = '';
district_states['Rajasthan'] = '';
district_states['Sikkim'] = '';
district_states['Tamil Nadu'] = '';
district_states['Tripura'] = '';
district_states['Uttaranchal'] = '';
district_states['Uttar Pradesh'] = 'Agra|Aligarh|Allahabad|Ambedkar Nagar|Amethi(Chatrapati Sahuji Mahraj Nagar)|Amroha (J.P. Nagar)|Auraiya|Azamgarh|Baghpat|Bahraich|Ballia|Balrampur|Banda|Barabanki|Bareilly|Basti|Bhadohi|Bijnor|Budaun|Bulandshahr|Chandauli|Chitrakoot|Deoria|Etah|Etawah|Faizabad|Farrukhabad|Fatehpur|Firozabad|Gautam Buddha Nagar|Ghaziabad|Ghazipur|Gonda|Gorakhpur|Hamirpur|Hapur(Panchsheel Nagar)|Hardoi|Hathras|Jalaun|Jaunpur|Jhansi|Kannauj|Kanpur Dehat|Kanpur Nagar|Kanshiram Nagar(Kasganj)|Kaushambi|Kushinagar(Padrauna)|Lakhimpur - Kheri|Lalitpur|Lucknow|Maharajganj|Mahoba|Mainpuri|Mathura|Mau|Meerut|Mirzapur|Moradabad|Muzaffarnagar|Pilibhit|Pratapgarh|RaeBareli|Rampur|Saharanpur|Sambhal(Bhim Nagar)|Sant Kabir Nagar|Shahjahanpur|Shamali(Prabuddh Nagar)|Shravasti|Siddharth Nagar|Sitapur|Sonbhadra|Sultanpur|Unnao|Varanasi';
district_states['West Bengal'] = '';

console.log(district_states['Uttar Pradesh'].split('|').length)

function setRegions() {
    for (region in countries)
        document.write('<option value="' + region + '">' + region + '</option>');
}

function set_country(oRegionSel, oCountrySel, oCity_StateSel) {
    var countryArr;
    oCountrySel.length = 0;
    oCity_StateSel.length = 0;
    var region = oRegionSel.options[oRegionSel.selectedIndex].text;
    if (countries[region]) {
        oCountrySel.disabled = false;
        oCity_StateSel.disabled = true;
        oCountrySel.options[0] = new Option('SELECT COUNTRY', '');
        countryArr = countries[region].split('|');
        for (var i = 0; i < countryArr.length; i++)
            oCountrySel.options[i + 1] = new Option(countryArr[i], countryArr[i]);
        // document.getElementById('txtregion').innerHTML = region;
        // document.getElementById('txtplacename').innerHTML = '';
    }
    else oCountrySel.disabled = true;
}

function set_city_state(oCountrySel, oCity_StateSel) {
    var city_stateArr;
    oCity_StateSel.length = 0;
    var country = oCountrySel.options[oCountrySel.selectedIndex].text;
    if (city_states[country]) {
        oCity_StateSel.disabled = false;
        oCity_StateSel.options[0] = new Option('Select state...', '');
        city_stateArr = city_states[country].split('|');
        for (var i = 0; i < city_stateArr.length; i++)
            oCity_StateSel.options[i + 1] = new Option(city_stateArr[i], city_stateArr[i]);
        // document.getElementById('txtplacename').innerHTML = country;
    }
    else oCity_StateSel.disabled = true;
}

function set_district_state(oCity_StateSel, oDistrict_state) {
    var district_stateArr;
    oDistrict_state.length = 0;
    var state = oCity_StateSel.options[oCity_StateSel.selectedIndex].text;
    if (district_states[state]) {
        oDistrict_state.disabled = false;
        oDistrict_state.options[0] = new Option('Select disrict...', '');
        district_stateArr = district_states[state].split('|');
        for (var i = 0; i < district_stateArr.length; i++)
            oDistrict_state.options[i + 1] = new Option(district_stateArr[i], district_stateArr[i]);
        // document.getElementById('txtplacename').innerHTML = state;
    }
    else oDistrict_state.disabled = true;
}

// function print_city_state(oCountrySel, oCity_StateSel, oDistrict_state) {
//     var country = oCountrySel.options[oCountrySel.selectedIndex].text;
//     var city_state = oCity_StateSel.options[oCity_StateSel.selectedIndex].text;
//     var dist_state = oDistrict_state.options[oDistrict_state.selectedIndex].text;
//     if (city_state && city_states[country].indexOf(city_state) != -1) {
//         document.getElementById('txtplacename').innerHTML = city_state + ', ' + country;
//     }
//     else if (city_state && city_states[country].indexOf(city_state) != -1)
//         if (dist_state && district_states[city_state].indexOf(dist_state) != -1) {
//             document.getElementById('txtplacename').innerHTML = city_state + ', ' + country + ',' + dist_state;
//         }
//         else {
//             document.getElementById('txtplacename').innerHTML = country;
//         }
// }


