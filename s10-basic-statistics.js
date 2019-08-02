function processData(input) {
    input = input.split('\n');
    const length = parseInt(input[0]);
    const array = input[1].split(' ').map((n) => parseInt(n)).sort((a, b) => a - b);

    const round = (value, precision) => {
        const multiplier = Math.pow(10, precision || 0);

        return (Math.round(value * multiplier) / multiplier).toFixed(1);
    };
    
    const meanFn = (numbers) => round(numbers.reduce((acc, curr) => acc + curr) / numbers.length, 1);

    const medianFn = (numbers) => {
        const target = length / 2;

        return round((length % 2 === 0) ? (numbers[target-1] + numbers[target]) / 2 : numbers[Math.floor(target)], 1);
    };
    
    const modeFn = (numbers) => {
        const count = [];
        let position = 0;

        // Count the number of occurences for each unique number
        while (position < length) {
            const pos = count.find((n) => n.number === numbers[position]) || count[count.push({ number: numbers[position], count: 0 }) - 1];
            let hard = false;

            for (let j = position; j <= length; j++) {
                if (numbers[position] === numbers[j]) {
                    pos.count++;
                } else {
                    position = j;
                    hard = true;
                    break;
                }
            }

            !hard && position++;
        }

        // Sort by number occurences
        count.sort((a, b) => b.count - a.count);

        // Get all the numbers with the highest count
        let a = [];
        for (let i = 0; i < count.length - 1; i++) {
            a.push(count[i].number);

            if (count[i+1].count !== count[i].count) {
                break;
            }
        }

        // Sort the highest numbers
        a.sort((a, b) => a - b);

        // Return only the smallest
        return a[0];
    };
    
    console.log(`${meanFn(array)}\n${medianFn(array)}\n${modeFn(array)}`);   
}

const test = [
`10
64630 11735 14216 99233 14470 4978 73429 38120 51135 67060`,
`10
4978 11735 14216 14470 38120 51135 64630 67060 73429 99233`,
`100
33664 35702 7049 74334 5725 12090 62774 1149 81848 84123 17698 42269 42457 80934 83409 19075 87353 63407 20669 36812 44473 46723 41091 54903 1749 88514 65760 47322 17365 24779 20301 97839 69612 13975 89694 14585 37259 38361 13720 18729 8283 3886 26681 8005 48460 13101 52287 44583 878 16133 6334 21592 87253 34537 10974 87484 36937 79336 78434 76977 75040 77796 62173 63217 68712 60934 88017 3811 41145 57471 6887 74612 78798 7308 88094 43245 57157 86406 2922 42919 74375 40076 26030 65306 94610 11923 90367 5603 52189 45765 44982 27234 77150 75570 40800 22550 64134 4029 13841 91097`
];

test.forEach((item) => processData(item));
