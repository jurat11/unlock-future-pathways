const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Please set VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function updateDatabaseSchema() {
  console.log('🚀 Updating Supabase database schema...');

  try {
    // Drop existing applications table
    console.log('📋 Dropping existing applications table...');
    const { error: dropError } = await supabase.rpc('exec_sql', {
      sql: 'DROP TABLE IF EXISTS public.applications CASCADE;'
    });

    if (dropError) {
      console.error('Error dropping table:', dropError);
      throw dropError;
    }

    // Create new applications table
    console.log('📋 Creating new applications table...');
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS public.applications (
        id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
        
        -- Personal Information
        full_name TEXT NOT NULL,
        city_country TEXT NOT NULL,
        date_of_birth TEXT NOT NULL,
        email TEXT NOT NULL,
        gender TEXT NOT NULL,
        other_gender TEXT,
        birth_country TEXT NOT NULL,
        city_of_birth TEXT NOT NULL,
        citizenship_countries TEXT NOT NULL,
        nationality TEXT NOT NULL,
        preferred_contact TEXT NOT NULL,
        personal_phone TEXT NOT NULL,
        legal_guardian_info TEXT NOT NULL,

        -- Education
        current_school TEXT NOT NULL,
        school_type TEXT NOT NULL,
        is_boarding_school TEXT NOT NULL,
        graduation_date TEXT NOT NULL,
        gpa TEXT NOT NULL,
        full_school_name TEXT NOT NULL,
        school_location TEXT NOT NULL,
        school_curriculum TEXT NOT NULL,
        expected_graduation_date TEXT NOT NULL,
        school_gpa TEXT NOT NULL,
        is_school_specialized TEXT NOT NULL,
        specialization_area TEXT,

        -- Short Essays
        family_background TEXT NOT NULL,
        extracurricular_activities TEXT NOT NULL,
        honors_achievements TEXT NOT NULL,
        motivational_essay_idea TEXT,
        previous_application_experience TEXT,
        additional_information TEXT,

        -- Future Plans
        countries_of_interest TEXT NOT NULL,
        target_universities TEXT NOT NULL,
        study_field TEXT NOT NULL,
        choice_confidence TEXT NOT NULL,

        -- Finances
        funding_source TEXT NOT NULL,
        investment_amount TEXT NOT NULL,
        apply_to_eyuf TEXT NOT NULL,
        finance_agreement BOOLEAN NOT NULL DEFAULT false,

        -- Standardized Tests (stored as JSONB)
        standardized_tests JSONB DEFAULT '[]',
        
        -- Metadata
        submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        status TEXT NOT NULL DEFAULT 'pending',
        notes TEXT,
        
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
      );
    `;

    const { error: createError } = await supabase.rpc('exec_sql', {
      sql: createTableSQL
    });

    if (createError) {
      console.error('Error creating table:', createError);
      throw createError;
    }

    // Enable RLS
    console.log('🔒 Enabling Row Level Security...');
    const { error: rlsError } = await supabase.rpc('exec_sql', {
      sql: 'ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;'
    });

    if (rlsError) {
      console.error('Error enabling RLS:', rlsError);
      throw rlsError;
    }

    // Create policies
    console.log('📋 Creating security policies...');
    const policies = [
      `CREATE POLICY "Anyone can insert applications" ON public.applications FOR INSERT TO anon WITH CHECK (true);`,
      `CREATE POLICY "Authenticated users can view applications" ON public.applications FOR SELECT TO authenticated USING (true);`,
      `CREATE POLICY "Authenticated users can update applications" ON public.applications FOR UPDATE TO authenticated USING (true);`
    ];

    for (const policy of policies) {
      const { error: policyError } = await supabase.rpc('exec_sql', {
        sql: policy
      });

      if (policyError) {
        console.error('Error creating policy:', policyError);
        throw policyError;
      }
    }

    // Create indexes
    console.log('📊 Creating indexes...');
    const indexes = [
      'CREATE INDEX IF NOT EXISTS idx_applications_submitted_at ON public.applications(submitted_at);',
      'CREATE INDEX IF NOT EXISTS idx_applications_status ON public.applications(status);',
      'CREATE INDEX IF NOT EXISTS idx_applications_email ON public.applications(email);',
      'CREATE INDEX IF NOT EXISTS idx_applications_full_name ON public.applications(full_name);'
    ];

    for (const index of indexes) {
      const { error: indexError } = await supabase.rpc('exec_sql', {
        sql: index
      });

      if (indexError) {
        console.error('Error creating index:', indexError);
        throw indexError;
      }
    }

    // Create trigger function
    console.log('⚡ Creating trigger function...');
    const triggerFunction = `
      CREATE OR REPLACE FUNCTION update_applications_updated_at()
      RETURNS TRIGGER AS $$
      BEGIN
          NEW.updated_at = now();
          RETURN NEW;
      END;
      $$ language 'plpgsql';
    `;

    const { error: functionError } = await supabase.rpc('exec_sql', {
      sql: triggerFunction
    });

    if (functionError) {
      console.error('Error creating trigger function:', functionError);
      throw functionError;
    }

    // Create trigger
    console.log('⚡ Creating trigger...');
    const trigger = `
      CREATE TRIGGER update_applications_updated_at
        BEFORE UPDATE ON public.applications
        FOR EACH ROW
        EXECUTE FUNCTION update_applications_updated_at();
    `;

    const { error: triggerError } = await supabase.rpc('exec_sql', {
      sql: trigger
    });

    if (triggerError) {
      console.error('Error creating trigger:', triggerError);
      throw triggerError;
    }

    console.log('✅ Database schema updated successfully!');
    console.log('📋 New applications table created with all required fields');
    console.log('🔒 Row Level Security enabled');
    console.log('📊 Indexes created for performance');
    console.log('⚡ Triggers configured for automatic updates');

  } catch (error) {
    console.error('❌ Error updating database schema:', error);
    process.exit(1);
  }
}

updateDatabaseSchema(); 