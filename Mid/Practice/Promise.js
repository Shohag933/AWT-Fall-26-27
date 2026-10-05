function processOrder() {
    return new Promise((resolve, reject) => {
        console.log("Processing order....");

        setTimeout(() => {
            const success = true;

            if (success) {
                resolve({
                    orderID: 42017,
                    name: "Shohag",
                    item: "Chicken Burger",
                    quantity: 2,
                    total: 500
                });
            } else {
                reject("Failed to process order");
            }

        }, 2000);
    });
}

processOrder()
    .then((order) => {
        console.log("Order ID: ", order.orderID);
        console.log("Customer Name: ", order.name);
        console.log("Item: ", order.item);
        console.log("Quantity: ", order.quantity);
        console.log("Total: ", order.total);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Order Processing Completed");
    });