export function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}