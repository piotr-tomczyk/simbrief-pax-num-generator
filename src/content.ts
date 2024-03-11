const waitForElementToLoad = (selector: string): Promise<Element> => {
    return new Promise<Element>((resolve, reject) => {
        const el = document.querySelector(selector)!;
        if (el) {
            return resolve(el);
        }
        const observer = new MutationObserver((mutations) => {
            const el = document.querySelector(selector)!;
            if (el) {
                resolve(el);
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
};

const myInterval = setInterval(() => {
    const loaderElement = document.querySelector('.loader');
    const displayStyle = window.getComputedStyle(loaderElement || new Element()).display;
    const selectElement = document.querySelector('.invalid.notranslate.select-left.monospace');
    if (displayStyle === 'none' && !selectElement) {
        waitForElementToLoad('#pax').then((element) => {
            //@ts-ignore
            const maxPaxValue = Number(element.max);
            const limits = {
                min: Math.floor(maxPaxValue * 0.65),
                max: maxPaxValue
            };

            const number = Math.floor(Math.random() * (limits.max - limits.min) + limits.min);
            //@ts-ignore
            element.value = number.toString();

            //@ts-ignore
            clearInterval(myInterval);
        });
    }
}, 1000);
