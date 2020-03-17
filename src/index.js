const NUMBER_TABLE = {
    '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five',
    '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten',
    '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen',
    '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen', '20': 'twenty'
};
function callbackF(i, array) {
    switch (array.length) {
        case 1:
            array[i] = NUMBER_TABLE[array[i]];
            break;
        case 2:
            if (i == 0) {
                array[i] > 2 ?
                    array[i] = NUMBER_TABLE['1' + array[i]].replace(/teen/gi, '') + 'ty' : array[i] == 2 ?
                        array[i] = NUMBER_TABLE[array[i] + '0'] : array[i] = '';
                array[i] = array[i].replace(/u/gi, '');
            } else {
                array[0] < 2 ? array[i] = NUMBER_TABLE['1' + array[i]] :
                    array[i] = NUMBER_TABLE[array[i]];
            }
            break;
        case 3:
            alert('yes');
            break;
        default:
            alert('shoto poshlo netak');
    }
    return array[i];
}

module.exports = function toReadable(number) {

    let result = String(number);
    let result_hundred = '';
    if (result.length >= 3) {
        result_hundred = NUMBER_TABLE[result[0]] + ' hundred';
        result = result.slice(1);
    }

    result = result.split('');

    for (let l = 0; l < result.length; l++) {
        result[l] = callbackF(l, result);
    }

    return result_hundred != '' ? result_hundred + ' ' + result.join(' ').trim() : result.join(' ').trim();
}
