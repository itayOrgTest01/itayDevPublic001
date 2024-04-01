

const myObj = {
    names: ['John', 'Jane', 'Jack'],
}


async function processItem2(item) {
    // Simulate an asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 5 seconds
  
    if (item === 4) {
      throw new Error('Item 4 failed.');
    }
  
    return true;
  }

async function  processItems (items) {
    for (const item of arr) {
        try{
            if (item === 2) {
              continue; // Exit the function if item is 3
            }
            await processItem2(item);
            console.log(item);
          } catch(err) {
            throw(err);
        }
  }
  
}
  processItems(arr);
  console.log('Function execution finished.');