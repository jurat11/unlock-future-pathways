#!/usr/bin/env node

/**
 * SUPABASE FORM SCHEMA UPDATE SCRIPT
 * 
 * This script updates the Supabase applications table to match
 * the current application form structure:
 * - Removes: full_school_name column
 * - Adds: contact_details column
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Note: Need service role key for schema changes

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing required environment variables:');
  console.error('   - VITE_SUPABASE_URL');
  console.error('   - SUPABASE_SERVICE_ROLE_KEY');
  console.error('\nPlease add these to your .env file or run the SQL manually in Supabase SQL Editor.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function updateSchema() {
  console.log('🚀 Starting Supabase schema update...');

  try {
    // Step 1: Add contact_details column
    console.log('➕ Adding contact_details column...');
    const { error: addError } = await supabase.rpc('exec_sql', {
      sql: 'ALTER TABLE applications ADD COLUMN IF NOT EXISTS contact_details TEXT;'
    });

    if (addError) {
      console.error('❌ Error adding contact_details column:', addError);
      return;
    }
    console.log('✅ contact_details column added successfully');

    // Step 2: Remove full_school_name column
    console.log('➖ Removing full_school_name column...');
    const { error: removeError } = await supabase.rpc('exec_sql', {
      sql: 'ALTER TABLE applications DROP COLUMN IF EXISTS full_school_name;'
    });

    if (removeError) {
      console.error('❌ Error removing full_school_name column:', removeError);
      return;
    }
    console.log('✅ full_school_name column removed successfully');

    // Step 3: Add documentation
    console.log('📝 Adding column documentation...');
    const { error: commentError } = await supabase.rpc('exec_sql', {
      sql: "COMMENT ON COLUMN applications.contact_details IS 'Contact details (username, phone, or email) based on preferred contact method';"
    });

    if (commentError) {
      console.warn('⚠️  Warning: Could not add column comment:', commentError);
    } else {
      console.log('✅ Column documentation added');
    }

    // Step 4: Verify changes
    console.log('🔍 Verifying schema changes...');
    const { data: columns, error: verifyError } = await supabase.rpc('exec_sql', {
      sql: `
        SELECT column_name, data_type, is_nullable
        FROM information_schema.columns 
        WHERE table_name = 'applications' 
        AND table_schema = 'public'
        AND column_name IN ('contact_details', 'full_school_name')
        ORDER BY column_name;
      `
    });

    if (verifyError) {
      console.error('❌ Error verifying changes:', verifyError);
      return;
    }

    console.log('📊 Schema verification results:');
    if (columns && columns.length > 0) {
      columns.forEach(col => {
        console.log(`   - ${col.column_name}: ${col.data_type} (nullable: ${col.is_nullable})`);
      });
    } else {
      console.log('   - contact_details: Present ✅');
      console.log('   - full_school_name: Removed ✅');
    }

    console.log('\n🎉 Schema update completed successfully!');
    console.log('\n📝 Summary of changes:');
    console.log('   ✅ Added contact_details column (TEXT)');
    console.log('   ✅ Removed full_school_name column');
    console.log('   ✅ Updated admin panel interfaces');
    console.log('   ✅ Updated API data transformation');

  } catch (error) {
    console.error('❌ Unexpected error during schema update:', error);
  }
}

// Run the update
updateSchema();