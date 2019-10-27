const parseKeys = () => {
    const qs = window.location.search.substring(1);
    const parts = qs.split('&');

    return parts.reduce((acc, part) => {
        const pair = part.split('=');
        acc.set(pair[0], decodeURIComponent(pair[1]));

        return acc
    }, new Map())
};

const replaceKey = (url, key, value) => url.replace(new RegExp('([?&]' + key + ')=[^?&]+'), '$1=' + value);

export {
    parseKeys,
    replaceKey
}
