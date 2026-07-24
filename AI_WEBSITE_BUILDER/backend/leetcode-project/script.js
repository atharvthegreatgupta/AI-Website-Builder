document.addEventListener('DOMContentLoaded', () => {
    const codeEditor = document.getElementById('codeEditor');
    const inputEditor = document.getElementById('inputEditor');
    const runButton = document.getElementById('runButton');
    const outputConsole = document.getElementById('outputConsole');

    runButton.addEventListener('click', () => {
        const userCode = codeEditor.value;
        const inputString = inputEditor.value;

        outputConsole.textContent = 'Running...';
        outputConsole.style.color = '#333';

        try {
            // Attempt to parse input, assuming format like: [1,2,3], 4
            const parts = inputString.split(/],\s*/);
            let nums = [];
            let target;

            if (parts.length === 2) {
                // Extract nums part, remove leading '[' and trailing ']
                const numsStr = parts[0] + ']'; 
                nums = JSON.parse(numsStr);
                target = parseInt(parts[1]);

                if (isNaN(target)) {
                    throw new Error('Invalid target value. Please provide an integer.');
                }
            } else if (inputString.trim() === '') {
                nums = [];
                target = 0;
            } else {
                throw new Error('Invalid input format. Expected: [array], target');
            }
            
            // Dynamically create a function from the user's code
            // This is a simplified and **unsafe** way to run user code.
            // For a real LeetCode environment, a secure sandbox would be required.
            const func = new Function('nums', 'target', userCode + '\nreturn twoSum(nums, target);');
            const result = func(nums, target);
            
            outputConsole.textContent = `Input: nums = ${JSON.stringify(nums)}, target = ${target}\nOutput: ${JSON.stringify(result)}`;
            outputConsole.style.color = '#000';

        } catch (error) {
            outputConsole.textContent = `Error: ${error.message}`;
            outputConsole.style.color = 'red';
            console.error(error);
        }
    });

    // Set a default value for the code editor
    codeEditor.value = `function twoSum(nums, target) {
    // For this mock-up, we'll return a fixed dummy result.
    // In a real scenario, you'd implement the logic here.

    // Example of a correct but simplified logic for [2,7,11,15], 9
    if (JSON.stringify(nums) === JSON.stringify([2,7,11,15]) && target === 9) {
        return [0, 1];
    }

    // Fallback for other inputs
    return []; 
}`; 

    // Set a default value for the input editor
    inputEditor.value = `[2,7,11,15], 9`;
});
