SELECT users1.nama, users1.role_user, products.kode_produk, products.nama, products.price
FROM users1 LEFT JOIN products ON users1.users_id = products.users_id;