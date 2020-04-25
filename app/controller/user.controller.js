const db = require('../config/db.config.js');
const User = db.user;

// Post a Customer
exports.create = (req, res) => {	
	// Save to PostgreSQL database
    
    User.create(req.body).then(user => {		
			// Send created customer to client
			res.json(user);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// FETCH All Customers
exports.findAll = (req, res) => {
	User.findAll().then(users => {
			// Send All Customers to Client
			res.json(users);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	User.findById(req.params.id).then(user => {
			res.json(user);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};


// Find a Customer by Email
exports.findByEmail = (req, res) => {	
	User.findByEmail(req.params.password).then(user => {
			res.json(user);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// Update a Customer
exports.update = (req, res) => {
	const id = req.body.id;
	User.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> User Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	User.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> User Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};