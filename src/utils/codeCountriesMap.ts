const countryCodes = new Map();

countryCodes.set(1, ['United States of America', 'Ghana', 'Armenia']);
countryCodes.set(2, ['Saint Lucia', 'Republic of Korea', 'Sierra Leone']);  
countryCodes.set(3, ['Slovenia', 'Lithuania', 'Central African Republic']);
countryCodes.set(5, ['United Kingdom', 'Algeria', 'Lesotho']);
countryCodes.set(6, ['Sao Tome and Principe', 'Brunei Darussalam', 'Netherlands']);

countryCodes.set('a', ['Indonesia', 'Cocos (Keeling) Islands', 'Aruba']);
countryCodes.set('b', ['Egypt', 'Ethiopia', 'Marshall Islands']);
countryCodes.set('c', ['Spain', 'Montserrat', 'Estonia']);
countryCodes.set('e', ['Brazil', 'Colombia', 'Djibouti']);
countryCodes.set('f', ['Cyprus', 'Morocco', 'Israel']);  

countryCodes.set('h', ['Ireland', 'Liechtenstein', 'Cape Verde']);
countryCodes.set('j', ['Senegal', 'Haiti', 'Albania']);  
countryCodes.set('k', ['Gibraltar', 'Cuba', 'Anguilla']);
countryCodes.set('l', ['Lao People\'s Democratic Republic', 'Kuwait']);
countryCodes.set('m', ['Saint Pierre and Miquelon', 'Kiribati']);

countryCodes.set('n', ['Japan', 'Bolivia']);
countryCodes.set('o', ['Swaziland', 'Sudan']);

function getCountries(code : string) {
  return countryCodes.get(code) || []; 
}

function invertMap(map: Map<number | string, string[]>): Map<string, number | string> {
  const inverted = new Map<string, number | string>();

  Array.from(map).forEach(([key, values]) => {
    for (let val of values) {
      inverted.set(val, key);
    }
  });

  return inverted;
}

const inverted = invertMap(countryCodes);

export default function lookupCountryCode(country: string): string {
  return String(inverted.get(country)) || "";
}