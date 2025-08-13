const bcrypt = require('bcryptjs');

const password = 'admin123'; // Your admin password
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('🔐 Password Hash Generated');
    console.log('========================');
    console.log(`Password: ${password}`);
    console.log(`Hash: ${hash}`);
    console.log('\n📋 Use this hash in your Supabase SQL:');
    console.log(`INSERT INTO admin_credentials (username, password_hash) VALUES ('admin', '${hash}');`);
    console.log('\n💡 Copy the hash above and replace it in your Supabase setup');
  }
}); 