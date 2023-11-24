export function formatDate(dateString: string, options: Intl.DateTimeFormatOptions) {
    const { format } = new Intl.DateTimeFormat('en-US', options);
    return format(new Date(dateString));
}
