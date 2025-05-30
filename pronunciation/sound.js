function joinSounds(map) {
    this.map = map;
    this.audio = /* new window.AudioContext() || new window.webkitAudioContext(); */new Audio();
    this.audioArr = [];
}
joinSounds.prototype = {
    /**
     * 
     * @param {string} strparam
     */
    fromstr: function (strparam) {
        var rtv = '';
        var rtarr = [];
        strparam = strparam + '';
        strparam = strparam.toLowerCase().replaceAll(`'`, '')/* .replaceAll('sh', '|sh|').replaceAll('ch', '|ch|').replaceAll('ae', '|ae|').replaceAll('oe', '|oe|').replaceAll('tch', '|tch|').replaceAll('pp', '|pp|').replaceAll('kk', '|kk|').replaceAll('tt', '|tt|').replaceAll('ss', '|ss|'); */
        function getsubstr(str, ip, n) {
            var rtv0 = '';
            for (var i = ip; i < n; i++) {
                rtv0 += str[i];
            }
            return rtv0;
        }
        for (var i = 0; i < strparam.length; i++) {

            if (strparam[i] + strparam[i + 1] + strparam[i + 2] === 'tch') {
                rtarr.push(this.map['tch']);
                i += 2;
                continue;
            } else if (getsubstr(strparam, i, 2) === 'ch') {
                rtarr.push(this.map['ch']);
                i += 1;
                continue;
            } else if (getsubstr(strparam, i, 2) === 'ae') {
                rtarr.push(this.map['ae']);
                i += 1;
                continue;
            } else if (getsubstr(strparam, i, 2) === 'oe') {
                rtarr.push(this.map['oe']);
                i += 1;
                continue;
            } else if (getsubstr(strparam, i, 2) === 'tt') {
                rtarr.push(this.map['tt']);
                i += 1;
                continue;
            } else if (getsubstr(strparam, i, 2) === 'kk') {
                rtarr.push(this.map['kk']);
                i += 1;
                continue;
            } else if (getsubstr(strparam, i, 2) === 'pp') {
                rtarr.push(this.map['pp']);
                i += 1;
                continue;
            } else if (getsubstr(strparam, i, 2) === 'ss') {
                rtarr.push(this.map['ss']);
                i += 1;
                continue;
            } else if (getsubstr(strparam, i, 2) === 'ŭi') {
                rtarr.push(this.map['ŭi']);
                i += 1;
                continue;
            } else if (getsubstr(strparam, i, 2) === 'ng') {
                rtarr.push(this.map['ng']);
                i += 1;
                continue;
            }
            rtarr.push(this.map[strparam[i]]);
        }
        this.audioArr = rtarr;
        return rtarr;
    },
    playAudio: function () {
        for (var i = 0; i < this.audioArr.length; i++) {
            //this.audio.pause();
            if (this.audioArr[i] instanceof Array) {
                this.audio.src = './src/audio/mp3/' + this.audioArr[i][0] + '.mp3';
                setTimeout(() => {
                    this.audio.play();
                }, 10);
                setTimeout(() => {
                    this.audio.pause();
                    this.audio.src = './src/audio/mp3/' + this.audioArr[i][1] + '.mp3';
                }, this.audioArr[i][0].dur || 100);
                setTimeout(() => {
                    this.audio.play();
                }, this.audioArr[i][0].dur + 10 || 110);
                setTimeout(() => {
                    this.audio.pause();
                }, this.audioArr[i][0].dur + this.audioArr[i][1].dur || 200);
                continue;
            }
            this.audio.src = './src/audio/mp3/' + this.audioArr[i] + '.mp3';
            setTimeout(() => {
                this.audio.play();
            }, 10);
            setTimeout(() => {
                this.audio.pause();
            }, this.audioArr[i].dur || 100);
        }
    },
}
var player = new joinSounds({
    'k': 'Voiceless_velar_plosive',
    'g': 'Voiced_velar_plosive',
    'n': 'Alveolar_nasal',
    't': 'Voiceless_alveolar_plosive',
    'd': 'Voiced_alveolar_plosive',
    'r': 'Alveolar_tap',
    'l': 'Retroflex_lateral_approximant',
    'm': 'Bilabial_nasal',
    'p': 'Voiceless_bilabial_plosive',
    'b': 'Voiced_bilabial_plosive',
    's': 'Voiceless_alveolar_fricative',
    'ch': 'Voiceless_alveolo-palatal_affricate',
    'j': 'Voiced_alveolo-palatal_affricate',
    'h': 'Voiceless_glottal_fricative',
    'a': 'Open_back_unrounded_vowel',
    'y': 'Palatal_approximant',
    'ŏ': 'Mid-central_vowel',
    'o': 'Close-mid_back_rounded_vowel',
    'u': 'Close_back_rounded_vowel',
    'ŭ': 'Close_back_unrounded_vowel',
    'i': 'Close_front_unrounded_vowel',
    'ë': 'Close-mid_front_unrounded_vowel',
    'e': 'Close-mid_front_unrounded_vowel',
    'ae': 'Near-open_front_unrounded_vowel',
    'oe': 'Close-mid_front_rounded_vowel',
    'ŭi': ['Close_back_unrounded_vowel', 'Close_front_unrounded_vowel'],
    'ng': 'Velar_nasal',
});
