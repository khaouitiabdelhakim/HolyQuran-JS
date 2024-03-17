# HolyQuran JavaScript Library

The HolyQuran JavaScript Library provides easy access to comprehensive Quranic data for JavaScript applications. It enables developers to seamlessly incorporate Surah details, including name, type, English name, number of verses, words, and letters, into their projects.

![HolyQuran](https://github.com/khaouitiabdelhakim/HolyQuran/blob/master/HolyQuran.png)

```
If you find this library useful or it has helped you,
please consider leaving a ⭐️, or even following my GitHub account.
Your support motivates me to continue providing helpful resources.
Thank you for your appreciation! 🌟🚀💖😊👍

If you'd like to support further, consider buying me a coffee:
```
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee--yellow.svg?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/kh.abdelhakim)

## Example Usage

```javascript
// Example of accessing the 3rd verse of the 4th Surah in the Holy Quran
const quran = require('holy-quran');

const hasfsHolyQuran = quran.HolyQuranHafsVersion;
const thirdVerseFourthSurah = hasfsHolyQuran[3]["verses"][2];
console.log(thirdVerseFourthSurah);

// Example of accessing the 4th english name
const englishName = hasfsHolyQuran[3]["englishName"];
console.log(englishName);
// Al-Nesaa

// Example of accessing the 3rd verse of the 4th Surah in the Holy Quran but in German
const germanHolyQuran = quran.QuranGerman;
const thirdVerseFourthSurahGerman = germanHolyQuran[3][2];
console.log(thirdVerseFourthSurahGerman);

// Und wenn ihr befürchtet, nicht gerecht hinsichtlich der Waisen zu handeln, dann heiratet, was euch an Frauen gut scheint, zwei, 
// drei oder vier. Wenn ihr aber befürchtet, nicht gerecht zu handeln, dann (nur) eine oder was eure rechte Hand besitzt. Das ist eher geeignet, daß ihr nicht ungerecht seid.

```

## Surah sample


```json
{
    name: "الفلق",
    type: "مكيّة",
    englishName: "Al-Falak",
    number: 113,
    numberOfVerses: 5,
    numberOfWords: 23,
    numberOfLetters: 71,
    verses: [
      "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      "مِن شَرِّ مَا خَلَقَ",
      "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
      "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    ],
  }
```

## Features

- Access detailed Surah information including name, type, English name, number of verses, words, and letters.
- Retrieve specific verses of Surahs easily.
- Translation available in 49 world languages.

## Supported Languages for Translation

Russian, Chinese, Hindi, Spanish, Portuguese, Bengali, Urdu, Italian, Vietnamese, Turkish, Thai, Polish, German, Dutch, Icelandic, Hausa, Albanian, Persian, Azerbaijani, Swahili, Tajik, Tamil, Pashto, Malayalam, Malay, Sinhala, Amharic, Kurdish (Sorani), Bulgarian, Kazakh, Filipino, Sindhi, Korean, Japanese, Swedish, Norwegian, Somali, Croatian, Yoruba, Fulani, Tatar, Uyghur, Kyrgyz, Punjabi, Javanese, Telugu


## Installation

### Step 1: Install via npm

```bash
npm i holy-quran
```

### Step 2: Import in your project

```javascript
const quran = require('holy-quran');
```

## Contribution

This project is open to contributions. Feel free to contribute to the development of this library by forking the repository, making your changes, and creating pull requests.

## License

This project is licensed under the MIT License.

```
Copyright 2024 KHAOUITI ABDELHAKIM

Licensed under the MIT License
You may obtain a copy of the License at

http://opensource.org/licenses/MIT

Unless required by applicable law or agreed to in writing, software
distributed under the MIT License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the MIT License.

made with love 💖 - KHAOUITI Apps 2024
```

This README provides an overview of the HolyQuran JavaScript Library and instructions for usage, installation, and contribution.
