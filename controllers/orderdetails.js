const OrderDetail= require('../models/orderdetails')

// create orderdetail
exports.createOrderDetail =async (req, res) => {
    try {
        const orderdetail = await OrderDetail.create(req.body);
        res.status(201).json(orderdetail);
    } catch (error) {
        console.error('Error creating orderdetail:', error);
        res.status(500).json({ error: 'Error creating orderdetail' });
    }
}



// Get all orderdetail
exports.getAllOrderDetail = async (req, res) => {
    try {
        const orderdetail = await OrderDetail.findAll();
        res.status(200).json(orderdetail);
    } catch (error) {
        console.error('Error fetching orderdetails:', error);
        res.status(500).json({ error: 'Error fetching orderdetails' });
    }
}

// Get orderdetail by ID
exports.getOrderDetailid =async (req, res) => {
    const orderdetailId = req.params.order_id;
    
    try {
        const orderdetail= await OrderDetail.findByPk(orderdetailId);
        if (!orderdetail) {
            return res.status(404).json({ error: 'orderdetail not found' });
        }
        res.status(200).json(orderdetail);
    } catch (error) {
        console.error('Error fetching orderdetail:', error);
        res.status(500).json({ error: 'Error fetching orderdetail' });
    }
};
/// Update a orderdetail
exports.updateOrderDetail = async (req, res) => {
    const orderdetailId = req.params.order_id;
     
    try {
        const orderdetail = await OrderDetail.findByPk(orderdetailId);
        if (!orderdetail) {
            return res.status(404).json({ error: 'orderdetail not found' });
        }
        await orderdetail.update(req.body);
        res.status(200).json({ message: 'orderdetail updated successfully' });
    } catch (error) {
        console.error('Error updating orderdetail:', error);
        res.status(500).json({ error: 'Error updating orderdetail' });
    }
};

// Delete a orderdetail
exports.deleteOrderDetail =async (req, res) => {
    const orderdetailId = req.params.order_id;
    //console.log(req.params.orderdetail_id,"this  is id")
    try {
        const orderdetail= await OrderDetail.findByPk(orderdetailId);
        if (!orderdetail) {
            return res.status(404).json({ error: 'orderdetail not found' });
        }
        await orderdetail.destroy();
        res.status(200).json({ message: 'orderdetail deleted successfully' });
    } catch (error) {
        console.error('Error deleting orderdetail:', error);
        res.status(500).json({ error: 'Error deleting orderdetail' });
    }
};