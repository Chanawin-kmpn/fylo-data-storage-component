const usedStorageElement = document.querySelector('.used-num');
const maxStorageElement = document.querySelector('.storage-max');
const storageUsedElement = document.getElementById('storage-used');
var usageLeftElement = document.getElementById('usage-left');
// Parsing the numerical values from the extracted elements
const usedStorage = parseInt(usedStorageElement.textContent); // Extracted as 815
const maxStorage = parseInt(maxStorageElement.textContent); // Extracted as 1000

// Calculating the percentage of used storage
const percentageUsed = (usedStorage / maxStorage) * 100;

// Calculating usage left
const usageLeft = maxStorage - usedStorage;

// Setting the text of usage-left element based on the usageLeft
usageLeftElement.textContent = usageLeft;
// Setting the width of storage-used element based on the calculated percentage
storageUsedElement.style.width = `${percentageUsed}%`;