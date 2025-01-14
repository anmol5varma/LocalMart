export const constructMessageOnWhatsapp = (groupedByCategory, address) => {
    let message = `${address}\n\nOrder Summary:\n`;
    Object.keys(groupedByCategory).forEach(category => {
        message += `\n${category.toUpperCase()}:\n`;  // Category title
        groupedByCategory[category].forEach(product => {
            message += `ID: ${product.id}, Title: ${product.title}, Price: ₹${product.mrp}, Quantity: ${product.quantity}\n`;
        });
    });

    // Encoding the message for use in a URL (e.g., WhatsApp link)
    return encodeURIComponent(message);
}