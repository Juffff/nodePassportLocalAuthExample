module.exports = opts => {
    return `http://fakeimg.pl/${opts.width || 200}x${opts.height || 200}/?text=${opts.text || 'No image'}&font=lobster`;
};
