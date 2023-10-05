const usedStorageElement = document.querySelector('.used-num');
const maxStorageElement = document.querySelector('.storage-max');
const storageUsedElement = document.getElementById('storage-used');
const usageLeftElement = document.getElementById('usage-left');
const storagePointElement = document.querySelector('.storage-point');

// Parsing the numerical values from the extracted elements
const usedStorage = parseInt(usedStorageElement.textContent); 
const maxStorage = parseInt(maxStorageElement.textContent); 


const percentageUsed = (usedStorage / maxStorage) * 100;


const usageLeft = maxStorage - usedStorage;

usageLeftElement.textContent = usageLeft;

storageUsedElement.style.width = `${percentageUsed}%`;

const animationDuration = 1.5;

const keyframesRule = `@keyframes expandWidth {
    from {
        width: 0%;
    }
    to {
        width: ${percentageUsed}%;
    }
}`;

const styleSheet = document.styleSheets[0]; 
styleSheet.insertRule(keyframesRule, styleSheet.cssRules.length);

storagePointElement.style.animation = `expandWidth ${animationDuration}s ease-in-out forwards`;
