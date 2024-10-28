const data = {
    "Abia": {
        "Aba South": [
            "Cloud Computing", "Cybersecurity", "Animation",
            "Data Analysis and Visualization", "UI/UX", "Quality Assurance",
            "Software Development", "AI/ML", "Game Development", "DevOps", "Product Management"
        ],
        "Umuahia North": [
            "Data Science", "Product Management", "DevOps", "Game Development"
        ]
    },
    "Adamawa": {
        "Yola North": [
            "Data Analysis & Visualization", "Software Development", "UI/UX", "DevOps", "Data Science",
            "Product Management", "Quality Assurance", "Animation", "AI/ML", "Cyber Security", "Cloud Computing", "Game Development"
        ],
        "Yola South": [
            "Data Science", "Product Management", "Data Analysis & Visualization", "Software Development", "UI/UX", "Quality Assurance", "AI/ML", "Animation", "Cloud Computing", "Cyber Security", "Game Development", "DevOps"
        ]
    },
    "Akwa Ibom": {
        "Uyo": [
            "Product Management", "Quality Assurance", "UI/UX", "Data Science", "Cyber Security",
            "DevOps", "AI/ML", "Data Analysis & Visualization", "Game Development", "Cloud Computing", "Software Development", "Animation"
        ]
    },
    "Anambra": {
        "Awka South": [
            "Software Development", "UI/UX", "Cyber Security", "Data Analysis & Visualization",
            "Game Development", "AI/ML", "Product Management", "Data Science", "Cloud Computing", "DevOps", "Animation", "Quality Assurance"
        ],
        "Onitsha North": [
            "AI/ML", "DevOps", "Quality Assurance", "Animation", "Cloud Computing", "Cyber Security", "Data Science", "Data Analysis & Visualization", "Software Development", "Game Development", "Product Management", "UI/UX"
        ]
    },
    "Bauchi": {
        "Bauchi": [
            "Cyber Security", "UI/UX", "Software Development", "Game Development", "Data Analysis & Visualization",
            "Quality Assurance", "Data Science", "Cloud Computing", "DevOps", "Product Management", "Animation", "AI/ML"
        ]
    },
    "Bayelsa": {
        "Yenegoa": [
            "Cyber Security", "UI/UX", "Game Development", "Quality Assurance", "Software Development",
            "Cloud Computing", "Animation", "Data Analysis & Visualization", "Data Science", "AI/ML", "Product Management", "DevOps"
        ]
    },
    "Benue": {
        "Makurdi": [
            "Cloud Computing", "Cyber Security", "Data Analysis & Visualization", "DevOps", "Quality Assurance",
            "Data Science", "UI/UX", "Animation", "AI/ML", "Software Development", "Product Management", "Game Development"
        ]
    },
    "Borno": {
        "Maiduguri": [
            "Cyber Security", "DevOps", "Game Development", "Animation", "Data Analysis & Visualization",
            "Cloud Computing", "Data Science", "UI/UX", "AI/ML", "Product Management", "Quality Assurance", "Software Development"
        ]
    },
    "Cross River": {
        "Calabar Municipality": [
            "AI/ML", "Cloud Computing", "Cyber Security", "Product Management",
            "UI/UX", "Data Analysis and Visualization", "Data Science", "Animation", "DevOps", "Game Development", "Software Development"
        ],
        "Calabar South": [
            "UI/UX", "Data Analysis & Visualization", "Data Science", "AI/ML", "Animation",
            "Product Management", "Cloud Computing", "DevOps", "Game Development", "Quality Assurance", "Software Development", "Cyber Security"
        ]
    },
    "Delta": {
        "Oshimili": [
            "Software Development", "Data Science", "UI/UX", "Data Analysis & Visualization", "Product Management",
            "AI/ML", "Animation", "Cloud Computing", "Cyber Security", "Quality Assurance", "DevOps", "Game Development"
        ],
        "Ughelli North": [
            "Cyber Security", "Product Management", "UI/UX", "DevOps", "Game Development", "Quality Assurance", "AI/ML", "Animation", "Cloud Computing"
        ],
        "Uvwie": [
            "Data Analysis & Visualization", "Software Development", "Game Development", "AI/ML", "Animation",
            "Cloud Computing", "DevOps", "Quality Assurance"
        ],
        "Warri South": [
            "AI/ML", "Animation", "Cloud Computing", "Data Science", "Cyber Security",
            "Product Management", "UI/UX"
        ]
    },
    "Ebonyi": {
        "Abakaliki": [
            "Quality Assurance", "Data Science", "UI/UX", "AI/ML", "Animation", "Data Analysis & Visualization",
            "Cyber Security", "Cloud Computing", "Product Management", "Game Development", "DevOps", "Software Development"
        ]
    },
    "Edo": {
        "Oredo": [
            "AI/ML", "Animation", "Cloud Computing", "Data Science", "DevOps", "Game Development",
            "Product Management", "Quality Assurance", "Software Development", "UI/UX", "Cyber Security", "Data Analysis & Visualization"
        ],
        "Ukpoba": [
            "Product Management", "Quality Assurance", "Software Development", "AI/ML", "Animation",
            "Cloud Computing", "UI/UX", "Data Science", "DevOps", "Game Development", "Cyber Security", "Data Analysis & Visualization"
        ]
    },
    "Ekiti": {
        "Ado": [
            "DevOps", "Game Development", "Cyber Security", "Data Science", "Quality Assurance",
            "Product Management", "Software Development", "AI/ML", "Animation", "Cloud Computing", "UI/UX", "Data Analysis & Visualization"
        ]
    },
    "Enugu": {
        "Enugu North": [
            "Cyber Security", "Cloud Computing", "Data Analysis & Visualization", "Software Development",
            "AI/ML", "Data Science", "Product Management", "Quality Assurance", "UI/UX", "Animation", "DevOps", "Game Development"
        ],
        "Enugu South": [
            "AI/ML", "Data Science", "Software Development", "Animation", "Quality Assurance",
            "Data Analysis & Visualization", "Game Development", "Cloud Computing", "DevOps", "Product Management", "Cyber Security"
        ]
    },
    "FCT": {
        "Abuja Municipal": [
            "Cyber Security", "Product Management", "AI/ML", "Software Development",
            "Data Science", "Quality Assurance", "Game Development", "Data Analysis & Visualization", "Animation", "DevOps", "Cloud Computing", "UI/UX"
        ]
    },
    "Gombe": {
        "Gombe": [
            "Software Development", "Data Analysis & Visualization", "Game Development", "DevOps",
            "Cyber Security", "AI/ML", "Cloud Computing", "Data Science", "Product Management", "UI/UX"
        ]
    },
    "Imo": {
        "Owerri North": [
            "Cyber Security", "Data Science", "Data Analysis & Visualization", "Product Management", "Software Development",
            "Animation", "AI/ML", "Cloud Computing", "DevOps", "Game Development", "UI/UX", "Quality Assurance"
        ],
        "Owerri West": [
            "AI/ML", "Cloud Computing", "Software Development", "Data Analysis & Visualization", "Data Science", "Quality Assurance",
            "DevOps", "Game Development", "Animation", "Product Management", "UI/UX"
        ],
        "Owerri Municipal": [
            "AI/ML", "Data Analysis & Visualization", "Data Science", "Game Development", "UI/UX",
            "Cyber Security", "Product Management", "Quality Assurance", "Software Development", "Cloud Computing", "DevOps"
        ]
    },
    Kaduna: {
        "Kaduna North": [
            "Data Science", "AI/ML", "Data Analysis & Visualization",
            "Product Management", "Animation", "Cyber Security",
            "Game Development", "Cloud Computing", "DevOps",
            "Software Development", "Quality Assurance", "UI/UX"
        ],
        "Kaduna South": [
            "Product Management", "Data Science", "Animation", "Game Development",
            "Cyber Security", "UI/UX", "AI/ML", "DevOps",
            "Quality Assurance", "Software Development",
            "Data Analysis & Visualization", "Cloud Computing"
        ]
    },
    Kano: {
        "Kano Municipal": [
            "Cyber Security", "Software Development", "Animation",
            "Game Development", "Data Science", "Data Analysis & Visualization",
            "Product Management", "Cloud Computing", "UI/UX",
            "DevOps", "AI/ML", "Quality Assurance"
        ],
        "Kumbotso": [
            "Software Development", "Animation", "Quality Assurance",
            "AI/ML", "DevOps", "Game Development", "Cyber Security",
            "Product Management", "Cloud Computing",
            "Data Analysis & Visualization", "Data Science", "UI/UX"
        ],
        "Tarauni": [
            "Cyber Security", "Cloud Computing", "Animation", "Data Science",
            "Software Development", "AI/ML", "Game Development",
            "Data Analysis & Visualization", "Product Management",
            "Quality Assurance", "UI/UX", "DevOps"
        ],
    "Nasarawa": [
            "Data Science", "Data Analysis & Visualization", "UI/UX",
            "Cyber Security", "Quality Assurance", "Product Management",
            "DevOps", "AI/ML", "Software Development", "Animation",
            "Cloud Computing", "Game Development"
        ],
    },
    
    Katsina: {
        "Katsina": [
            "Software Development", "UI/UX", "Cyber Security",
            "Cloud Computing", "DevOps", "Data Analysis & Visualization",
            "Game Development", "AI/ML", "Animation",
            "Quality Assurance", "Product Management", "Data Science"
        ]
    },
    Kebbi: {
        "Birnin Kebbi": [
            "Software Development", "Cloud Computing", "Animation",
            "DevOps", "Game Development", "Product Management",
            "Quality Assurance", "AI/ML", "Cyber Security",
            "Data Science", "UI/UX", "Data Analysis & Visualization"
        ]
    },
    Kogi: {
        "Lokoja": [
            "DevOps", "Game Development", "Cyber Security",
            "Cloud Computing", "Data Science", "AI/ML",
            "Product Management", "Quality Assurance", "UI/UX",
            "Data Analysis & Visualization", "Animation", "Software Development"
        ]
    },
    kwara: {
        "Ilorin East": [
            "AI/ML", "Animation", "Cloud Computing", "DevOps",
            "Game Development", "Cyber Security", "Data Analysis & Visualization",
            "Data Science", "Product Management", "Quality Assurance",
            "Software Development", "UI/UX"
        ],
        "Ilorin South": [
            "Product Management", "Software Development", "UI/UX",
            "AI/ML", "DevOps", "Game Development", "Animation",
            "Cloud Computing", "Cyber Security", "Data Analysis & Visualization",
            "Data Science", "Quality Assurance"
        ],
        "Ilorin West": [
            "AI/ML", "Animation", "Cloud Computing", "DevOps",
            "Game Development", "Cyber Security", "Data Analysis & Visualization",
            "Data Science", "Product Management", "Quality Assurance",
            "Software Development", "UI/UX"
        ]
    },

    "Jigawa": {
        "Dutse": [
            "AI/ML", "Data Science", "Product Management", "Cyber Security", "Quality Assurance",
           

        ]
    },
    Lagos: {
        "Agege": [
            "AI/ML", "Animation", "Cloud Computing", "Cyber Security",
            "Data Analysis & Visualization", "Data Science", "DevOps",
            "Product Management", "Quality Assurance", "Software Development",
            "UI/UX"
        ],
        "Alimosho": [
            "Quality Assurance", "Software Development", "UI/UX",
            "AI/ML", "Animation", "Cloud Computing",
            "Data Analysis & Visualization", "DevOps", "Data Science",
            "Product Management", "Cyber Security", "Game Development"
        ],
        "Amuwo-Odofin": [
            "Animation", "Cloud Computing", "DevOps", "Game Development",
            "AI/ML", "Cyber Security", "Data Analysis & Visualization",
            "Data Science", "Product Management", "Quality Assurance",
            "Software Development", "UI/UX"
        ],
        "Eti-Osa": [
            "Data Analysis & Visualization", "Data Science", "UI/UX",
            "AI/ML", "Animation", "Cloud Computing",
            "Cyber Security", "DevOps", "Game Development",
            "Product Management", "Quality Assurance", "Software Development"
        ],
        "Ibeju/Lekki": [
            "AI/ML", "Animation", "Cloud Computing", "DevOps",
            "Game Development", "Quality Assurance", "Cyber Security",
            "Data Analysis & Visualization", "Data Science",
            "Product Management", "Software Development", "UI/UX"
        ],
        "Ifako-Ijaye": [
            "AI/ML", "Animation", "Cloud Computing", "Game Development",
            "Cyber Security", "Data Analysis & Visualization", "Data Science",
            "DevOps", "Product Management", "Quality Assurance",
            "Software Development", "UI/UX"
        ],
        "Ikeja": [
            "AI/ML", "Cloud Computing", "Cyber Security",
            "Data Analysis & Visualization", "Data Science", "DevOps",
            "Game Development", "Quality Assurance", "Software Development",
            "Animation", "Product Management", "UI/UX"
        ],
        "Ikorodu": [
            "AI/ML", "Animation", "Cloud Computing", "DevOps",
            "Game Development", "Quality Assurance", "Cyber Security",
            "Data Analysis & Visualization", "Data Science",
            "Product Management", "Software Development", "UI/UX"
        ],
        "Lagos Mainland": [
            "Cyber Security", "Data Analysis & Visualization", "Data Science",
            "Product Management", "Quality Assurance", "Software Development",
            "UI/UX", "AI/ML", "Animation", "Cloud Computing",
            "DevOps", "Game Development"
        ],
        "Mushin": [
            "Cloud Computing", "DevOps", "AI/ML", "Software Development",
            "Cyber Security", "Animation", "Game Development",
            "Data Analysis & Visualization", "Data Science",
            "Product Management", "UI/UX"
        ],
        "Ojo": [
            "DevOps", "Quality Assurance", "AI/ML", "Animation",
            "Cloud Computing", "Cyber Security", "Data Analysis & Visualization",
            "Data Science", "Game Development", "Product Management",
            "Software Development", "UI/UX"
        ],
        "Oshodi-Isolo": [
            "AI/ML", "Cloud Computing", "Cyber Security",
            "Data Analysis & Visualization", "Data Science", "DevOps",
            "Product Management", "Quality Assurance", "Software Development",
            "UI/UX", "Animation", "Game Development"
        ],
        "Shomolu": [
            "Cyber Security", "Data Analysis & Visualization", "Data Science",
            "Product Management", "Software Development", "UI/UX",
            "AI/ML", "Animation", "Cloud Computing", "DevOps",
            "Game Development", "Quality Assurance"
        ],
        "Surulere": [
            "Cyber Security", "Data Analysis & Visualization", "Data Science",
            "Product Management", "Software Development", "UI/UX",
            "AI/ML", "Animation", "Cloud Computing", "DevOps",
            "Game Development", "Quality Assurance"
        ],
    },
    Nasarawa: {
        "Keffi": [
            "Data Analysis & Visualization", "Data Science", "Product Management",
            "Software Development", "UI/UX", "Game Development",
            "AI/ML", "Animation", "Cloud Computing", "DevOps",
            "Quality Assurance"
        ],
        "Lafia": [
            "Product Management", "Software Development", "UI/UX",
            "Game Development", "Quality Assurance", "AI/ML",
            "Cloud Computing", "Cyber Security", "Data Analysis & Visualization",
            "Data Science", "Animation", "DevOps"
        ]
    },
    Niger: {
        "Bida": [
            "AI/ML", "UI/UX", "Data Analysis & Visualization",
            "Cyber Security", "Quality Assurance", "Animation",
            "Cloud Computing", "Game Development"
        ],
        "Suleja": [
            "Data Science", "Software Development", "AI/ML",
            "Animation", "Cloud Computing", "Cyber Security",
            "Data Analysis & Visualization", "DevOps",
            "Game Development", "Product Management", "Quality Assurance", "UI/UX"
        ]
    },
    Ogun: {
        "Abeokuta North": [
            "Cyber Security", "Product Management", "AI/ML",
            "Animation", "Cloud Computing", "Data Science",
            "DevOps", "Game Development", "Data Analysis & Visualization",
            "Quality Assurance", "Software Development", "UI/UX"
        ],
        "Abeokuta South": [
            "Cyber Security", "Animation", "Game Development",
            "DevOps", "Cloud Computing", "AI/ML",
            "Data Analysis & Visualization", "Data Science",
            "Product Management", "Quality Assurance", "Software Development", "UI/UX"
        ],
        "Obafemi-Owode": [
            "Software Development", "Data Science", "Animation",
            "Cloud Computing", "Cyber Security", "Data Analysis & Visualization",
            "UI/UX", "AI/ML", "DevOps", "Game Development",
            "Product Management", "Quality Assurance"
        ]
    },
    Ondo: {
        "Akure South": [
            "AI/ML", "Cyber Security", "UI/UX", "Animation",
            "Game Development", "Cloud Computing", "DevOps",
            "Data Analysis & Visualization", "Software Development",
            "Data Science", "Product Management", "Quality Assurance"
        ],
        "Owo": [
            "Data Analysis & Visualization", "Data Science", "Product Management",
            "Software Development", "UI/UX", "AI/ML", "Animation",
            "Cloud Computing", "Cyber Security", "DevOps",
            "Game Development", "Quality Assurance"
        ]
    },
    Osun: {
        "Ife Central": [
            "Cloud Computing", "Cyber Security", "Data Analysis & Visualization",
            "DevOps", "Animation", "Quality Assurance", "Game Development",
            "Product Management", "Software Development", "UI/UX",
            "Data Science", "AI/ML"
        ],
        "Ife East": [
            "Cyber Security", "Data Analysis & Visualization", "Data Science",
            "Product Management", "Quality Assurance", "Software Development",
            "UI/UX", "AI/ML", "Animation", "Cloud Computing",
            "DevOps", "Game Development"
        ],
        "Osogbo": [
            "Software Development", "AI/ML", "Cloud Computing",
            "DevOps", "Cyber Security", "Data Analysis & Visualization",
            "Animation", "Game Development"
        ]
    },
    Oyo: {

        "Ibadan North": [
            "AI/ML", "Animation", "Cyber Security", "UI/UX",
            "Product Management", "Quality Assurance", "Software Development",
            "Cloud Computing", "DevOps", "Data Analysis & Visualization",
            "Data Science", "Game Development"
        ],
        "Ibadan North East": [
            "AI/ML", "DevOps", "Game Development", "Animation",
            "Cloud Computing", "Cyber Security", "Data Analysis & Visualization",
            "Data Science", "Product Management", "Quality Assurance",
            "Software Development", "UI/UX"
        ],
        "Ibadan North West": [
            "AI/ML", "Data Analysis & Visualization", "Data Science",
            "Product Management", "Software Development", "UI/UX",
            "Animation", "Cloud Computing", "Cyber Security",
            "DevOps", "Game Development", "Quality Assurance"
        ],
        "Ibadan South East": [
            "Cyber Security", "Data Analysis & Visualization", "Data Science",
            "Product Management", "Software Development", "UI/UX",
            "AI/ML", "Animation", "Cloud Computing", "DevOps",
            "Game Development", "Quality Assurance"
        ],
        "Ibadan South West": [
            "Product Management", "Quality Assurance", "UI/UX",
            "Animation", "Cloud Computing", "Cyber Security",
            "DevOps", "Game Development", "AI/ML",
            "Data Analysis & Visualization", "Data Science", "Software Development"
        ],
        "Oluyole": [
            "AI/ML", "Cyber Security", "Data Analysis & Visualization",
            "Data Science", "Animation", "Cloud Computing",
            "Product Management", "Quality Assurance", "Software Development",
            "UI/UX", "DevOps", "Game Development"
        ],
    },
    Plateau: {
        "Jos North": [
            "Cyber Security", "Data Analysis & Visualization", "AI/ML",
            "Cloud Computing", "Product Management", "Data Science",
            "Game Development", "Quality Assurance", "Software Development",
            "UI/UX", "Animation", "DevOps"
        ],
        "Jos South": [
            "Product Management", "Quality Assurance", "Software Development",
            "UI/UX", "Animation", "DevOps", "Game Development",
            "Data Analysis & Visualization", "Cyber Security"
        ],
    },
    Rivers: {
        "Obio/Akpor": [
            "Data Analysis & Visualization", "Quality Assurance",
            "Software Development", "Game Development", "Cyber Security",
            "Animation", "DevOps", "UI/UX", "AI/ML", "Data Science"
        ],
        "Port-Harcourt": [
            "Product Management", "Cloud Computing", "UI/UX",
            "Data Analysis & Visualization", "Animation", "Quality Assurance",
            "Software Development", "Cyber Security", "Data Science",
            "AI/ML", "DevOps", "Game Development"
        ],
    },
    Sokoto: {
        "Port-Harcourt": [
            "UI/UX", "Product Management", "Data Analysis & Visualization",
            "Cloud Computing", "Animation", "Quality Assurance",
            "Software Development", "Cyber Security", "Data Science",
            "AI/ML", "DevOps", "Game Development"
        ],
        "Sokoto South": [
            "Software Development", "Product Management", "DevOps",
            "Game Development", "UI/UX", "Quality Assurance", "AI/ML",
            "Animation", "Cloud Computing", "Cyber Security"
        ],
    },
    Taraba: {
        "Wamako": [
            "AI/ML", "Cloud Computing", "Cyber Security", "Data Science",
            "Software Development", "DevOps", "UI/UX", "Game Development",
            "Animation", "Product Management", "Quality Assurance",
            "Data Analysis & Visualization"
        ],
        "Bali": [
            "Cloud Computing", "AI/ML", "Cyber Security", "Data Analysis & Visualization",
            "Data Science", "Product Management", "Quality Assurance",
            "Software Development", "Animation"
        ],
        "Jalingo": [
            "Product Management", "Animation", "Game Development",
            "Software Development", "Cyber Security", "AI/ML",
            "UI/UX", "DevOps", "Data Science", "Quality Assurance",
            "Data Analysis & Visualization", "Cloud Computing"
        ],
    },
    Yobe: {
        "Damaturu": [
            "Cyber Security", "Data Analysis & Visualization", "AI/ML",
            "Quality Assurance", "UI/UX", "Game Development",
            "Data Science", "Product Management", "Software Development",
            "Cloud Computing", "Animation", "DevOps"
        ],
        "Nguru": [
            "Quality Assurance", "Software Development", "UI/UX", "Data Science"
        ],
    },
    Zamfara: {
        "Potiskum": [
            "Cloud Computing", "Data Analysis & Visualization", "Cyber Security"
        ],
        "Gusau": [
            "Cyber Security", "Data Analysis & Visualization", "DevOps",
            "Game Development", "Product Management", "AI/ML",
            "Software Development", "Quality Assurance",
            "UI/UX", "Data Science", "Animation", "Cloud Computing"
        ],
    },
};












// Populate states
Object.keys(data).forEach(state => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
});

// Handle state selection
stateSelect.addEventListener('change', function() {
    const selectedState = this.value;
    lgaSelect.innerHTML = '<option value="">--Select LGA--</option>';
    courseList.innerHTML = '';

    if (selectedState) {
        const lgas = Object.keys(data[selectedState]);
        lgas.forEach(lga => {
            const option = document.createElement('option');
            option.value = lga;
            option.textContent = lga;
            lgaSelect.appendChild(option);
        });
        lgaSelect.disabled = false;
    } else {
        lgaSelect.disabled = true;
    }
});

// Handle LGA selection
lgaSelect.addEventListener('change', function() {
    const selectedState = stateSelect.value;
    const selectedLGA = this.value;

    if (selectedLGA) {
        const courses = data[selectedState][selectedLGA];
        courseList.innerHTML = `<h3>Courses offered in ${selectedLGA}, ${selectedState}:</h3><ul>${courses.map(course => `<li>${course}</li>`).join('')}</ul>`;
    } else {
        courseList.innerHTML = '';
    }
});
