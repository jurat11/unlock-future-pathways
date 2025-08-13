# Admin Dashboard Guide - User Comments Management

## Overview
The Admin Dashboard provides a comprehensive interface for managing user comments and feedback from the website. It's accessible at `/unlockadmform/comments` after logging into the admin panel.

## Features

### 1. Dashboard Overview
- **Total Comments**: Shows the total number of comments received
- **Pending**: Comments awaiting review or action
- **In Progress**: Comments being worked on
- **Resolved**: Comments that have been addressed

### 2. Search and Filtering
- **Search Bar**: Search through comments by text, element, or user email
- **Status Filter**: Filter by comment status (All, Pending, In Progress, Resolved)
- **Page Filter**: Filter by which page the comment was made on

### 3. Comment Management
- **View Details**: Click the "View" button to see full comment details
- **Status Updates**: Quickly change comment status using the status buttons
- **Admin Notes**: Add internal notes for team collaboration
- **Admin Response**: Add responses that can be shared with users
- **Delete**: Remove inappropriate or resolved comments

### 4. Export Options
- **JSON Export**: Download all comments as a structured JSON file
- **CSV Export**: Download comments in spreadsheet format for analysis

## How to Use

### Accessing the Dashboard
1. Go to `/unlockadmform` and log in with admin credentials
2. Click on the "User Comments" card
3. Or navigate directly to `/unlockadmform/comments`

### Managing Comments
1. **Review New Comments**: Check the "Pending" tab for new feedback
2. **Add Notes**: Use admin notes to track internal discussions
3. **Update Status**: Mark comments as "In Progress" when working on them
4. **Resolve**: Mark as "Resolved" when the feedback has been addressed
5. **Export Data**: Use export functions for reporting and analysis

### Best Practices
- **Regular Review**: Check for new comments daily
- **Quick Response**: Update status to "In Progress" when starting work
- **Team Collaboration**: Use admin notes to communicate with team members
- **Data Export**: Regularly export data for backup and analysis

## Comment Status Workflow

1. **Pending** → New comment received, needs review
2. **In Progress** → Comment is being worked on
3. **Resolved** → Feedback has been addressed

## Integration with Website
The commenting system is integrated throughout the website, allowing users to:
- Click anywhere on the page to add feedback
- Specify which element they're commenting on
- Provide their email for follow-up (optional)
- See the status of their feedback

## Technical Details
- Comments are stored in browser localStorage
- Real-time updates when new comments are added
- Responsive design for mobile and desktop
- Secure admin access through existing authentication

## Support
For technical issues or questions about the admin dashboard, refer to the main documentation or contact the development team.
