SELECT nama AS Nama_Lengkap, CONCAT(phone,',',address) AS Data_User
FROM users
WHERE Gender="Female";