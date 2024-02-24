
var reverseWords = function(s) {
    const words = [];
        let left = 0, right = s.length - 1;
        while(left <= right && s[left] === ' '){
            left++;
        }
        while(left <= right && s[right] === ' '){
            right--;
        }
    
        let word = '';
        for(let i = left; i <= right; i++){
            if(s[i] === ' '){
                if(word.length > 0){
                    words.push(word);
                    word = '';
                } 
            } else {
                    word += s[i];
                }
        }
        if(word.length > 0){
            words.push(word);
        }
        return words.reverse().join(' ');
    };