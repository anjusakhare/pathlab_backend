const Customer = require('../models/customer')

// create customer
exports.createCustomer =async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({ error: 'Error creating customer' });
    }
}



// Get all customer
exports.getAllCustomers = async (req, res) => {
    try {
        const customer = await Customer.findAll();
        res.status(200).json(customer);
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ error: 'Error fetching customers' });
    }
}

// Get customer by ID
exports.getCustomrid =async (req, res) => {
    const customerId = req.params.customer_id;
    
    try {
        const customer = await Customer.findByPk(customerId);
        if (!customer) {
            return res.status(404).json({ error: 'customer not found' });
        }
        res.status(200).json(customer);
    } catch (error) {
        console.error('Error fetching customer:', error);
        res.status(500).json({ error: 'Error fetching customer' });
    }
};
/// Update a customer
exports.updateCustomer = async (req, res) => {
    const customerId = req.params.customer_id;
     
    try {
        const customer = await Customer.findByPk(customerId);
        if (!customer) {
            return res.status(404).json({ error: 'customer not found' });
        }
        await customer.update(req.body);
        res.status(200).json({ message: 'customer updated successfully' });
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({ error: 'Error updating customer' });
    }
};

// Delete a customer
exports.deleteCustomer =async (req, res) => {
    const customerId = req.params.customer_id;
    console.log(req.params.customer_id,"this is is id")
    try {
        const customer = await Customer.findByPk(customerId);
        if (!customer) {
            return res.status(404).json({ error: 'customer not found' });
        }
        await customer.destroy();
        res.status(200).json({ message: 'customer deleted successfully' });
    } catch (error) {
        console.error('Error deleting customer:', error);
        res.status(500).json({ error: 'Error deleting customer' });
    }
};
