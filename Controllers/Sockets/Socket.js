// Tasarlanacak Örnek Kod Parçası

let shoppingList = [];

exports.addItem = (req, res) => {
    const { item } = req.body;
    shoppingList.push(item);
    res.status(201).json({ message: 'Item added successfully', item });
};

/**exports.getItems = (req, res) => {
    res.status(200).json(shoppingList);
};*/
