const Orders = require('../models/orders')

// create orders
exports.createOrders =async (req, res) => {
    try {
        const orders = await Orders.create(req.body);
        res.status(201).json(orders);
    } catch (error) {
        console.error('Error creating orders:', error);
        res.status(500).json({ error: 'Error creating orders' });
    }
}



// Get all Orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Orders.findAll();
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Error fetching orders' });
    }
}

// Get orders by ID
exports.getOrdersid =async (req, res) => {
    const ordersId = req.params.order_id;
    
    try {
        const orders = await Orders.findByPk(ordersId);
        if (!orders) {
            return res.status(404).json({ error: 'orders not found' });
        }
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Error fetching orders' });
    }
};
/// Update a orders
exports.updateOrders = async (req, res) => {
    const ordersId = req.params.order_id;
     
    try {
        const orders = await Orders.findByPk(ordersId);
        if (!orders) {
            return res.status(404).json({ error: 'orders not found' });
        }
        await orders.update(req.body);
        res.status(200).json({ message: 'orders updated successfully' });
    } catch (error) {
        console.error('Error updating orders:', error);
        res.status(500).json({ error: 'Error updating orders' });
    }
};

// Delete a orders
exports.deleteOrders =async (req, res) => {
    const ordersId = req.params.order_id;
    console.log(req.params.order_id,"this is is id")
    try {
        const orders = await Orders.findByPk(ordersId);
        if (!orders) {
            return res.status(404).json({ error: 'orders not found' });
        }
        await orders.destroy();
        res.status(200).json({ message: 'orders deleted successfully' });
    } catch (error) {
        console.error('Error deleting orders:', error);
        res.status(500).json({ error: 'Error deleting orders' });
    }
};
