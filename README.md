# UNLOCK Future Pathways - Application Form

A comprehensive application form for the UNLOCK Future Pathways program, built with React, TypeScript, and Supabase.

## Features

- **Complete Application Form**: Multi-section form covering personal information, education, essays, future plans, and finances
- **Professional Design**: Clean, minimalistic interface with serious, trustworthy appearance
- **Database Integration**: Supabase backend for storing and managing applications
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Form Validation**: Comprehensive validation for all required fields
- **Admin Panel**: Secure admin interface for reviewing applications

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, Shadcn/ui
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router DOM
- **State Management**: React Query for server state
- **Styling**: Tailwind CSS with custom design system

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd unlock-future-pathways
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Application pages
├── api/                # API integration functions
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## Deployment

### Production Build

```bash
npm run build
```

### Supabase Setup

1. Run the SQL migration in Supabase SQL Editor:
   - Use `SUPABASE_UPDATE.sql` for database schema
   - Or run `node update-supabase-schema.js` for programmatic setup

2. Configure Row Level Security policies
3. Set up admin authentication

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to UNLOCK Future Pathways.

## Support

For support, contact the UNLOCK Future Pathways team.
