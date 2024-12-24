let countries = [
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola",
    "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei Darussalam", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
    "Cape Verde", "Central African Republic", "Chad", "Chile", "China Mainland", "China",
    "Christmas Island", "Cocos Islands", "Colombia", "Comoros", "Congo-Brazzaville", "Congo-Kinshasa",
    "Cook Islands", "Costa Rica", "Cote d-Ivoire", "Croatia", "Cuba", "Cyprus",
    "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
    "Estonia", "Eswatini", "Ethiopia", "Falkland Islands", "Federated States of Micronesia", "Fiji",
    "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia",
    "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada",
    "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
    "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
    "Malta", "Martinique", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
    "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia",
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island",
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Republic of the Sudan", "Romania", "Russia",
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Samoa", "San Marino", "São Tomé and Príncipe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "St. Vincent and the Grenadines",
    "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Wallis and Futuna Islands", "Western Sahara",
    "Yemen", "Zambia", "Zimbabwe"
];
let container = document.querySelector('.container');
let select8tn = container.querySelector('.select-option');
let dropDownList = container.querySelector('.list-search-container');
let searchInput = container.querySelector('#search');
let lists = dropDownList.querySelector('.list');

select8tn.addEventListener('click', ()=>{
    container.classList.toggle('active');
})

function addcountries(selectedCountry){
    lists.innerHTML="";
    countries.forEach((country)=>{
        let isSelected = selectedCountry==country?"selected":"";
        let listItem = '<li class="' + isSelected + '">' + country + '</li>';
        lists.insertAdjacentHTML('beforeend', listItem);
    })
    addClickEventToLi();
}
addcountries();

function addClickEventToLi(){
    lists.querySelectorAll('li').forEach(listItem=>{
        listItem.addEventListener('click', ()=>{
            updateChoseaCountry(listItem)
        })
    })
}

function updateChoseaCountry(listItem){
    searchInput.value = "";
    select8tn.firstElementChild.innerHTML = listItem.innerHTML;
    container.classList.remove('active')
    addcountries(listItem.innerHTML);
}

searchInput.addEventListener('keyup', ()=>{
    let searchInputValue =searchInput.value.toLowerCase();
    let filtercountries = countries.filter(country=>{
        return country.toLocaleLowerCase().startsWith(searchInputValue);
    }).map(country=>{
        return '<li>' + country + '</li>';
    }).join("");
    lists.innerHTML = filtercountries;
    addClickEventToLi();
})