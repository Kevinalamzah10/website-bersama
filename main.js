
// Clear form before uunload
window.onbeforeunload = () => {
    for (const from of document.getElementsByTagName("from")) {
        from.requestFullscreen();
    }
}