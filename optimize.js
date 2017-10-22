// (C) 2015 Tomasz Błachut
require('shelljs/global');

var courses = {
    "Analiza matematyczna II": "Analiza",
    "Analiza matematyczna I": "Analiza",
    "Fizyka II": "Fizyka",
    "Fizyka I": "Fizyka",
    "Wychowanie fizyczne III": "WF",
    "Wychowanie fizyczne II": "Basen",
    "Wychowanie fizyczne I": "WF",
    "Statystyka i opracowanie danych": "Statystyka",
    "Algorytmy i struktury danych": "AiSD",
    "Język angielski": "Angielski",
    "Sieci komputerowe": "Sieci",
    "Programowanie w Java": "Java",
    "Grafika komputerowa": "Grafika",
    "Inżynieria internetu": "Web",
    "Inżynieria oprogramowania": "IO",
    "Metoda elementów skończonych": "MES",
    "Podstawy sztucznej inteligencji": "PSI",
    "Programowanie równoległe": "Równoległe",
    "Wymiana ciepła i masy": "WCiM",
    "Internet Engineering": "IE",
    "Advanced programming in C": "C",
    "Projektowanie Systemów Komputerowych": "PSK",
    "Obliczenia Inżynierskie w Matlabie": "Matlab",
    "Modelowanie wieloskalowe": "Wieloskalowe",
    "Marketing internetowy": "Marketing",
    "CAD / CAM": "CAD",
    "Logistyka w hutnictwie": "Logistyka",
    "Systemy wbudowane": "Wbudowane",
    "Badanie operacyjne i logistyka": "BOiL",
    "Inżynieria wiedzy i systemy ekspertowe": "IWiSE",
    "Programy symulacyjne MES": "MES",
};

var text = cat('plan_zajec.ics');

for (var prop in courses) {
    echo(prop + ' --> ' + courses[prop]);
    text = text.replace(new RegExp(prop, "g"), courses[prop]);
}

// usun tytuly i zduplikowana lokalizacje
text = text.replace(/Prowadzący: (?:mgr |inż. |prof. |dr |hab. )*(.*?), Sala.*/g,"$1");

// znormalizuj format lokalizacji
text = text.replace(/LOCATION:([A-Z])-?(\d+) - (\w+) *(?:\1-?\2)?/gi, "LOCATION:$1$2 - $3");
text = text.replace(/U-2  - sala amfiteatralna/g, "U2");
text = text.replace(/U-11Basen/g, "U11");
text = text.replace(/U-12 -   Hala/g, "U12");

text.to('plan_zajec_plus.ics');
