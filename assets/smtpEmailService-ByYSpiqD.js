const s={gmail:{host:"smtp.gmail.com",port:587,secure:!1},outlook:{host:"smtp-mail.outlook.com",port:587,secure:!1},yahoo:{host:"smtp.mail.yahoo.com",port:587,secure:!1},custom:{host:"",port:587,secure:!1}},d=(e,t,o)=>`
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application Confirmation - UNLOCK Future Pathways</title>
    <style>
        body {
            font-family: 'Inter', Arial, sans-serif;
            line-height: 1.6;
            color: #2D1810;
            background-color: #FDF8EC;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #E75E24 0%, #B85C3A 100%);
            color: white;
            text-align: center;
            padding: 2rem;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: -0.02em;
        }
        .header p {
            margin: 0.5rem 0 0 0;
            font-size: 1.1rem;
            opacity: 0.9;
        }
        .content {
            padding: 2rem;
        }
        .greeting {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: #2D1810;
        }
        .confirmation-box {
            background: linear-gradient(135deg, #F5E6D3 0%, #FDF8EC 100%);
            border-left: 4px solid #E75E24;
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-radius: 8px;
        }
        .application-details {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1.5rem 0;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #e9ecef;
        }
        .detail-row:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        .detail-label {
            font-weight: 600;
            color: #495057;
        }
        .detail-value {
            color: #2D1810;
            font-weight: 500;
        }
        .next-steps {
            background: white;
            border: 2px solid #E75E24;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1.5rem 0;
        }
        .next-steps h3 {
            color: #E75E24;
            margin-top: 0;
            margin-bottom: 1rem;
        }
        .next-steps ul {
            margin: 0;
            padding-left: 1.2rem;
        }
        .next-steps li {
            margin-bottom: 0.5rem;
            color: #2D1810;
        }
        .contact-info {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            margin-top: 2rem;
            text-align: center;
        }
        .footer {
            background: #2D1810;
            color: white;
            text-align: center;
            padding: 1.5rem;
            font-size: 0.9rem;
        }
        .footer a {
            color: #E75E24;
            text-decoration: none;
        }
        @media (max-width: 600px) {
            .container {
                margin: 1rem;
                border-radius: 8px;
            }
            .content {
                padding: 1.5rem;
            }
            .header {
                padding: 1.5rem;
            }
            .header h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>UNLOCK</h1>
            <p>Future Pathways</p>
        </div>
        
        <div class="content">
            <div class="greeting">
                Dear ${e},
            </div>
            
            <div class="confirmation-box">
                <h2 style="margin-top: 0; color: #E75E24;">🎉 Application Received Successfully!</h2>
                <p style="margin-bottom: 0;">Thank you for taking the first step toward unlocking your future. We have successfully received your application and our team will review it carefully.</p>
            </div>
            
            <div class="application-details">
                <h3 style="margin-top: 0; color: #2D1810;">Application Details</h3>
                <div class="detail-row">
                    <span class="detail-label">Application ID:</span>
                    <span class="detail-value">#${t}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Submission Date:</span>
                    <span class="detail-value">${o}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Status:</span>
                    <span class="detail-value">Under Review</span>
                </div>
            </div>
            
            <div class="next-steps">
                <h3>What Happens Next?</h3>
                <ul>
                    <li><strong>Initial Review (24-48 hours):</strong> Our admissions team will conduct an initial review of your application.</li>
                    <li><strong>Document Verification:</strong> We may contact you if we need additional documents or clarification.</li>
                    <li><strong>Interview Process:</strong> Qualified candidates will be invited for an interview within 1-2 weeks.</li>
                    <li><strong>Final Decision:</strong> You will receive our decision within 3-4 weeks of submission.</li>
                </ul>
            </div>
            
            <p>We believe in your potential and are excited to learn more about your aspirations. Our mission is to discover, nurture, and guide students toward the future they belong.</p>
            
            <div class="contact-info">
                <h4 style="margin-top: 0; color: #2D1810;">Need Help?</h4>
                <p style="margin-bottom: 0;">If you have any questions about your application or the process, please don't hesitate to contact us.</p>
                <p style="margin: 0.5rem 0 0 0;"><strong>Email:</strong> admissions@unlockpathways.com</p>
            </div>
        </div>
        
        <div class="footer">
            <p style="margin: 0;">© 2024 UNLOCK Future Pathways. All rights reserved.</p>
            <p style="margin: 0.5rem 0 0 0;">This is an automated confirmation email. Please do not reply to this message.</p>
        </div>
    </div>
</body>
</html>
  `,l=(e,t,o)=>`
UNLOCK Future Pathways - Application Confirmation

Dear ${e},

🎉 APPLICATION RECEIVED SUCCESSFULLY!

Thank you for taking the first step toward unlocking your future. We have successfully received your application and our team will review it carefully.

APPLICATION DETAILS:
- Application ID: #${t}
- Submission Date: ${o}
- Status: Under Review

WHAT HAPPENS NEXT?

1. Initial Review (24-48 hours): Our admissions team will conduct an initial review of your application.

2. Document Verification: We may contact you if we need additional documents or clarification.

3. Interview Process: Qualified candidates will be invited for an interview within 1-2 weeks.

4. Final Decision: You will receive our decision within 3-4 weeks of submission.

We believe in your potential and are excited to learn more about your aspirations. Our mission is to discover, nurture, and guide students toward the future they belong.

Need Help?
If you have any questions about your application or the process, please contact us at: admissions@unlockpathways.com

© 2024 UNLOCK Future Pathways. All rights reserved.
This is an automated confirmation email.
  `,u=()=>{const e="custom",t="no-reply@unlockadmissions.uz",o="yozmalarinzb",i=s[e]||s.gmail;return{host:"de.ahost.cloud",port:parseInt("465"),secure:i.secure,username:t,password:o,fromName:"UNLOCK Admissions",fromEmail:"no-reply@unlockadmissions.uz"}},m=async e=>{try{const t=u();if(!t)return{success:!1,error:"SMTP configuration not found. Please set VITE_SMTP_USERNAME and VITE_SMTP_PASSWORD."};const o=d(e.applicantName,e.applicationId,e.submissionDate),i=l(e.applicantName,e.applicationId,e.submissionDate),a={smtp:t,to:e.to,subject:"Application Confirmation - Welcome to UNLOCK Future Pathways!",html:o,text:i},n=await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!n.ok){const c=await n.json().catch(()=>({message:"Unknown error"}));throw new Error(`SMTP API error: ${c.message||n.statusText}`)}const r=await n.json();return console.log("SMTP confirmation email sent successfully:",r),{success:!0,messageId:r.messageId}}catch(t){return console.error("Failed to send SMTP confirmation email:",t),{success:!1,error:t instanceof Error?t.message:"Unknown SMTP error"}}},p=async e=>{try{const t="Application Confirmation - Welcome to UNLOCK Future Pathways!",o=l(e.applicantName,e.applicationId,e.submissionDate),i=`mailto:${e.to}?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(o)}`;return{success:!1,error:"Browser email not configured for production"}}catch(t){return console.error("Failed to send browser email:",t),{success:!1,error:t instanceof Error?t.message:"Unknown browser email error"}}},g=async(e,t,o)=>{const i={to:e,applicantName:t,applicationId:o,submissionDate:new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})};let a=await m(i);return a.success||(console.log("SMTP failed, trying browser email fallback..."),a=await p(i)),a};export{g as sendApplicationConfirmation,p as sendBrowserEmail,m as sendSMTPConfirmationEmail};
