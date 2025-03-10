const bcrypt = require('bcryptjs');
const enteredPassword = '$2b$10$lldxADiJkcDfdccoNz1F4.ji8nWdqfttcYtgUSOPkCPTAD/Uk4sSm';
const storedHashedPassword = '$2b$10$lldxADiJkcDfdccoNz1F4.ji8nWdqfttcYtgUSOPkCPTAD/Uk4sSm';

bcrypt.compare(enteredPassword, storedHashedPassword, (err, result) => {
    if (err) {
        console.error('Error comparing passwords:', err);
    } else {
        console.log('Password match result:', result); // Should be true if passwords match
    }
});

